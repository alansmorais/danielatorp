import React from 'react';
import { Calendar } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { getAssetUrl } from '../services/assets';

interface BlogPageProps {
  onOpenArticleModal: (title: string, content: string) => void;
  onOpenPrivacyModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onOpenArticleModal,
  onOpenPrivacyModal,
}) => {
  const storyText = `Dette er historien om min reise gjennom livets oppturer og nedturer, og hvordan jeg fant veien tilbake til meg selv og til kunsten å leve i ekte intimitet med verden rundt meg.

Gjennom egne erfaringer med relasjoner, kropp og sårbarhet har jeg lært at det første og viktigste skrittet alltid starter på innsiden. Før vi kan elske en annen uten forbehold, må vi slutte fred med vårt eget hjerte og vår egen kropp.

I mange år søkte jeg bekreftelse utenfor meg selv, før jeg oppdaget kraften i somatisk tilstedeværelse og ærlig kommunikasjon. I dag brenner jeg for å dele denne visdommen videre med kvinner, menn og par som ønsker å leve dypere, tryggere og mer sanselig.`;

  return (
    <div>
      {/* PAGE HERO */}
      <section className="hero-gradient relative py-20 px-4 sm:px-6 text-center border-b border-black/5">
        <div className="hero-radial-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-[700px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] mb-2 block">
            Artikler & refleksjoner
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            Blogg
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light mt-2">
            Artikler og personlige tanker om intimitet, parforhold, somatisk helse og personlig utvikling.
          </p>
        </div>
      </section>

      {/* BLOG MAIN CONTAINER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Posts Column */}
          <div className="lg:col-span-8 space-y-8">
            <article className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="h-56 sm:h-full min-h-[220px] bg-neutral-100 overflow-hidden">
                <img
                  src={getAssetUrl('/images/40_50_198-1024x575.jpg')}
                  alt="Min historie – Daniela Torp"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to /images/40_50_198.jpg if 1024x575 is missing
                    (e.target as HTMLImageElement).src = getAssetUrl('/images/40_50_198.jpg');
                  }}
                />
              </div>

              <div className="p-6 sm:py-6 sm:pr-6 sm:pl-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>27. april 2022</span>
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 mb-2 hover:text-[#ee5a7a] transition-colors">
                    <button
                      type="button"
                      onClick={() => onOpenArticleModal('Min historie', storyText)}
                      className="text-left cursor-pointer"
                    >
                      Min historie
                    </button>
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                    En personlig historie om å finne ditt indre kompass, omfavne sårbarhet og gjenoppdage ekte vitalitet.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onOpenArticleModal('Min historie', storyText)}
                    className="btn-primary-outline text-xs py-1.5 px-4 cursor-pointer"
                  >
                    Les hele innlegget
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 bg-[#fdf8f9] border border-[#f4e8ec] p-6 rounded-xl space-y-6">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 border-b-2 border-[#ee5a7a] pb-2 mb-3 inline-block">
                Kategorier
              </h5>
              <ul className="text-xs space-y-2 text-neutral-600">
                <li className="flex items-center justify-between hover:text-[#ee5a7a] cursor-pointer">
                  <span>Daniela i magasiner</span>
                  <span className="text-neutral-400">(1)</span>
                </li>
                <li className="flex items-center justify-between hover:text-[#ee5a7a] cursor-pointer">
                  <span>Somatisk veiledning & intimitet</span>
                  <span className="text-neutral-400">(2)</span>
                </li>
                <li className="flex items-center justify-between hover:text-[#ee5a7a] cursor-pointer">
                  <span>Parforhold & kjærlighet</span>
                  <span className="text-neutral-400">(1)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg border border-neutral-100 text-xs text-neutral-600 leading-relaxed">
              <strong className="block text-neutral-800 mb-1">Ønsker du å skrive om Daniela?</strong>
              Intervjuer, artikler og podkastbidrag er tilgjengelige på forespørsel. Ta kontakt via skjemaet nedenfor.
            </div>
          </aside>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection
        title="Skriv til meg"
        subtitle="Har du spørsmål eller tilbakemeldinger på artiklene? Jeg hører gjerne fra deg."
        defaultSubject="Henvendelse fra bloggen"
        formType="blog_contact"
        workshopId="blog"
        workshopTitle="Blogg – Henvendelse"
        onOpenPrivacyModal={onOpenPrivacyModal}
      />
    </div>
  );
};
