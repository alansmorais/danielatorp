export interface HomepageContent {
  hero_title: string;
  hero_subtitle: string;
  hero_subtitle_2: string;
  dates_title: string;
  date_1: string;
  date_2: string;
  date_3: string;
  date_4: string;
  date_5: string;
  pillar_1: string;
  pillar_2: string;
  pillar_3: string;
  pillar_4: string;
  pillar_5: string;
  pillar_6: string;
  about_title: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  workshop_1_title: string;
  workshop_1_desc: string;
  workshop_2_title: string;
  workshop_2_desc: string;
  workshop_3_title: string;
  workshop_3_desc: string;
}

export const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  hero_title: 'Intimitet i sammenheng',
  hero_subtitle: 'Intimitet er ikke bare sex. Det handler om å etablere et fortrolig forhold til deg selv og til menneskene som står deg nær. Intimitet, den behagelige følelsen av tillit, sammenheng og nakenhed, gjør at vi kan leve mer autentisk og nærværende.',
  hero_subtitle_2: 'Jeg vil hjelpe deg med å finne veien til ditt sanne jeg og til dine nærmeste.',
  dates_title: 'Kommende datoer:',
  date_1: '20.6.2026: Åpning av senteret Tilstedeværelse',
  date_2: '4.–5.7.2026: Lughnasad – Kvinneessens og livskraft',
  date_3: '3.10.2026: Kunsten å behage en kvinne',
  date_4: '4.10.2026: Kunsten å behage en mann',
  date_5: '16.–18.10.2026: Samhain – Kvinneessens og livskraft',
  pillar_1: 'Parintimitet<br>Forholdet til egen kropp',
  pillar_2: 'Intimitet under graviditet<br>og ved fødsel',
  pillar_3: 'Intimitet med baby,<br>familieintimitet',
  pillar_4: 'Intimitet hos barn<br>og ungdom',
  pillar_5: 'Intimitet<br>i moden alder',
  pillar_6: 'Intimitet<br>i døden',
  about_title: 'Hvem er Daniela',
  about_p1: 'Jeg er et menneske. Jeg føler og oppfatter akkurat som deg. Jeg opplever lignende situasjoner, utfordringer, gleder og sorger. Jeg tar vare på meg selv, familien min og vennene mine, og jeg forstår hvordan det er å være et menneske i et samfunn som ofte stiller krav til hvordan vi «skal» være.',
  about_p2: 'Visste du at det finnes mer enn 180 000 øyer i verden?',
  about_p3: 'Det finnes tusenvis av øyer, og de ligner ofte på hverandre. Likevel er hver enkelt et unikt økosystem. Slik er også hvert enkelt menneske. Min oppgave er ikke å fortelle deg hvordan du skal leve, men å holde et trygt og fordomsfritt rom der du kan finne veien hjem til din egen krop og ditt eget liv.',
  workshop_1_title: 'Kunsten å behage en kvinne',
  workshop_1_desc: 'Bli en perfekt elsker.',
  workshop_2_title: 'Kunsten å behage en mann',
  workshop_2_desc: 'Bli en perfekt elskerinne.',
  workshop_3_title: 'Kunsten å behage',
  workshop_3_desc: 'Workshop for menn og kvinner.',
};

function normalizeHomepageContent(input: Partial<HomepageContent> | null | undefined): HomepageContent {
  const base = DEFAULT_HOMEPAGE_CONTENT;
  return {
    ...base,
    ...(input ?? {}),
  };
}

export async function loadHomepageContent(): Promise<HomepageContent> {
  const url = new URL('/site-content.json', window.location.origin);
  url.searchParams.set('_', String(Date.now()));

  const response = await fetch(url, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load published homepage content: ${response.status}`);
  }

  const data = await response.json();
  return normalizeHomepageContent(data);
}
