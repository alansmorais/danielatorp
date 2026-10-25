import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DynamicDatesBanner } from '../components/DynamicDatesBanner';
import { ContactSection } from '../components/ContactSection';
import { PILLARS_DATA } from '../data/pillarsData';
import { WORKSHOPS_DATA } from '../data/workshopsData';
import { DEFAULT_HOMEPAGE_CONTENT, loadHomepageContent } from '../services/content';
import { getAssetUrl } from '../services/assets';

interface HomePageProps {
  onOpenDateModal: (dateText: string) => void;
  onOpenPrivacyModal: () => void;
  onPrefillContact: (subject: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenDateModal,
  onOpenPrivacyModal,
}) => {
  const navigate = useNavigate();
  const [content, setContent] = useState(DEFAULT_HOMEPAGE_CONTENT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadHomepageContent()
      .then((data) => {
        if (!cancelled) {
          setContent(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown content error');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const featuredWorkshops = WORKSHOPS_DATA.slice(0, 3);
  const openUpcomingWorkshop = (dateText: string, url?: string) => {
    // Keep links on the Norwegian site, including legacy Czech workshop slugs.
    if (url) {
      const candidate = url.trim();
      try {
        const parsed = new URL(candidate, window.location.origin);
        // The Norwegian homepage intentionally uses Czech legacy slugs.
        // Apps Script may provide a danielatorp.cz URL; preserve its workshop
        // path while navigating on the current Norwegian domain.
        const match = parsed.pathname.match(/\/workshops\/([^/]+?)(?:\.html)?\/?$/i);
        if (match?.[1]) {
          navigate(`/workshops/${decodeURIComponent(match[1])}`);
          return;
        }
      } catch {
        // Fall through to relative URL handling.
      }
      const relativeMatch = candidate.replace(/^\.\//, '').replace(/^\//, '').match(/^workshops\/([^/]+?)(?:\.html)?\/?$/i);
      if (relativeMatch?.[1]) {
        navigate(`/workshops/${decodeURIComponent(relativeMatch[1])}`);
        return;
      }
    }

    const normalized = dateText
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    // Upcoming-date labels may use short event names rather than full workshop titles.
    // Route known events to the matching Norwegian detail page, retaining the Czech slug.
    const aliases: Array<{ matches: string[]; slug: string }> = [
      { matches: ['lek med meg', 'hraj si se mnou'], slug: 'Hraj-si-se-mnou' },
      { matches: ['kvinneessens', 'kvinnelig essens', 'vital essens', 'samhain', 'imbolc', 'beltane', 'woman vital essence'], slug: 'zenska-esence-no' },
      { matches: ['kunsten a tilfredsstille en kvinne', 'kunsten å tilfredsstille en kvinne', 'tilfredsstille en kvinne', 'umeni potesit zenu'], slug: 'umeni-potesit-zenu' },
      { matches: ['kunsten a tilfredsstille en mann', 'kunsten å tilfredsstille en mann', 'tilfredsstille en mann', 'umeni potesit muze'], slug: 'umeni-potesit-muze' },
      { matches: ['kunsten a tilfredsstille', 'kunsten å tilfredsstille', 'for par', 'jen pro pary'], slug: 'jen-pro-pary' },
      { matches: ['bekkenbunn', 'tajemstvi panevniho dna'], slug: 'tajemstvi-panevniho-dna' },
      { matches: ['jeg var gravid', 'byla jsem tehotna'], slug: 'byla-jsem-tehotna-ale' },
      { matches: ['fødsel med trygghet', 'fodsel med trygghet', 'porod jako jistota'], slug: 'porod-jako-jistota' },
      { matches: ['mor og datter', 'matka a dcera'], slug: 'matka-a-dcera' },
    ];

    const aliasMatch = aliases.find((alias) =>
      alias.matches.some((phrase) => normalized.includes(
        phrase.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      ))
    );
    if (aliasMatch) {
      navigate(`/workshops/${aliasMatch.slug}`);
      return;
    }

    const workshop = WORKSHOPS_DATA.find((item) => {
      const title = item.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return normalized.includes(title) || title.includes(normalized);
    });
    if (workshop) {
      navigate(`/workshops/${workshop.slug}`);
      return;
    }

    // Events without a matching detail page remain accessible through the catalogue.
    navigate('/workshops');
  };

  if (loading) {
    return (
      <div className="py-20 px-6 text-center text-sm text-neutral-500">
        Laster inn innhold...
      </div>
    );
  }

  return (
    <div>
      <section className="hero-gradient relative pt-12 pb-20 px-4 sm:px-6 text-center overflow-hidden border-b border-black/5">
        <div className="hero-radial-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-[620px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
            {content.hero_title}
          </h1>

          <p className="text-[13px] sm:text-sm text-neutral-700 leading-relaxed mb-3">
            {content.hero_subtitle}
          </p>

          <p className="text-[13px] sm:text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
            {content.hero_subtitle_2}
          </p>

          {error ? (
            <div className="mb-4 rounded border border-amber-200 bg-amber-50 px-4 py-3 text-left text-xs text-amber-800">
              Kunne ikke laste publisert innhold. Viser siste tilgjengelige innhold.
            </div>
          ) : null}

          <DynamicDatesBanner onSelectDate={openUpcomingWorkshop} variant="box" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/workshops" className="btn-primary-outline text-xs">
              Utforsk workshops
            </Link>
            <Link to="/6-piliru-intimity" className="btn-primary-solid text-xs">
              Intimitetens 6 søyler
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50/60 border-b border-neutral-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-2">
            Intimitetens 6 søyler
          </h2>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto mb-12">
            Intimitet følger oss gjennom hele livet. Utforsk de 6 grunnleggende søylene:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {PILLARS_DATA.map((pillar) => (
              <Link
                key={pillar.id}
                to={`/6-piliru-intimity#${pillar.id}`}
                className="bg-white p-4 rounded-lg border border-neutral-100 shadow-xs hover:shadow-md hover:border-[#ee5a7a]/40 hover:-translate-y-1 transition-all flex flex-col items-center justify-between min-h-[210px]"
              >
                <div className="w-24 h-24 flex items-center justify-center p-2 mb-2">
                  <img
                    src={pillar.image}
                    alt={pillar.shortTitle}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xs font-medium text-neutral-800 group-hover:text-[#ee5a7a] transition-colors leading-tight line-clamp-3">
                  {pillar.shortTitle}
                </h3>
                <span className="text-[11px] text-[#ee5a7a] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Les mer ➜
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="om-daniela">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="md:col-span-5 text-center">
            <div className="relative inline-block">
              <img
                src={getAssetUrl('/images/daniela-torp.png')}
                alt="Daniela Torp"
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover shadow-lg mx-auto border-4 border-white ring-1 ring-neutral-200"
              />
              <div className="absolute -bottom-2 right-4 bg-white py-1 px-3.5 rounded-full shadow-md border border-neutral-100 text-[11px] font-medium text-[#ee5a7a]">
                Somatisk veileder
              </div>
            </div>
          </div>

          <div className="md:col-span-7 text-left space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">
              Møt veilederen
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
              {content.about_title}
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {content.about_p1}
            </p>

            <blockquote className="p-4 bg-[#fdf8f9] border-l-3 border-[#ee5a7a] rounded-r-md text-sm italic text-neutral-700 leading-relaxed my-3">
              «{content.about_p2}»
            </blockquote>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {content.about_p3}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link to="/konsultasjon" className="btn-primary-solid text-xs">
                Bestill privat time
              </Link>
              <a href="#kontakt" className="btn-primary-outline text-xs">
                Send en melding
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 border-t border-neutral-100">
        <div className="max-w-[1140px] mx-auto text-center">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">
                Fellesskap & vekst
              </span>
              <h2 className="text-3xl font-light text-neutral-900 mt-1">
                Utvalgte workshops
              </h2>
            </div>
            <Link
              to="/workshops"
              className="text-xs font-medium text-[#ee5a7a] hover:underline mt-2 sm:mt-0"
            >
              Se alle 9 workshops ➜
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorkshops.map((w) => (
              <article
                key={w.id}
                className="bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <img
                      src={w.cardImage}
                      alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-medium uppercase px-2.5 py-1 rounded text-[#ee5a7a] tracking-wider">
                      {w.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-medium text-neutral-900 mb-2 group-hover:text-[#ee5a7a] transition-colors">
                      <Link to={`/workshops/${w.slug}`}>{w.title}</Link>
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3 mb-4">
                      {w.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-neutral-50 flex items-center justify-between">
                  <span className="text-xs text-neutral-700 font-medium">
                    {w.priceNOK ? w.priceNOK.split('|')[0].trim() : w.priceCZK}
                  </span>
                  <Link
                    to={`/workshops/${w.slug}`}
                    className="btn-primary-outline text-[11px] py-1.5 px-3.5"
                  >
                    Detaljer
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-100">
        <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-[#fff5f7] to-[#f0f9fa] rounded-2xl p-8 sm:p-12 border border-neutral-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a]">
              Én til én & parterapi
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mt-1 mb-3">
              Personlige konsultasjoner
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Når du foretrekker et privat møte – én til én eller som par. Når du føler at noen ting bare kan sies ansikt til ansikt. Tilbys i Oslo, Tsjekkia eller digitalt over video.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
              <span className="bg-white/80 px-2.5 py-1 rounded-full border border-neutral-200">
                Somatisk veiledning
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-full border border-neutral-200">
                Parterapi & nærhet
              </span>
              <span className="bg-white/80 px-2.5 py-1 rounded-full border border-neutral-200">
                Online eller Oslo
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <Link to="/konsultasjon" className="btn-primary-solid text-xs py-3 px-8">
              Les om konsultasjoner
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        title={content.workshop_1_title || 'Skriv til meg'}
        subtitle={content.workshop_1_desc || 'Har du spørsmål eller ønsker å melde deg på et arrangement? Jeg er her for deg.'}
        formType="homepage_contact"
        workshopId="general_contact"
        workshopTitle={content.workshop_3_title || 'Forside – Generell henvendelse'}
        onOpenPrivacyModal={onOpenPrivacyModal}
      />
    </div>
  );
};
