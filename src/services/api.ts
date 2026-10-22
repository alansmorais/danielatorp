import { ContactFormData } from '../types';

export interface LiveDateItem {
  text: string;
  url?: string;
}

export const DATES_API_URL =
  'https://script.google.com/macros/s/AKfycbwrA4qfZdmzOWaRdbIgtDqL0VO5NpURvNBU-5GdnmJ__3cBPbK4Hy-b5vkn1P0FJo0F/exec?api=json';

export const FORM_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwiptZDdNVNSavoyJeHCvoc7XxOSTG0yg_K5Z-Si81Up_4CSBo5AJUUOuMYLNh2eT3h/exec';

// Default pre-loaded hardcoded dates for NO from Google Apps Script getPublicData()
export const DEFAULT_NO_DATES: LiveDateItem[] = [
  { text: "7.–8.11.2026 - Larvik – Vital essens SAMHAIN 3 650 kr", url: "" },
  { text: "21.–22.11.2026 - Traumeworkshop med Anne – Oslo 2 850 kr", url: "" },
  { text: "22.–24.01.2027 - Lek med meg – nivå 1 - 6400 kr", url: "" },
  { text: "29.–31.01.2027 - Lek med meg – nivå 2 7 250 kr", url: "" },
  { text: "5.–7.02.2027 - Kvinneessens IMBOLC 4 350 kr", url: "" },
  { text: "20.02.2027 - Kunsten å tilfredsstille en mann 2 500 kr", url: "" },
  { text: "21.02.2027 - Kunsten å tilfredsstille en kvinne 2 500 kr", url: "" },
  { text: "26.–28.02.2027 - Kunsten å tilfredsstille – for par 8 500 kr", url: "" },
  { text: "20.3.2027 - Ostara – en feiring av livet Pris ikke oppgitt", url: "" },
  { text: "30.4-2.5.2027 - Kvinneessens – BELTANE 4 350 kr", url: "" }
];

export async function fetchLiveDates(): Promise<LiveDateItem[]> {
  try {
    const res = await fetch(DATES_API_URL);
    if (!res.ok) {
      throw new Error(`Nettverksfeil: ${res.status}`);
    }
    const data = await res.json();
    const noRaw = data?.NO || data?.no || [];
    if (Array.isArray(noRaw) && noRaw.length > 0) {
      const parsed = noRaw
        .map((item: any) => {
          if (typeof item === 'string') {
            return { text: item.trim(), url: '' };
          }
          if (item && typeof item === 'object') {
            return {
              text: String(item.text || item.title || '').trim(),
              url: String(item.url || item.pageUrl || '').trim()
            };
          }
          return { text: '', url: '' };
        })
        .filter((item) => item.text.length > 0);

      if (parsed.length > 0) {
        return parsed;
      }
    }
    return DEFAULT_NO_DATES;
  } catch (err) {
    console.warn('Henter fallback-datoer for NO:', err);
    return DEFAULT_NO_DATES;
  }
}

export interface SubmitResult {
  success: boolean;
  message?: string;
}

export async function submitContactMessage(
  data: ContactFormData,
  formLoadTime: number
): Promise<SubmitResult> {
  // 1. Anti-spam honeypot verification
  if (data.honeypot && data.honeypot.trim() !== '') {
    // Silently reject bot
    return { success: true };
  }

  // 2. Speed trap: Minimum 3 seconds required to submit
  const elapsed = (Date.now() - formLoadTime) / 1000;
  if (elapsed < 3) {
    // Silently ignore fast bot
    return { success: true };
  }

  // 3. Validation
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();
  const subject = data.subject.trim();

  if (!name || name.length < 2 || name.length > 100) {
    return { success: false, message: 'Vennligst oppgi et gyldig navn (mellom 2 og 100 tegn).' };
  }

  const urlPattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  if (urlPattern.test(name)) {
    return { success: false, message: 'Navn kan ikke inneholde lenker eller nettadresser.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email) || email.length > 120) {
    return { success: false, message: 'Vennligst oppgi en gyldig e-postadresse.' };
  }

  const linksInMessage = message.match(urlPattern);
  if (linksInMessage && linksInMessage.length > 1) {
    return { success: false, message: 'Vennligst fjern lenker fra meldingen din (maks én lenke er tillatt).' };
  }

  if (!message || message.length < 5 || message.length > 5000) {
    return { success: false, message: 'Vennligst skriv en melding på minst 5 tegn (maks 5000 tegn).' };
  }

  // 4. Build exact attribution header and payload
  const timestamp = new Date().toISOString();
  const attributionHeader = `[KILDE: danielatorp.no | Språk: no]
[SKJEMA: ${data.formType || 'general_contact'}]
[WORKSHOP: ${data.workshopTitle || 'Generell henvendelse'} (ID: ${data.workshopId || 'general_contact'})]
[SIDE: ${typeof window !== 'undefined' ? window.location.href : 'https://danielatorp.no/'}]
[TIDSPUNKT: ${timestamp}]
${subject ? `[EMNE: ${subject}]` : ''}

`;

  const formattedMessage = attributionHeader + message;

  const payload = {
    type: 'contact',
    lang: 'NO',
    website: 'danielatorp.no',
    locale: 'no',
    workshop_id: data.workshopId || 'general_contact',
    workshop_title: data.workshopTitle || 'Generell henvendelse',
    form_type: data.formType || 'general_contact',
    page_url: typeof window !== 'undefined' ? window.location.href : 'https://danielatorp.no/',
    timestamp: timestamp,
    name: name,
    email: email,
    subject: subject || data.workshopTitle || 'Henvendelse fra nettsiden',
    message: formattedMessage
  };

  try {
    await fetch(FORM_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return { success: true };
  } catch (err) {
    console.error('Feil ved innsending av kontaktskjema:', err);
    return {
      success: false,
      message: 'Det oppstod en feil ved sending av meldingen. Vennligst prøv igjen, eller kontakt Daniela direkte på e-post.'
    };
  }
}
