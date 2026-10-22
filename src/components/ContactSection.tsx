import React, { useState, useEffect } from 'react';
import { submitContactMessage } from '../services/api';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  defaultSubject?: string;
  workshopId?: string;
  workshopTitle?: string;
  formType?: string;
  onOpenPrivacyModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'Skriv til meg',
  subtitle = 'Har du spørsmål? Jeg er her for deg.',
  defaultSubject = '',
  workshopId = 'general_contact',
  workshopTitle = 'Forside – Generell henvendelse',
  formType = 'general_contact',
  onOpenPrivacyModal,
}) => {
  const [formLoadTime, setFormLoadTime] = useState<number>(Date.now());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  useEffect(() => {
    if (defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [defaultSubject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const res = await submitContactMessage(
      {
        name,
        email,
        subject: subject || workshopTitle,
        message,
        honeypot,
        formType,
        workshopId,
        workshopTitle,
      },
      formLoadTime
    );

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(res.message || 'Det oppstod en feil. Vennligst prøv igjen.');
    }
  };

  return (
    <section className="contact-gradient py-24 sm:py-28 px-4 sm:px-6 lg:px-8 text-center" id="kontakt">
      <div className="max-w-[680px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-neutral-600 text-base mb-10">
          {subtitle}
        </p>

        {errorMsg && (
          <div
            className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-left animate-in fade-in"
            role="alert"
          >
            {errorMsg}
          </div>
        )}

        {submitted ? (
          <div className="p-8 sm:p-10 bg-white border border-emerald-300 rounded-xl shadow-sm text-center animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              ✓
            </div>
            <h3 className="text-2xl font-light text-emerald-800 mb-2">
              Takk for din henvendelse!
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-md mx-auto">
              Meldingen din er mottatt. Daniela vil ta kontakt med deg så snart som mulig.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setMessage('');
                setFormLoadTime(Date.now());
              }}
              className="mt-6 text-xs text-[#ee5a7a] hover:underline"
            >
              Send en ny melding
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-5" noValidate>
            {/* Honeypot anti-spam field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_url_hp">Ikke fyll ut dette feltet</label>
              <input
                type="text"
                id="website_url_hp"
                name="website_url_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Fullt navn <span className="text-[#e7485e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ola Nordmann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#ee5a7a] focus:ring-1 focus:ring-[#ee5a7a] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Din e-postadresse <span className="text-[#e7485e]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="ola@eksempel.no"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#ee5a7a] focus:ring-1 focus:ring-[#ee5a7a] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                Emne <span className="text-[#e7485e]">*</span>
              </label>
              <input
                type="text"
                required
                id="formEmne"
                placeholder="Forespørsel eller påmelding"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#ee5a7a] focus:ring-1 focus:ring-[#ee5a7a] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                Melding <span className="text-[#e7485e]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Skriv din melding eller spørsmål her..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#ee5a7a] focus:ring-1 focus:ring-[#ee5a7a] transition-all resize-y"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-200/60 rounded text-[11px] font-medium text-neutral-700">
                  <span>Beskyttet mot søppelpost</span>
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-normal">
                  Felter merket med stjerne (*) er obligatoriske.
                  <br />
                  Opplysningene behandles konfidensielt.{' '}
                  {onOpenPrivacyModal && (
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-neutral-700 underline hover:text-[#ee5a7a]"
                    >
                      Personvern
                    </button>
                  )}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-solid self-start sm:self-center cursor-pointer disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? 'Sender...' : 'Send henvendelse ➜'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
