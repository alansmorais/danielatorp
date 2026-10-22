import React from 'react';
import { Link } from 'react-router-dom';
import { DynamicDatesBanner } from '../components/DynamicDatesBanner';
import { ContactSection } from '../components/ContactSection';
import { WORKSHOPS_DATA } from '../data/workshopsData';
import { getAssetUrl } from '../services/assets';

interface WorkshopsPageProps {
  onOpenDateModal: (dateText: string) => void;
  onOpenPrivacyModal: () => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({
  onOpenDateModal,
  onOpenPrivacyModal,
}) => {
  return (
    <div>
      {/* PAGE HERO */}
      <section
        className="relative py-24 sm:py-32 px-4 sm:px-6 text-center border-b border-black/5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 250, 251, 0.90), rgba(255, 245, 247, 0.94)), url('${getAssetUrl('/images/web-1920-–-workshop.jpg')}')`,
        }}
      >
        <div className="hero-radial-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-[720px] mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ee5a7a] mb-2 block">
            Katalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            Våre workshops
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            Vi opplever alle perioder i livet der vi kjenner oss usikre på veien videre. På mine workshops finner du svar på spørsmålene dine i et trygt, fortrolig og støttende rom.
          </p>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1140px] mx-auto">
          {/* Dynamic Dates Banner */}
          <DynamicDatesBanner onSelectDate={onOpenDateModal} variant="banner" />

          {/* Cards Grid with all 9 Workshops */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {WORKSHOPS_DATA.map((w) => (
              <article
                key={w.id}
                className="bg-[#fafafa] rounded-lg border border-neutral-200/70 overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  <Link to={`/workshops/${w.slug}`} className="block relative h-52 overflow-hidden bg-neutral-100">
                    <img
                      src={w.cardImage}
                      alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-medium uppercase px-2.5 py-1 rounded text-[#ee5a7a]">
                      {w.tag}
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-lg font-light text-neutral-900 mb-2 group-hover:text-[#ee5a7a] transition-colors leading-snug">
                      <Link to={`/workshops/${w.slug}`}>{w.title}</Link>
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                      {w.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-100">
                  <div className="text-xs text-neutral-700 font-medium">
                    {w.priceNOK ? w.priceNOK.split('|')[0].trim() : w.priceCZK}
                  </div>
                  <Link
                    to={`/workshops/${w.slug}`}
                    className="btn-primary-outline text-xs py-1.5 px-4"
                  >
                    Workshopdetaljer
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection
        title="Har du spørsmål om våre workshops?"
        subtitle="Skriv til meg for informasjon om kommende kurs, påmelding eller tilpassede opplegg."
        defaultSubject="Forespørsel om workshops"
        formType="workshops_catalog_inquiry"
        workshopId="workshops_catalog"
        workshopTitle="Workshop-katalog – Forespørsel"
        onOpenPrivacyModal={onOpenPrivacyModal}
      />
    </div>
  );
};
