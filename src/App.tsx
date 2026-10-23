import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { HomePage } from './pages/HomePage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage';
import { PillarsPage } from './pages/PillarsPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { BlogPage } from './pages/BlogPage';
import { ModalContent } from './types';
import { getAssetUrl } from './services/assets';

// Scroll to top helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<ModalContent>({
    isOpen: false,
    tag: '',
    title: '',
    body: '',
  });

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToContactWithSubject = (subject: string) => {
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      const subInput = document.getElementById('formEmne') as HTMLInputElement | null;
      if (subInput) {
        subInput.value = subject;
        subInput.focus();
      }
    } else {
      navigate('/#kontakt');
      setTimeout(() => {
        const subInput = document.getElementById('formEmne') as HTMLInputElement | null;
        if (subInput) {
          subInput.value = subject;
          subInput.focus();
        }
      }, 300);
    }
  };

  const openCancellationModal = () => {
    setModal({
      isOpen: true,
      tag: 'Vilkår',
      title: 'Avbestillingsvilkår',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          <p>
            Jeg setter stor pris på tiden din og tilliten du viser meg ved å velge mine tjenester. Hver time og hvert arrangement krever tid, forberedelse og omtanke. For å skape en trygg og respektfull opplevelse for alle ber jeg deg om å gjøre deg kjent med følgende avbestillingsvilkår.
          </p>

          <h4 className="font-semibold text-neutral-900 text-sm mt-3">
            1. Seminarer og workshops
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>14 dager eller mer før arrangementet:</strong> Du får refundert 100 % av det innbetalte beløpet.
            </li>
            <li>
              <strong>7–13 dager før arrangementet:</strong> Du får refundert 50 % av det innbetalte beløpet.
            </li>
            <li>
              <strong>Mindre enn 7 dager før arrangementet:</strong> Det innbetalte beløpet refunderes ikke, med forbehold om eventuelle lovfestede forbrukerrettigheter.
            </li>
          </ul>
          <p>
            Dersom du ikke har mulighet til å delta, kan du be om å overføre plassen din til en annen person etter nærmere avtale.
          </p>
          <p>
            Dersom jeg avlyser et arrangement, vil du få tilbud om enten full refusjon eller å overføre betalingen til et annet arrangement.
          </p>

          <h4 className="font-semibold text-neutral-900 text-sm mt-3">
            2. Massasje og individuelle timer
          </h4>
          <p>
            For individuelle avtaler, inkludert massasje og konsultasjoner, gjelder følgende avbestillingsvilkår:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>48 timer eller mer før avtalen:</strong> Du kan avbestille eller endre tidspunktet uten kostnad.
            </li>
            <li>
              <strong>Mindre enn 48 timer før avtalen:</strong> Det påløper et avbestillingsgebyr på 50 % av prisen for den bestilte tjenesten.
            </li>
            <li>
              <strong>Mindre enn 24 timer før avtalen, eller dersom du ikke møter opp uten å gi beskjed:</strong> Det påløper et avbestillingsgebyr på 100 % av prisen for den bestilte tjenesten.
            </li>
          </ul>
          <p>
            Dersom uforutsette og alvorlige omstendigheter gjør at du ikke kan møte, ber jeg deg ta kontakt så snart som mulig. Jeg vil vurdere slike situasjoner individuelt og med forståelse.
          </p>

          <h4 className="font-semibold text-neutral-900 text-sm mt-3">
            3. Hvordan avbestille eller endre en avtale
          </h4>
          <p>
            Avbestilling eller forespørsel om endring av tidspunkt skal sendes skriftlig via e-post eller gjennom den kommunikasjonskanalen som ble brukt ved bestilling.
          </p>
          <p>
            Tidspunktet da den skriftlige avbestillingen mottas, avgjør hvilke avbestillingsvilkår som gjelder.
          </p>

          <h4 className="font-semibold text-neutral-900 text-sm mt-3">
            4. Forbrukerrettigheter
          </h4>
          <p>
            Disse avbestillingsvilkårene begrenser ikke eventuelle ufravikelige rettigheter du har etter norsk lovgivning eller relevant EØS-regelverk om forbrukervern, herunder eventuell lovfestet angrerett der denne gjelder.
          </p>

          <h4 className="font-semibold text-neutral-900 text-sm mt-3">
            5. Takk for forståelsen
          </h4>
          <p>
            Takk for at du respekterer tiden min, arbeidet mitt og rommet vi skaper sammen. Din forståelse hjelper meg med å tilby en gjennomtenkt, trygg og profesjonell opplevelse for hver enkelt klient.
          </p>
          <p className="pt-2">
            Varm hilsen,<br />
            <strong>Daniela Torp</strong><br />
            Grunnlegger av SHE Academy
          </p>
        </div>
      ),
    });
  };

  const openMediaModal = () => {
    setModal({
      isOpen: true,
      tag: 'Presse & Media',
      title: 'Daniela i media',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
          <p>
            Daniela Torp er en ettertraktet fagstemme innen somatisk helse, parrelasjoner og intimitet, og har stilt opp i ledende magasiner, podkaster og radioprogrammer:
          </p>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs group">
              <div className="h-40 overflow-hidden bg-neutral-100">
                <img
                  src={getAssetUrl('/images/page_1-2.jpg')}
                  alt="Moje Psychologie – Intervju med Daniela Torp: Dokonalá milenka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2.5">
                <strong className="block text-[11px] text-neutral-900 font-medium">Moje Psychologie</strong>
                <span className="text-[10px] text-neutral-500">Stort intervju: «Dokonalá milenka»</span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs group">
              <div className="h-40 overflow-hidden bg-neutral-100">
                <img
                  src={getAssetUrl('/images/untitled-design.jpg')}
                  alt="Magasinet Maminka – Temaartikkel om fødsel og intimitet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2.5">
                <strong className="block text-[11px] text-neutral-900 font-medium">Magasinet Maminka</strong>
                <span className="text-[10px] text-neutral-500">Fokus: Fødsel, kropp og intimitet</span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs group">
              <div className="h-40 overflow-hidden bg-neutral-100">
                <img
                  src={getAssetUrl('/images/untitled-design-7.jpg')}
                  alt="Maminka reportasje med Daniela Torp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2.5">
                <strong className="block text-[11px] text-neutral-900 font-medium">Maminka Reportasje</strong>
                <span className="text-[10px] text-neutral-500">Om foreldreskap og nærhet</span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs group">
              <div className="h-40 overflow-hidden bg-neutral-100">
                <img
                  src={getAssetUrl('/images/received_10207630749517902.jpeg')}
                  alt="Daniela Torp i radiostudio under direktesending"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2.5">
                <strong className="block text-[11px] text-neutral-900 font-medium">Radiosending & Podkast</strong>
                <span className="text-[10px] text-neutral-500">Daniela i studio om parrelasjoner</span>
              </div>
            </div>
          </div>

          <p className="pt-2 text-neutral-600 leading-relaxed">
            Ønsker du et ekspertintervju, faglig uttalelse eller en gjesteopptreden i din podkast eller publikasjon? Send en forespørsel via skjemaet nedenfor.
          </p>
        </div>
      ),
      actionButtonText: 'Kontakt for medieforespørsel',
      onAction: () => {
        scrollToContactWithSubject('Medieforespørsel – Daniela Torp');
      },
    });
  };

  const openPrivacyModal = () => {
    setModal({
      isOpen: true,
      tag: 'Personvern',
      title: 'Personvernerklæring',
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
          <p>
            Vi tar ditt personvern på største alvor. Når du fyller ut et kontaktskjema eller melder deg på en workshop hos Daniela Torp, behandles opplysningene dine i streng konfidensialitet i samsvar med gjeldende personvernlovgivning (GDPR).
          </p>
          <p>
            Informasjonen du oppgir (navn, e-postadresse og meldingstekst) benyttes utelukkende til å besvare din henvendelse, koordinere kursdeltakelse eller timebestilling.
          </p>
          <p>
            Opplysningene dine deles aldri med tredjeparter eller brukes til uønsket markedsføring. Du har til enhver tid rett til innsyn i, retting eller sletting av personopplysningene dine ved å sende en e-post til Daniela.
          </p>
        </div>
      ),
    });
  };

  const openDateModal = (dateText: string) => {
    setModal({
      isOpen: true,
      tag: 'Arrangementsdato',
      title: 'Forespørsel om arrangement',

      body: (
        <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
          <p className="font-semibold text-neutral-900 text-base">{dateText}</p>
          <p>
            Ønsker du mer informasjon om dette arrangementet, ledige plasser eller vil du reservere plassen din på forhånd?
          </p>
          <p>
            Register by SMS to 958 64 782.
          </p>
          <p>
            Your place is confirmed after payment of a 50% deposit Vipps #970088
          </p>
          <p>
            Daniela Torp
          </p>
          <p>
            Daniela Torp has spent more than 20 years guiding people through topics related to the body, intimacy, sexuality and relationships. She works with individuals and couples, combining coaching, body-based practices and trauma-informed approaches.
          </p>
          <p>
            She completed professional training in Sexological Bodywork in California and, in 2025, training in Compassionate Trauma Therapy. Her work offers a welcoming space to explore these personal topics without judgment or shame.
          </p>
          <p>
            Daniela will lead our pelvic floor workshop in Larvik on 7–8 November.
          </p>
          <p>
            Fyll ut henvendelsen nedenfor, så tar Daniela kontakt med deg med praktiske detaljer.
          </p>
        </div>
      ),

      actionButtonText: 'Meld interesse for denne datoen',
      onAction: () => {
        scrollToContactWithSubject(`Interesse for arrangement: ${dateText}`);
      },
    });
  };

  const openArticleModal = (title: string, content: string) => {
    setModal({
      isOpen: true,
      tag: 'Blogginnlegg',
      title: title,
      body: <div className="whitespace-pre-line text-sm text-neutral-700 leading-relaxed">{content}</div>,
      actionButtonText: 'Skriv til Daniela',
      onAction: () => {
        scrollToContactWithSubject(`Refleksjon om artikkel: ${title}`);
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />

      {/* Global Header */}
      <Header onOpenCancellationModal={openCancellationModal} />

      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenDateModal={openDateModal}
                onOpenPrivacyModal={openPrivacyModal}
                onPrefillContact={scrollToContactWithSubject}
              />
            }
          />
          <Route
            path="/index.html"
            element={
              <HomePage
                onOpenDateModal={openDateModal}
                onOpenPrivacyModal={openPrivacyModal}
                onPrefillContact={scrollToContactWithSubject}
              />
            }
          />
          <Route
            path="/workshops"
            element={
              <WorkshopsPage
                onOpenDateModal={openDateModal}
                onOpenPrivacyModal={openPrivacyModal}
              />
            }
          />
          <Route
            path="/workshops.html"
            element={
              <WorkshopsPage
                onOpenDateModal={openDateModal}
                onOpenPrivacyModal={openPrivacyModal}
              />
            }
          />
          <Route
            path="/workshops/:slug"
            element={<WorkshopDetailPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/workshops/:slug.html"
            element={<WorkshopDetailPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/6-piliru-intimity"
            element={<PillarsPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/6-piliru-intimity/index.html"
            element={<PillarsPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/konsultasjon"
            element={<ConsultationPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/konsultasjon.html"
            element={<ConsultationPage onOpenPrivacyModal={openPrivacyModal} />}
          />
          <Route
            path="/blog"
            element={
              <BlogPage
                onOpenArticleModal={openArticleModal}
                onOpenPrivacyModal={openPrivacyModal}
              />
            }
          />
          <Route
            path="/blog.html"
            element={
              <BlogPage
                onOpenArticleModal={openArticleModal}
                onOpenPrivacyModal={openPrivacyModal}
              />
            }
          />
          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenDateModal={openDateModal}
                onOpenPrivacyModal={openPrivacyModal}
                onPrefillContact={scrollToContactWithSubject}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer
        onOpenCancellationModal={openCancellationModal}
        onOpenMediaModal={openMediaModal}
      />

      {/* Universal Modal */}
      <Modal modal={modal} onClose={closeModal} />
    </div>
  );
};
