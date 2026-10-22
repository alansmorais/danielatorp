import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCancellationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCancellationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPillarsOpen(false);
    setWorkshopsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all duration-200">
      <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 h-[90px] sm:h-[100px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="inline-flex items-center h-full mr-auto py-2">
          <img
            src="/images/logo_perem_bez_pozadí.png"
            alt="Daniela Torp"
            className="h-[55px] sm:h-[70px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-normal text-neutral-800">
          <Link
            to="/"
            className={`py-2 transition-colors hover:text-[#ee5a7a] ${
              isActive('/') ? 'text-[#ee5a7a] font-medium' : ''
            }`}
          >
            Hjem
          </Link>

          {/* Pillars Dropdown */}
          <div className="relative group py-2">
            <Link
              to="/6-piliru-intimity"
              className={`inline-flex items-center gap-1.5 transition-colors group-hover:text-[#ee5a7a] ${
                isActive('/6-piliru-intimity') ? 'text-[#ee5a7a] font-medium' : ''
              }`}
            >
              Intimitetens 6 søyler
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg py-2 min-w-[280px] border border-neutral-100 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/6-piliru-intimity#pilar-1"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors border-b border-neutral-50"
              >
                1. Intimitet i parforhold og egen kropp
              </Link>
              <Link
                to="/6-piliru-intimity#pilar-2"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors border-b border-neutral-50"
              >
                2. Graviditet og fødsel
              </Link>
              <Link
                to="/6-piliru-intimity#pilar-3"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors border-b border-neutral-50"
              >
                3. Intimitet med baby og familie
              </Link>
              <Link
                to="/6-piliru-intimity#pilar-4"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors border-b border-neutral-50"
              >
                4. Intimitet hos barn og ungdom
              </Link>
              <Link
                to="/6-piliru-intimity#pilar-5"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors border-b border-neutral-50"
              >
                5. Intimitet i moden alder
              </Link>
              <Link
                to="/6-piliru-intimity#pilar-6"
                className="px-4 py-2.5 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                6. Intimitet ved livets slutt
              </Link>
            </div>
          </div>

          <a
            href="/#om-daniela"
            className="py-2 transition-colors hover:text-[#ee5a7a]"
          >
            Hvem er Daniela
          </a>

          {/* Workshops Dropdown */}
          <div className="relative group py-2">
            <Link
              to="/workshops"
              className={`inline-flex items-center gap-1.5 transition-colors group-hover:text-[#ee5a7a] ${
                isActive('/workshops') || location.pathname.startsWith('/workshops/')
                  ? 'text-[#ee5a7a] font-medium'
                  : ''
              }`}
            >
              Workshops
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg py-2 min-w-[290px] border border-neutral-100 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/workshops/umeni-potesit-zenu"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Kunsten å tilfredsstille en kvinne
              </Link>
              <Link
                to="/workshops/umeni-potesit-muze"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Kunsten å tilfredsstille en mann
              </Link>
              <Link
                to="/workshops/jen-pro-pary"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Kunsten å tilfredsstille – for par
              </Link>
              <Link
                to="/workshops/tajemstvi-panevniho-dna"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Bekkenbunnens hemmeligheter
              </Link>
              <Link
                to="/workshops/byla-jsem-tehotna-ale"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Jeg var gravid, men …
              </Link>
              <Link
                to="/workshops/porod-jako-jistota"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Fødsel med trygghet
              </Link>
              <Link
                to="/workshops/matka-a-dcera"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Mor og datter
              </Link>
              <Link
                to="/workshops/Hraj-si-se-mnou"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Lek med meg
              </Link>
              <Link
                to="/workshops/zenska-esence-no"
                className="px-4 py-2 text-xs text-neutral-700 hover:bg-[#fff5f7] hover:text-[#ee5a7a] transition-colors"
              >
                Kvinneessens og livskraft
              </Link>
              <div className="pt-1 mt-1 border-t border-neutral-100">
                <Link
                  to="/workshops"
                  className="px-4 py-2 text-xs font-medium text-[#ee5a7a] hover:bg-[#fff5f7] transition-colors flex items-center justify-between"
                >
                  <span>Se alle 9 workshops</span>
                  <span>➜</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/konsultasjon"
            className={`py-2 transition-colors hover:text-[#ee5a7a] ${
              isActive('/konsultasjon') ? 'text-[#ee5a7a] font-medium' : ''
            }`}
          >
            Privat konsultasjon
          </Link>

          <Link
            to="/blog"
            className={`py-2 transition-colors hover:text-[#ee5a7a] ${
              isActive('/blog') ? 'text-[#ee5a7a] font-medium' : ''
            }`}
          >
            Blogg
          </Link>

          <a
            href="/#kontakt"
            className="py-2 transition-colors hover:text-[#ee5a7a]"
          >
            Kontakt
          </a>

          <button
            type="button"
            onClick={onOpenCancellationModal}
            className="py-2 text-neutral-500 hover:text-neutral-800 transition-colors text-xs"
          >
            Avbestillingsvilkår
          </button>

          {/* Multilingual flags */}
          <div className="flex items-center gap-2 pl-3 ml-2 border-l border-neutral-200">
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#ee5a7a] cursor-default"
              title="Norsk (Aktiv nettside)"
            >
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16" aria-hidden="true">
                <rect width="22" height="16" fill="#ba0c2f" />
                <rect x="6" width="4" height="16" fill="#fff" />
                <rect y="6" width="22" height="4" fill="#fff" />
                <rect x="7" width="2" height="16" fill="#00205b" />
                <rect y="7" width="22" height="2" fill="#00205b" />
              </svg>
              <span>NO</span>
            </span>

            <a
              href="https://www.danielatorp.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              title="Česky (danielatorp.cz)"
            >
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16" aria-hidden="true">
                <path d="M0 0h22v8H0z" fill="#fff" />
                <path d="M0 8h22v8H0z" fill="#d7141a" />
                <path d="M0 0v16l11-8z" fill="#11457e" />
              </svg>
              <span>CZ</span>
            </a>

            <a
              href="https://danielatorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              title="English (danielatorp.com)"
            >
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16" aria-hidden="true">
                <rect width="22" height="16" fill="#012169" />
                <path d="M0 0L22 16M22 0L0 16" stroke="#fff" strokeWidth="3" />
                <path d="M0 0L22 16M22 0L0 16" stroke="#c8102e" strokeWidth="1.5" />
                <path d="M11 0V16M0 8H22" stroke="#fff" strokeWidth="5" />
                <path d="M11 0V16M0 8H22" stroke="#c8102e" strokeWidth="3" />
              </svg>
              <span>EN</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-800 hover:text-[#ee5a7a] transition-colors"
          aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-5 max-h-[calc(100vh-100px)] overflow-y-auto space-y-3 animate-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            className="block py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
          >
            Hjem
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setPillarsOpen(!pillarsOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
            >
              <span>Intimitetens 6 søyler</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  pillarsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {pillarsOpen && (
              <div className="pl-4 py-2 space-y-2 bg-neutral-50 rounded-md my-2 border-l-2 border-[#ee5a7a]">
                <Link to="/6-piliru-intimity#pilar-1" className="block text-sm py-1 text-neutral-600">
                  1. Intimitet i parforhold og egen kropp
                </Link>
                <Link to="/6-piliru-intimity#pilar-2" className="block text-sm py-1 text-neutral-600">
                  2. Graviditet og fødsel
                </Link>
                <Link to="/6-piliru-intimity#pilar-3" className="block text-sm py-1 text-neutral-600">
                  3. Intimitet med baby og familie
                </Link>
                <Link to="/6-piliru-intimity#pilar-4" className="block text-sm py-1 text-neutral-600">
                  4. Intimitet hos barn og ungdom
                </Link>
                <Link to="/6-piliru-intimity#pilar-5" className="block text-sm py-1 text-neutral-600">
                  5. Intimitet i moden alder
                </Link>
                <Link to="/6-piliru-intimity#pilar-6" className="block text-sm py-1 text-neutral-600">
                  6. Intimitet ved livets slutt
                </Link>
              </div>
            )}
          </div>

          <a
            href="/#om-daniela"
            className="block py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
          >
            Hvem er Daniela
          </a>

          <div>
            <button
              type="button"
              onClick={() => setWorkshopsOpen(!workshopsOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
            >
              <span>Workshops</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  workshopsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {workshopsOpen && (
              <div className="pl-4 py-2 space-y-2 bg-neutral-50 rounded-md my-2 border-l-2 border-[#ee5a7a]">
                <Link to="/workshops/umeni-potesit-zenu" className="block text-sm py-1 text-neutral-600">
                  Kunsten å tilfredsstille en kvinne
                </Link>
                <Link to="/workshops/umeni-potesit-muze" className="block text-sm py-1 text-neutral-600">
                  Kunsten å tilfredsstille en mann
                </Link>
                <Link to="/workshops/jen-pro-pary" className="block text-sm py-1 text-neutral-600">
                  Kunsten å tilfredsstille – for par
                </Link>
                <Link to="/workshops/tajemstvi-panevniho-dna" className="block text-sm py-1 text-neutral-600">
                  Bekkenbunnens hemmeligheter
                </Link>
                <Link to="/workshops/byla-jsem-tehotna-ale" className="block text-sm py-1 text-neutral-600">
                  Jeg var gravid, men …
                </Link>
                <Link to="/workshops/porod-jako-jistota" className="block text-sm py-1 text-neutral-600">
                  Fødsel med trygghet
                </Link>
                <Link to="/workshops/matka-a-dcera" className="block text-sm py-1 text-neutral-600">
                  Mor og datter
                </Link>
                <Link to="/workshops/Hraj-si-se-mnou" className="block text-sm py-1 text-neutral-600">
                  Lek med meg
                </Link>
                <Link to="/workshops/zenska-esence-no" className="block text-sm py-1 text-neutral-600">
                  Kvinneessens og livskraft
                </Link>
                <Link to="/workshops" className="block text-sm py-1 font-medium text-[#ee5a7a]">
                  Se alle 9 workshops ➜
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/konsultasjon"
            className="block py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
          >
            Privat konsultasjon
          </Link>

          <Link
            to="/blog"
            className="block py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
          >
            Blogg
          </Link>

          <a
            href="/#kontakt"
            className="block py-2 text-base font-normal text-neutral-800 border-b border-neutral-100"
          >
            Kontakt
          </a>

          <button
            type="button"
            onClick={onOpenCancellationModal}
            className="block w-full text-left py-2 text-sm text-neutral-600"
          >
            Avbestillingsvilkår
          </button>

          {/* Mobile Language Switcher */}
          <div className="pt-3 border-t border-neutral-200 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#ee5a7a]">
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16">
                <rect width="22" height="16" fill="#ba0c2f" />
                <rect x="6" width="4" height="16" fill="#fff" />
                <rect y="6" width="22" height="4" fill="#fff" />
                <rect x="7" width="2" height="16" fill="#00205b" />
                <rect y="7" width="22" height="2" fill="#00205b" />
              </svg>
              NO
            </span>
            <a
              href="https://www.danielatorp.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900"
            >
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16">
                <path d="M0 0h22v8H0z" fill="#fff" />
                <path d="M0 8h22v8H0z" fill="#d7141a" />
                <path d="M0 0v16l11-8z" fill="#11457e" />
              </svg>
              CZ
            </a>
            <a
              href="https://danielatorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900"
            >
              <svg className="w-5 h-3.5 rounded-xs shadow-xs" viewBox="0 0 22 16">
                <rect width="22" height="16" fill="#012169" />
                <path d="M0 0L22 16M22 0L0 16" stroke="#fff" strokeWidth="3" />
                <path d="M0 0L22 16M22 0L0 16" stroke="#c8102e" strokeWidth="1.5" />
                <path d="M11 0V16M0 8H22" stroke="#fff" strokeWidth="5" />
                <path d="M11 0V16M0 8H22" stroke="#c8102e" strokeWidth="3" />
              </svg>
              EN
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
