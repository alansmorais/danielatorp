import React from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA } from '../data/pillarsData';
import { ContactSection } from '../components/ContactSection';

interface PillarsPageProps {
  onOpenPrivacyModal: () => void;
}

export const PillarsPage: React.FC<PillarsPageProps> = ({ onOpenPrivacyModal }) => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 text-center border-b border-black/5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 250, 251, 0.90), rgba(255, 245, 247, 0.94)), url('/images/web-1920-–-pilire.jpg')`,
        }}
      >
        <div className="hero-radial-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-[820px] mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] block">
            Livets faser
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            Intimitetens 6 søyler
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
            Intimitet er den trygge og gode følelsen av tillit og nærhet mellom mennesker. Ekte intimitet oppstår sjelden av seg selv; den må næres, utforskes og pleies. Den følger oss gjennom alle livets faser.
          </p>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
            Slik jeg ser det, hviler intimitet på 6 grunnleggende søyler. I mine konsultasjoner fokuserer vi først og fremst på forholdet til egen kropp. Alt begynner og slutter med kjærlighet og respekt for seg selv. Først når jeg aksepterer og verdsetter meg selv, kan jeg åpne meg i ekte kjærlighet til andre. Når jeg møter meg selv med omsorg og medfølelse, kan jeg også møte partneren og menneskene rundt meg med den samme varmen gjennom alle livets faser.
          </p>
          <p className="text-base font-medium text-neutral-900 pt-2">
            Respekt, kjærlighet og medfølelse.
          </p>
        </div>
      </section>

      {/* PILLARS SECTIONS */}
      <main id="pilarer">
        {PILLARS_DATA.map((pillar, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/40 bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: pillar.bannerImage
                  ? `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), url('${pillar.bannerImage}')`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Foreground Pillar Illustration */}
                <div
                  className={`flex items-center justify-center ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center p-3">
                    <img
                      src={pillar.image}
                      alt={`Symbol for ${pillar.title}`}
                      className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Pillar Content: Number, Title, Description, and CTA Button */}
                <div
                  className={`text-left space-y-4 ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className="svg-divider-pattern" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] block">
                    Søyle {pillar.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 leading-snug">
                    {pillar.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/konsultasjon"
                      className="btn-primary-outline text-xs bg-white/80 hover:bg-[#ee5a7a] hover:text-white transition-all shadow-2xs"
                    >
                      Bestill time / meld interesse
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* CONTACT SECTION */}
      <ContactSection
        title="Ønsker du veiledning innen en av søylene?"
        subtitle="Ta kontakt for en uforpliktende samtale om hvordan vi kan arbeide sammen."
        defaultSubject="Henvendelse om Intimitetens 6 søyler"
        formType="pillars_inquiry"
        workshopId="6_pillars"
        workshopTitle="Intimitetens 6 søyler – Henvendelse"
        onOpenPrivacyModal={onOpenPrivacyModal}
      />
    </div>
  );
};
