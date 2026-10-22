import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenCancellationModal: () => void;
  onOpenMediaModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCancellationModal,
  onOpenMediaModal,
}) => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-16 text-left">
          {/* Col 1: Kontakt */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Kontakt
            </h4>
            <div className="flex flex-col space-y-2.5 text-[13.5px] text-neutral-500">
              <Link to="/" className="hover:text-[#ee5a7a] transition-colors">
                Hjem
              </Link>
              <a href="/#om-daniela" className="hover:text-[#ee5a7a] transition-colors">
                Hvem er Daniela
              </a>
              <button
                type="button"
                onClick={onOpenMediaModal}
                className="text-left hover:text-[#ee5a7a] transition-colors"
              >
                Daniela i media
              </button>
              <Link to="/blog" className="hover:text-[#ee5a7a] transition-colors">
                Blogg
              </Link>
              <a href="/#kontakt" className="hover:text-[#ee5a7a] transition-colors">
                Kontakt
              </a>
              <button
                type="button"
                onClick={onOpenCancellationModal}
                className="text-left hover:text-[#ee5a7a] transition-colors"
              >
                Avbestillingsvilkår
              </button>
            </div>
          </div>

          {/* Col 2: Workshops */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Workshops
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-neutral-500">
              <Link to="/workshops/umeni-potesit-zenu" className="hover:text-[#ee5a7a] transition-colors">
                Kunsten å tilfredsstille en kvinne
              </Link>
              <Link to="/workshops/umeni-potesit-muze" className="hover:text-[#ee5a7a] transition-colors">
                Kunsten å tilfredsstille en mann
              </Link>
              <Link to="/workshops/jen-pro-pary" className="hover:text-[#ee5a7a] transition-colors">
                Kunsten å tilfredsstille – for par
              </Link>
              <Link to="/workshops/tajemstvi-panevniho-dna" className="hover:text-[#ee5a7a] transition-colors">
                Bekkenbunnens hemmeligheter
              </Link>
              <Link to="/workshops/byla-jsem-tehotna-ale" className="hover:text-[#ee5a7a] transition-colors">
                Jeg var gravid, men …
              </Link>
              <Link to="/workshops/porod-jako-jistota" className="hover:text-[#ee5a7a] transition-colors">
                Fødsel med trygghet
              </Link>
              <Link to="/workshops/matka-a-dcera" className="hover:text-[#ee5a7a] transition-colors">
                Mor og datter
              </Link>
              <Link to="/workshops/Hraj-si-se-mnou" className="hover:text-[#ee5a7a] transition-colors">
                Lek med meg
              </Link>
              <Link to="/workshops/zenska-esence-no" className="hover:text-[#ee5a7a] transition-colors">
                Kvinneessens og livskraft
              </Link>
              <Link
                to="/workshops"
                className="text-[#ee5a7a] font-medium pt-1 hover:underline"
              >
                Se alle 9 workshops ➜
              </Link>
            </div>
          </div>

          {/* Col 3: Konsultasjoner & Søyler */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-5">
              Konsultasjoner / Intimitetens 6 søyler
            </h4>
            <div className="flex flex-col space-y-2.5 text-[13px] text-neutral-500">
              <Link
                to="/konsultasjon"
                className="font-medium text-neutral-800 hover:text-[#ee5a7a] transition-colors"
              >
                Privat konsultasjon
              </Link>
              <Link to="/6-piliru-intimity#pilar-1" className="hover:text-[#ee5a7a] transition-colors">
                1. Intimitet i parforhold og egen kropp
              </Link>
              <Link to="/6-piliru-intimity#pilar-2" className="hover:text-[#ee5a7a] transition-colors">
                2. Graviditet og fødsel
              </Link>
              <Link to="/6-piliru-intimity#pilar-3" className="hover:text-[#ee5a7a] transition-colors">
                3. Intimitet med baby og familie
              </Link>
              <Link to="/6-piliru-intimity#pilar-4" className="hover:text-[#ee5a7a] transition-colors">
                4. Intimitet hos barn og ungdom
              </Link>
              <Link to="/6-piliru-intimity#pilar-5" className="hover:text-[#ee5a7a] transition-colors">
                5. Intimitet i moden alder
              </Link>
              <Link to="/6-piliru-intimity#pilar-6" className="hover:text-[#ee5a7a] transition-colors">
                6. Intimitet ved livets slutt
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4 text-neutral-500">
            <a
              href="https://facebook.com/danielatorp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#fff5f7] hover:text-[#ee5a7a] flex items-center justify-center transition-all"
            >
              <span className="font-bold text-sm">f</span>
            </a>
            <a
              href="https://instagram.com/intimitycoachdanielatorp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#fff5f7] hover:text-[#ee5a7a] flex items-center justify-center transition-all"
            >
              <span className="font-bold text-sm">◎</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#fff5f7] hover:text-[#ee5a7a] flex items-center justify-center transition-all"
            >
              <span className="font-bold text-sm">▶</span>
            </a>
          </div>

          <p className="text-xs text-neutral-400">
            © 2026 Alle rettigheter forbeholdt | Daniela Torp
          </p>
        </div>
      </div>
    </footer>
  );
};
