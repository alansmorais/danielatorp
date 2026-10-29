import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorkshopBySlug } from '../data/workshopsData';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Clock, Utensils, Luggage, Users, Award } from 'lucide-react';

interface WorkshopDetailPageProps {
  onOpenPrivacyModal: () => void;
}

export const WorkshopDetailPage: React.FC<WorkshopDetailPageProps> = ({
  onOpenPrivacyModal,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const workshop = getWorkshopBySlug(slug || '');
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [participantEmail, setParticipantEmail] = useState('');
  const [priceOption, setPriceOption] = useState('standard');
  const [checkoutError, setCheckoutError] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const priceOptions = workshop?.id === 'lek-med-meg'
    ? [{ value: 'level1', label: 'Nivå 1 · 22.–24.01.2027 · 6 400 NOK' }, { value: 'level2', label: 'Nivå 2 · 29.–31.01.2027 · 7 250 NOK' }]
    : workshop?.id === 'kvinneessens-og-livskraft'
      ? [{ value: 'samhain', label: 'SAMHAIN – 3 650 NOK' }, { value: 'imbolc', label: 'IMBOLC – 4 350 NOK' }, { value: 'beltane', label: 'BELTANE – 4 350 NOK' }]
      : [{ value: 'standard', label: workshop?.id === 'kun-for-par' ? '8 500 NOK per par' : 'Fortsett til betaling' }];

  const handleCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckoutError('');
    setCheckoutLoading(true);
    try {
      const endpoint = (import.meta as ImportMeta & { env?: { VITE_STRIPE_WORKER_URL?: string } }).env?.VITE_STRIPE_WORKER_URL
        || 'https://danielatorp-no-stripe-checkout.alanpkmorais.workers.dev';
      if (endpoint.includes('YOUR_SUBDOMAIN')) {
        throw new Error('Online betaling er ikke konfigurert ennå. Kontakt Daniela for påmelding.');
      }
      const response = await fetch(`${endpoint.replace(/\/$/, '')}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workshopId: workshop?.id,
          priceOption,
          participantName: participantName.trim(),
          participantEmail: participantEmail.trim()
        })
      });
      const result = await response.json() as { url?: string; error?: string };
      if (!response.ok || !result.url) throw new Error(result.error || 'Betalingen kunne ikke startes. Prøv igjen.');
      window.location.assign(result.url);
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : 'En feil oppstod ved klargjøring av betaling.');
      setCheckoutLoading(false);
    }
  };

  if (!workshop) {
    return (
      <div className="py-32 px-4 text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-light text-neutral-900 mb-4">
          Workshop ikke funnet
        </h1>
        <p className="text-neutral-600 text-sm mb-6">
          Beklager, vi fant ikke workshopen du lette etter.
        </p>
        <Link to="/workshops" className="btn-primary-solid text-xs">
          Se alle 9 workshops
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section
        className="relative py-28 sm:py-36 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.88)), url('${workshop.heroImage}')`,
        }}
      >
        <div className="relative z-10 max-w-[760px] mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#ee5a7a] uppercase mb-2 block">
            {workshop.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-neutral-900 uppercase mb-3">
            {workshop.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8">
            {workshop.subtitle}
          </p>
          <button type="button" onClick={() => { setCheckoutError(''); setPriceOption(workshop.id === 'lek-med-meg' ? 'level1' : workshop.id === 'kvinneessens-og-livskraft' ? 'samhain' : 'standard'); setRegistrationOpen(true); }} className="btn-primary-solid text-xs py-3 px-8">
            {workshop.id === 'trauma-workshops-ane-daniela' ? 'Betal med Vipps' : 'Meld deg på'}
          </button>
        </div>
      </section>

      {/* 2. TWO-COLUMN WORKSHOP CONTENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          {/* Left Column: Descriptions, Program, Practices */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-1">
                {workshop.title}
              </h2>
              <h3 className="text-lg font-normal text-[#ee5a7a] mb-6">
                {workshop.subtitle}
              </h3>
            </div>


            <div className="space-y-4 text-[15px] text-neutral-700 leading-relaxed font-light">
              {workshop.fullDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {workshop.quote && (
              <div className="bg-[#fdf8f9] border-l-4 border-[#ee5a7a] p-5 my-6 rounded-r-lg italic text-neutral-800 text-[14.5px] leading-relaxed">
                {workshop.quote}
              </div>
            )}

            {/* General bullets */}
            {workshop.bullets && workshop.bullets.length > 0 && (
              <div className="pt-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                  {workshop.bulletsTitle || 'Hva du lærer på workshopen:'}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {workshop.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#ee5a7a] font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Separate Men & Women bullets for couples workshop */}
            {workshop.forWomenBullets && (
              <div className="pt-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                  For kvinner:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {workshop.forWomenBullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#ee5a7a] font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {workshop.forMenBullets && (
              <div className="pt-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                  For menn:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {workshop.forMenBullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#ee5a7a] font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3x3 Levels for Bekkenbunn */}
            {workshop.levels && (
              <div className="pt-4 space-y-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                  De tre dimensjonene i 3×3-metoden:
                </h4>
                {workshop.levels.map((lvl, idx) => (
                  <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="text-sm font-semibold text-[#ee5a7a] mb-1">
                      {lvl.title}
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 4 Seasons Grid for Kvinneessens */}
            {workshop.seasons && (
              <div className="pt-6">
                <h4 className="text-lg font-medium text-neutral-900 mb-4">
                  Årets fire samlinger:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {workshop.seasons.map((season, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-50 border border-neutral-200/80 rounded-lg overflow-hidden flex flex-col justify-between"
                    >
                      <div className="h-36 overflow-hidden bg-neutral-200">
                        <img
                          src={season.image}
                          alt={season.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-semibold text-neutral-900 text-sm">
                          {season.name}
                        </h5>
                        <span className="text-[11px] font-medium text-[#ee5a7a] block mb-1">
                          {season.date}
                        </span>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          <strong>{season.focus}:</strong> {season.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pusteritual Section for Kvinneessens */}
            {workshop.pusteritual && (
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <div className="flex flex-col sm:flex-row gap-5 bg-[#fdf8f9] p-5 rounded-xl border border-neutral-200/60 items-center">
                  <img
                    src={workshop.pusteritual.image}
                    alt={workshop.pusteritual.title}
                    className="w-36 h-36 object-cover rounded-lg shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-neutral-900 mb-2">
                      {workshop.pusteritual.title}
                    </h4>
                    {workshop.pusteritual.description.map((line, idx) => (
                      <p key={idx} className="text-xs text-neutral-600 leading-relaxed mb-2">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Days program for Lek med meg */}
            {workshop.daysProgram && (
              <div className="pt-6 space-y-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                  Reisens tre dager:
                </h4>
                {workshop.daysProgram.map((d, idx) => (
                  <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                    <h5 className="text-sm font-semibold text-[#ee5a7a] mb-1">
                      {d.title}
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Practical Details Sidebar */}
          <div className="lg:col-span-5 bg-neutral-50/70 p-6 sm:p-8 rounded-2xl border border-neutral-200/70 space-y-6">
            {/* Workshop Photography Card */}
            <div className="rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs bg-white">
              {workshop.id === 'trauma-workshops-ane-daniela' ? (
                <img
                  src="/images/promo-small.jpg"
                  alt="Flyer for Traumaworkshops Ané & Daniela"
                  className="block h-auto max-h-[32rem] w-full object-contain"
                  loading="eager"
                />
              ) : (
                <img
                  src={workshop.cardImage}
                  alt={`Fotografi for workshopen ${workshop.title}`}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              )}
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] border-b border-neutral-200/80 pb-3">
              Praktisk informasjon
            </h4>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-medium text-neutral-900 uppercase">Møtested</h5>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  {workshop.location}
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-medium text-neutral-900 uppercase">Tid og program</h5>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  {workshop.timing}
                </p>
              </div>
            </div>

            {/* Catering */}
            {workshop.catering && (
              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-medium text-neutral-900 uppercase">Servering</h5>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    {workshop.catering}
                  </p>
                </div>
              </div>
            )}

            {/* What to bring */}
            {workshop.whatToBring && (
              <div className="flex items-start gap-3">
                <Luggage className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-medium text-neutral-900 uppercase">Ta med</h5>
                  <ul className="text-xs text-neutral-600 mt-0.5 space-y-1">
                    {workshop.whatToBring.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Price Box */}
            <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                Pris og vilkår
              </h5>
              {workshop.priceNOK && (
                <div className="text-lg font-medium text-[#ee5a7a] mb-0.5">
                  {workshop.priceNOK}
                </div>
              )}
              {workshop.priceNote && (
                <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed border-t border-neutral-100 pt-2">
                  {workshop.priceNote}
                </p>
              )}
            </div>

            {/* Target Audience */}
            {workshop.targetAudience && (
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-medium text-neutral-900 uppercase mb-1">
                    Hvem passer kurset for?
                  </h5>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {workshop.targetAudience.map((a, idx) => (
                      <li key={idx}>• {a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Host profiles: dedicated layout for Ané & Daniela */}
            {workshop.id === 'trauma-workshops-ane-daniela' ? (
              <div className="space-y-5 pt-4">
                <h4 className="text-lg font-medium text-neutral-900">Møt kursholderne</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <article className="rounded-xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
                    <img
                      src="/images/anne-small.jpg"
                      alt="Anne Brit Borch Sandberg"
                      className="mx-auto mb-4 h-32 w-32 rounded-full object-cover object-center ring-4 ring-[#f7e7e8] shadow-sm"
                      loading="lazy"
                    />
                    <h5 className="text-sm font-semibold text-neutral-900">Anne Brit Borch Sandberg</h5>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                      Psykiatrisk sykepleier, kognitiv terapeut og AIM-veileder (Anerkjennelse, Innsikt, Mestring).
                    </p>
                  </article>
                  <article className="rounded-xl border border-neutral-200 bg-white p-5 text-center shadow-sm">
                    <img
                      src="/images/daniela-small.jpg"
                      alt="Daniela Torp"
                      className="mx-auto mb-4 h-32 w-32 rounded-full object-cover object-center ring-4 ring-[#f7e7e8] shadow-sm"
                      loading="lazy"
                    />
                    <h5 className="text-sm font-semibold text-neutral-900">Daniela Torp</h5>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                      Over 20 års erfaring med kropp, intimitet, seksualitet og relasjoner, med kroppsbaserte og traumebevisste tilnærminger.
                    </p>
                  </article>
                </div>
              </div>
            ) : workshop.hosts ? (
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-neutral-200">
                <Award className="w-5 h-5 text-[#ee5a7a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-medium text-neutral-900 uppercase mb-1">
                    Om kursholderne
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {workshop.hosts}
                  </p>
                </div>
              </div>
            ) : null}

            {/* Testimonials */}
            {workshop.testimonials && workshop.testimonials.length > 0 && (
              <div className="pt-2">
                <h5 className="text-xs font-medium text-neutral-900 uppercase mb-2">
                  Deltakererfaringer
                </h5>
                {workshop.testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-neutral-200 text-xs italic text-neutral-600 mb-2">
                    «{t.quote}»
                    <div className="text-[#ee5a7a] font-medium not-italic mt-1 text-[11px]">
                      – {t.author}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setCheckoutError('');
                  setPriceOption(workshop.id === 'lek-med-meg' ? 'level1' : workshop.id === 'kvinneessens-og-livskraft' ? 'samhain' : 'standard');
                  setRegistrationOpen(true);
                }}
                className="btn-primary-solid w-full text-center text-xs py-3 block"
              >
                {workshop.id === 'trauma-workshops-ane-daniela' ? 'Betal depositum' : 'Meld deg på og betal'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SPECIFIC TO THIS WORKSHOP */}
      {registrationOpen && workshop && (
        workshop.id === 'trauma-workshops-ane-daniela' ? (
          <div role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setRegistrationOpen(false); }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4">
            <section role="dialog" aria-modal="true" aria-labelledby="registration-modal-title" className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 sm:p-8 text-left shadow-2xl">
              <button type="button" aria-label="Lukk" onClick={() => setRegistrationOpen(false)} className="absolute right-4 top-3 text-3xl text-neutral-500">×</button>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">Påmelding og betaling</p>
              <h2 id="registration-modal-title" className="mb-3 pr-6 text-2xl font-medium text-neutral-900">Traumaworkshops Ané & Daniela</h2>
              <p className="mb-5 text-sm leading-relaxed text-neutral-600">For å reservere plassen din betaler du et depositum på 50 % via Vipps. Send deretter påmeldingen din på SMS.</p>
              <div className="mb-5 rounded-xl border border-neutral-200 bg-[#fdf8f9] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Totalpris</p>
                <p className="mb-4 text-2xl font-semibold text-neutral-900">2 850 NOK</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Depositum (50 %)</p>
                <p className="mb-4 text-xl font-semibold text-neutral-900">1 425 NOK</p>
                <p className="text-sm text-neutral-700">Betal via Vipps til:</p>
                <p className="mt-1 text-2xl font-semibold text-[#ee5a7a]">#970088</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">Plassen bekreftes når depositumet er mottatt. Du kan betale resten av beløpet etter avtale med arrangørene.</p>
              </div>
              <a href="sms:95864782?body=Hei%2C%20jeg%20har%20betalt%20depositum%20via%20Vipps%20og%20%C3%B8nsker%20%C3%A5%20melde%20meg%20p%C3%A5%20Traumaworkshops%20An%C3%A9%20%26%20Daniela%2021.%E2%80%9322.%20november." className="btn-primary-solid block w-full py-3 text-center text-sm">
                Jeg har betalt – send påmelding på SMS
              </a>
              <p className="mt-3 text-center text-xs leading-relaxed text-neutral-500">Husk å fullføre Vipps-betalingen før du sender påmeldingen.</p>
            </section>
          </div>
        ) : (
          <div role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !checkoutLoading) setRegistrationOpen(false); }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4">
            <section role="dialog" aria-modal="true" aria-labelledby="registration-modal-title" className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 sm:p-8 text-left shadow-2xl">
              <button type="button" aria-label="Lukk" onClick={() => setRegistrationOpen(false)} disabled={checkoutLoading} className="absolute right-4 top-3 text-3xl text-neutral-500">×</button>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">Påmelding og betaling</p>
              <h2 id="registration-modal-title" className="mb-3 pr-6 text-2xl font-medium text-neutral-900">{workshop.title}</h2>
              <p className="mb-5 text-sm text-neutral-600">Fyll inn kontaktinformasjonen din for å fortsette til sikker betaling med Stripe.</p>
              <form onSubmit={handleCheckout} className="grid gap-4">
                {priceOptions.length > 1 && (
                  <div>
                    <label htmlFor="payment-option" className="mb-1 block text-sm font-medium text-neutral-800">Velg arrangement *</label>
                    <select id="payment-option" value={priceOption} onChange={(event) => setPriceOption(event.target.value)} className="w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm">
                      {priceOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                  </div>
                )}
                <div>
                  <label htmlFor="registration-name" className="mb-1 block text-sm font-medium text-neutral-800">Fullt navn *</label>
                  <input id="registration-name" name="name" autoComplete="name" required maxLength={120} value={participantName} onChange={(event) => setParticipantName(event.target.value)} className="w-full rounded-lg border border-neutral-300 p-3 text-sm" />
                </div>
                <div>
                  <label htmlFor="registration-email" className="mb-1 block text-sm font-medium text-neutral-800">E-post *</label>
                  <input id="registration-email" name="email" type="email" autoComplete="email" required maxLength={254} value={participantEmail} onChange={(event) => setParticipantEmail(event.target.value)} className="w-full rounded-lg border border-neutral-300 p-3 text-sm" />
                </div>
                {checkoutError && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{checkoutError}</p>}
                <button type="submit" disabled={checkoutLoading} className="btn-primary-solid w-full py-3 text-sm disabled:opacity-60">
                  {checkoutLoading ? 'Klargjør sikker betaling…' : 'Fortsett til sikker betaling'}
                </button>
                <p className="text-xs leading-relaxed text-neutral-500">Betalingen behandles sikkert av Stripe. Påmeldingen bekreftes etter at betalingen er verifisert.</p>
              </form>
            </section>
          </div>
        )
      )}

      {workshop.id !== 'trauma-workshops-ane-daniela' && (
        <ContactSection
          title={`Meld deg på: ${workshop.title}`}
          subtitle="Send inn din henvendelse, så tar Daniela kontakt med deg med praktiske detaljer."
          defaultSubject={`Påmelding: ${workshop.title}`}
          formType="workshop_registration"
          workshopId={workshop.id}
          workshopTitle={workshop.title}
          onOpenPrivacyModal={onOpenPrivacyModal}
        />
      )}
    </div>
  );
};
