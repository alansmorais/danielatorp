import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { CheckCircle2, Video, MapPin, Sparkles } from 'lucide-react';

interface ConsultationPageProps {
  onOpenPrivacyModal: () => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({
  onOpenPrivacyModal,
}) => {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="hero-gradient relative py-20 sm:py-28 px-4 sm:px-6 text-center border-b border-black/5">
        <div className="hero-radial-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-[720px] mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] block">
            Én til én & Par
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            Personlige konsultasjoner
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            Når du foretrekker et privat møte – én til én eller som par. Når du føler at noen ting bare kan sies ansikt til ansikt. Jeg er her for deg.
          </p>
          <div className="pt-2">
            <a href="#kontakt" className="btn-primary-solid text-xs py-2.5 px-6">
              Meld interesse / bestill time
            </a>
          </div>
        </div>
      </section>

      {/* CONSULTATION DETAILS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          {/* Left Column: What I Help With */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-4">
                Veiledning for dypere trygghet og intimitet
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-4">
                Jeg tilbyr personlige konsultasjoner for både par og enkeltpersoner. Jeg hjelper deg med å finne løsninger på utfordringene dine. Jeg løser dem ikke for deg; jeg følger deg på veien mot ønsket mål. Selve utviklingsreisen gjør du selv, men jeg støtter og veileder deg trygt hele veien.
              </p>
            </div>

            <div className="bg-[#fff5f7] p-5 rounded-xl border border-neutral-100 space-y-2">
              <h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                <Video className="w-4 h-4 text-[#ee5a7a]" />
                Hvordan møtes vi?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Jeg tilbyr konsultasjoner ved personlig oppmøte (i Oslo eller Tsjekkia) eller digitalt over nettet (f.eks. via Skype, Zoom eller Google Meet). Dersom du ønsker en samtale, ta gjerne kontakt via skjemaet nedenfor.
              </p>
            </div>

            <div>
              <h4 className="text-base font-medium text-neutral-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ee5a7a]" />
                Hva kan jeg hjelpe med?
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>
                    Relasjonsutfordringer innen alle områder av intimitet (se{' '}
                    <Link to="/6-piliru-intimity" className="text-[#ee5a7a] underline">
                      Intimitetens 6 søyler
                    </Link>
                    ).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Smerter og ubehag under samleie eller berøring.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Lav eller fraværende seksuell lyst og vitalitet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Opptrening og rehabilitering etter operasjon, keisersnitt eller rifter.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Traumer og emosjonelle sår knyttet til seksualitet og relasjoner.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Avstigmatisering av sensitive og tabubelagte temaer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Utfordringer med ereksjon eller tidlig utløsning for menn.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Kommunikasjonsvansker og emosjonell avstand i parforholdet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ee5a7a] shrink-0 mt-0.5" />
                  <span>Selvkjærlighet, grensesetting og kontakt med egen kropp.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Pricing & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200/80">
              <h3 className="text-base font-semibold text-neutral-900 mb-1">
                Passer for
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Voksne menn, kvinner og par i alle livsfaser.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">
                  Priser og pakker
                </h4>
                <div className="text-xs text-neutral-700 divide-y divide-neutral-200/80">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>1 x kroppsarbeid / massasje (2–4 timer):</span>
                    <strong className="shrink-0 text-neutral-900">3 990 CZK</strong>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>Pakke 5 x (kroppsarbeid):</span>
                    <strong className="shrink-0 text-neutral-900">18 000 CZK</strong>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>Veiledning / økt (4–6 timer):</span>
                    <strong className="shrink-0 text-neutral-900">6 500 CZK</strong>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>Pakke 5 x (veiledning):</span>
                    <strong className="shrink-0 text-neutral-900">30 000 CZK</strong>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>Digital konsultasjon (60–90 min):</span>
                    <strong className="shrink-0 text-neutral-900">2 300 CZK</strong>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span>Pakke 5 x (digitalt):</span>
                    <strong className="shrink-0 text-neutral-900">10 500 CZK</strong>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-500 pt-2 leading-relaxed">
                  <strong>Rabatterte pakker:</strong> Pakkeprisene betales på forhånd som et samlet beløp og kan deles mellom partnere.
                  <br />
                  <em>(Priser i CZK / tsjekkiske koruna – kontakt Daniela for veiledende pris og oppgjør i norske kroner [NOK]).</em>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#ee5a7a]" />
                  Hvor finner konsultasjonene sted?
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Norge (Oslo), Tsjekkia eller digitalt over nettet (Zoom / Teams / Google Meet).
                </p>
              </div>

              <div className="mt-6">
                <a href="#kontakt" className="btn-primary-solid w-full text-center text-xs py-3 block">
                  Meld interesse / bestill time
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY STRIP */}
      <section className="grid grid-cols-1 sm:grid-cols-3 bg-neutral-100 border-y border-neutral-200">
        <div className="h-64 sm:h-80 overflow-hidden relative group">
          <img
            src="/images/two-assorted-color-padded-chairs-near-side-table-1350789.jpg"
            alt="Rolig og fortrolig samtalerom for individuelle konsultasjoner og parterapi"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xs font-light">Fortrolig samtalerom</span>
          </div>
        </div>
        <div className="h-64 sm:h-80 overflow-hidden relative group">
          <img
            src="/images/living-room-area-2988860.jpg"
            alt="Harmoniske og trygge omgivelser for somatisk arbeid og avspenning"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xs font-light">Rom for ro og nærvær</span>
          </div>
        </div>
        <div className="h-64 sm:h-80 overflow-hidden relative group">
          <img
            src="/images/photo-of-woman-looking-at-the-mirror-774866.jpg"
            alt="Rom for refleksjon, selvinnsikt og kontakt med egen kropp"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xs font-light">Selvinnsikt og refleksjon</span>
          </div>
        </div>
      </section>

      {/* ABOUT DANIELA MINI BIO */}
      <section className="py-20 px-4 sm:px-6 bg-[#fdf8f9]">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-12 text-left">
          <img
            src="/images/daniela-torp.png"
            alt="Daniela Torp"
            className="w-44 h-44 rounded-full object-cover shadow-md border-3 border-white ring-1 ring-neutral-200 shrink-0"
          />
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">
              Din veileder
            </span>
            <h3 className="text-2xl font-light text-neutral-900">
              Daniela Torp
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Kroppsterapeut og somatisk veileder innen intimitet og parrelasjoner. Grunnlegger av Den tsjekkiske foreningen for Sexological Bodywork, med utdanning fra California. Daniela tilbyr et trygt, konfidensielt og empatisk rom der du kan arbeide med kropp, følelser og relasjoner.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING FORM */}
      <ContactSection
        title="Bestill time eller still et spørsmål"
        subtitle="Ta kontakt via skjemaet nedenfor for å avtale en uforpliktende samtale eller bestille tid."
        defaultSubject="Forespørsel om privat konsultasjon"
        formType="consultation_booking"
        workshopId="konsultasjon"
        workshopTitle="Privat konsultasjon"
        onOpenPrivacyModal={onOpenPrivacyModal}
      />
    </div>
  );
};
