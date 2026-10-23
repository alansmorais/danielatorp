import { Workshop } from '../types';
import { getAssetUrl } from '../services/assets';

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'lek-med-meg',
    slug: 'Hraj-si-se-mnou',
    title: 'Lek med meg',
    tag: 'Tredagers retreat',
    subtitle: 'En tredagers reise til røttene av dine begjær og lengsler',
    shortDescription: 'En tredagers reise til røttene av dine begjær og lengsler i trygge, samtykkebaserte rammer.',
    cardImage: '/images/playwme.jpeg',
    heroImage: '/images/playwme.jpeg',
    fullDescription: [
      'Hva om det finnes langt mer i din nytelse enn det man ser ved første øyekast? Hva om du våget å forlate de vante og trygge rammene for hvordan man møter andre, og trådte inn på kink-veien – inn i et rike av uendelige muligheter der du kan skape akkurat det du drømmer om?',
      'På denne retreaten dykker vi dypt inn i den fascinerende verdenen av samtykkebasert lek og samspill, der du kan be om nøyaktig det du ønsker å gi eller motta, og utforske hva som eventuelt holder deg tilbake i hverdagen. Grenser, begrensninger, lengsler og fantasier – alt er hjertelig velkomment.',
      'Dette kan vekke noe uventet i deg. Når vi arbeider med våre sanne lengsler, kan sårbare punkter og gamle sår komme til overflaten – noe som gir en enestående mulighet til å møte disse delene med omsorg og helbredelse.',
      'For alle som kjenner at det finnes noe dypere og mer levende i livet – dette er din invitasjon.'
    ],
    quote: '«Kink og bevisst lek handler ikke om å krysse grenser, men om å oppdage hvor grensene og lengslene dine egentlig bor i trygghet og gjensidig samtykke.»',
    daysProgram: [
      {
        title: 'Fredag: Å finne hjem i seg selv – tre inn i eget begjær',
        desc: 'Denne dagen utforsker vi samtykke, trygghet og det å sette ord på det du ønsker, samt å ta imot det. Gjennom lekne øvelser går vi inn i hjertet av lengselen og møter vokterne som har stått i veien for å nå dit.'
      },
      {
        title: 'Lørdag: Det praktiske – Sanselig slaglek og binding (Impact Play & Bondage)',
        desc: 'Vi bygger videre på rammene fra fredagen og går dypere inn i lengselens kjerne. Ta med leketøy! Praktisk veiledning i bruk av tau og pisk, med god plass til å øve i eget tempo. Hvordan forhandle, sette rammer, skape trygghet og bygge scener. Dagen avrundes med en leken kveldssamling.'
      },
      {
        title: 'Søndag: Nærvær og lekenhet – Kunsten å gi og motta ris (Spanking)',
        desc: 'Vi lander mykt på bølgen vi har skapt og utforsker spankingens kunst. En dyp, leken og sanselig måte å samspille på. Vi tar oss god tid til jording, kontakt med kroppen og en trygg avrunding før vi reiser hjem.'
      }
    ],
    targetAudience: [
      'For både enkeltpersoner og par',
      'For deg som vil fordype din sensualitet og dine relasjoner',
      'For nysgjerrige, åpne og respektfulle mennesker',
      'Både for nybegynnere og de med tidligere erfaring'
    ],
    location: 'Tantracentrum Kameňák, Kamenný Újezd 83, Nýřany / Kurs i Norge annonseres fortløpende',
    timing: 'Fredag kl. 17:00 til søndag kl. 17:00',
    whatToBring: ['Behagelige klær', 'Notatbok og penn', 'Egne lekerekvisitter dersom du har'],
    priceNOK: 'Level 1: 6 400 kr | Level 2: 7 250 kr',
    priceCZK: 'Oppgis ved påmelding',
    priceNote: 'Priser oppgis i norske kroner for arrangementer i Norge. Ta kontakt for oppdatert kursplan og påmeldingsinformasjon.',
    hosts: 'Daniela Torp & Bas van der Tang – de forener dyp kunnskap om kropp, samtykkebasert samspill, tantra og kink.'
  },
  {
    id: 'kvinneessens-og-livskraft',
    slug: 'zenska-esence-no',
    title: 'Kvinneessens og livskraft',
    tag: 'Årstidssamlinger for kvinner',
    subtitle: 'Fire årstidsmøter for kvinner dedikert til ekte hvile, tilstedeværelse og fornyelse',
    shortDescription: 'Knytt kontakt med din feminine urkraft og sanselige livsenergi gjennom fire årstidsmøter.',
    cardImage: '/images/1.jpg',
    heroImage: '/images/1.jpg',
    fullDescription: [
      'I løpet av året møtes vi til fire kvinnesamlinger dedikert til ekte hvile og egenomsorg. Ikke overfladisk avslapning, men dyp forløsning – for kropp, sinn og indre balanse. Dette er samlinger hvor du ikke trenger å bevise noe, ikke skynde deg noe sted, eller lede noe. Et rom hvor du rett og slett bare kan være.',
      'Hver samling er en invitasjon til å roe ned og vende tilbake til deg selv. Til å lytte til kroppen, pusten og følelsene som ofte blir skjøvet til side i hverdagens kjas og mas. Det venter skånsomt kroppsarbeid, rom for mental ro, bevisst hvile og en støttende sirkel av kvinner som holder og bærer deg.',
      'Alt foregår i et trygt og respektfullt miljø hvor du er velkommen akkurat slik du er. Samlingen inkluderer også næringsrik mat tilberedt med kjærlighet for å støtte restitusjon og helhetlig velvære.',
      'Du kan velge å gå gjennom hele syklusen av fire samlinger og gi deg selv næring gjennom hele året, eller delta på kun én samling – avhengig av hva du trenger mest akkurat nå. Begge veier er like velkomne.'
    ],
    quote: '«En rikholdig variasjon av praksiser som støtter en dypere kontakt med deg selv – dans, kroppsarbeid, energisk heling og ekstatisk forankring i kroppen.»',
    seasons: [
      {
        name: 'Imbolc',
        date: '27.02. – 01.03.2026',
        focus: 'Barndom & røtter',
        description: 'Oppdag din lekne natur, hel barndommens sår og forstå hvordan familierelasjoner former dine overbevisninger. Knytt kontakt med røttene dine og finn emosjonell støtte for å nære ditt indre barn.',
        image: '/images/chatgpt-image-9.-1.-2026-14_29_46-2.png'
      },
      {
        name: 'Beltane',
        date: 'Vår / Forsommer',
        focus: 'Ungdom & selverkjennelse',
        description: 'Favn din sensualitet, lær å elske deg selv og sett sunne grenser. Møt ungdomstidens utfordringer, skam, skyld og identitetssøken. Lær kunsten å samtykke og fullstendig selvaksept.',
        image: '/images/danča-fb-1.jpg'
      },
      {
        name: 'Lughnasad',
        date: '04.07. – 05.07.2026',
        focus: 'Morskap & egenkraft',
        description: 'Favn kroppen din, ta imot kraften i lyst og livmor, og gi slipp på gamle traumer. Tre inn i svangerskapets magi, fødselens skjønnhet og kunsten å skape bevisst.',
        image: '/images/danča-fb-2.jpg'
      },
      {
        name: 'Samhain',
        date: '16.10. – 18.10.2026',
        focus: 'Visdom & ro',
        description: 'Favn modningen, finn ro i din sanselige visdom og oppdag overgangsalderens skjønnhet. Gjenopprett kontakten med din dype intuisjon og lær kunsten å ikke dømme.',
        image: '/images/danča-fb-3.jpg'
      }
    ],
    pusteritual: {
      title: 'Pusteritual for heling av «søstersåret»', 
      description: [
        'Et dypt forankret, intimt pusteritual som har som mål å hele søstersåret og gjenoppbygge tillit, trygghet og kontakt mellom kvinner.',
        'Gjennom sammenhengende pust, somatisk oppmerksomhet og emosjonelt uttrykk møter og forløser vi skånsomt følelser lagret i kroppen. Søstersår – ofte formet av sammenligning, fordømmelse, utestengelse eller svik – sitter ikke bare i minnet, men i nervesystemet.',
        'Pusten bidrar til å myke opp forsvarsmønstre, frigjøre fastlåst emosjonell energi og åpne opp for ekte tilknytning og levende tillit.'
      ],
      image: '/images/danča-fb-4.jpg'
    },
    location: 'Larvik / Oslo (Norge) & Kamenný Újezd 38, Nýřany (Tsjekkia)',
    timing: 'Ankomst fredag kl. 16:00, programstart kl. 17:00, avslutning søndag kl. 15:00–16:00',
    whatToBring: ['Behagelige klær og innesko', 'Vannflaske', 'Teppe', 'Sovepose eller dyne/pute'],
    priceNOK: 'Woman Vital Essence (IMBOLC / BELTANE): 4 350 kr | SAMHAIN: 3 650 kr',
    priceCZK: '2 250 CZK per samling',
    priceNote: 'Reserver én samling eller en helhetlig årspakke for alle fire samlingene.'
  },
  {
    id: 'kun-for-par',
    slug: 'jen-pro-pary',
    title: 'Kunsten å tilfredsstille – for par',
    tag: 'Workshop for par',
    subtitle: 'Gjenoppdag gnisten og den dype intimiteten i parforholdet',
    shortDescription: 'Gjenoppdag nærheten og den dype gnisten i parforholdet gjennom samspill og bevisst berøring.',
    cardImage: 'https://www.danielatorp.cz/images/6-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/6-1024x1024.jpg',
    fullDescription: [
      'Oppdag hva menn og kvinner virkelig ønsker i intimitet. Lær å gi, ta imot, berøre og kommunisere… med full tilstedeværelse og bevissthet.',
      'Føler du også noen ganger at partneren din kommer fra en helt annen planet? Kvinner er ofte et mysterium for menn, og menn kan fremstå som enkle for kvinner – men sannheten er langt mer nyansert og dyp.',
      'Denne unike workshopen for par er skapt for alle som ønsker å fordype samlivet, forstå egne og partnerens intime behov, og bli trygge, kjærlige elskere i et støttende og respektfullt rom.'
    ],
    quote: '«Intimitet handler ikke om å prestere, men om å tørre å slippe masken og møte partneren med ekte nysgjerrighet og kjærlig nærvær.»',
    forWomenBullets: [
      'Oppdag at mannens seksualitet ikke bare handler om hurtighet og prestasjon, men rommer dype følelser',
      'Lær teknikken for tantrisk lingammassasje og bevisst nærvær',
      'Få større trygghet, frihet og ro i intimiteten',
      'Lær hvordan du stiller deg inn på partneren selv i hverdagens travle faser',
      'Forstå hvordan du sanser mannens kropp og gir ham oppmerksomhet med respekt og helhetlig nytelse'
    ],
    forMenBullets: [
      'Lær å lese partnerens sanne signaler for lyst, og skap trygghet der hun våger å åpne seg',
      'Lær å berøre en kvinne varsomt og sanse hennes fineste responser',
      'Få praktiske, ærlige og verdifulle verktøy for samspill',
      'Forstå hvorfor kvinnens rytme krever tålmodighet og tilstedeværelse',
      'Lær hemmelighetene bak intim massasje av kvinnekroppen og de sanselige reflekspunktene'
    ],
    targetAudience: [
      'For par i alle livsfaser',
      'For de som vil fordype sin seksualitet og parrelasjon',
      'For nysgjerrige, åpne og respektfulle deltakere',
      'Både for nybegynnere og de med tidligere erfaring'
    ],
    location: 'Oslo (Norge) & Tantracentrum Kameňák, Tsjekkia',
    timing: '1 dag (10:00 – 18:00) eller helgesamling',
    whatToBring: ['Behagelige klær', 'Notatbok og penn'],
    priceNOK: 'Only for Couples: 8 500 kr (per par)',
    priceCZK: '2 900 CZK per person',
    priceNote: 'Pris per par. Ta kontakt for oppdaterte arrangementsdatoer i Oslo og online oppfølging.'
  },
  {
    id: 'kunsten-a-tilfredsstille-en-kvinne',
    slug: 'umeni-potesit-zenu',
    title: 'Kunsten å tilfredsstille en kvinne',
    tag: 'Workshop for menn',
    subtitle: 'Bli en oppmerksom, trygg og dypt nærværende elsker',
    shortDescription: 'Bli en oppmerksom, trygg og dypt nærværende elsker gjennom dyp forståelse og sanselig berøring.',
    cardImage: 'https://www.danielatorp.cz/images/2-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/2-1024x1024.jpg',
    fullDescription: [
      'En praktisk og respektfull workshop der du lærer hemmelighetene bak kvinnelig nytelse, langsom berøring, energiflyt og emosjonell trygghet.',
      'Mange menn har et oppriktig ønske om å gi kvinnen den beste opplevelsen, men kjenner på usikkerhet eller frustrasjon over at de vanlige metodene ikke ser ut til å fungere.',
      'På denne workshopen avmystifiserer vi kvinnekroppen og hennes lystkurve. Du lærer hvordan kvinnens nervesystem reagerer på trygghet, oppmerksomhet og tempo, og hvordan du som mann kan bli en bevisst, trygg og avslappet elsker.'
    ],
    quote: '«Når en mann forstår kvinnens rytme og lærer å møte henne uten hastverk, åpner det seg en hel verden av dyp nytelse og gjensidig tillit.»',
    bulletsTitle: 'Hva du lærer på workshopen:',
    bullets: [
      'Kvinnens anatomi, erogene soner og de dypere lagene av opphisselse',
      'Tantrisk yoni-massasje med respekt, varme og full tilstedeværelse',
      'Hvordan skape en atmosfære der kvinnen kan slappe fullstendig av',
      'Kommunikasjon uten ord: Lesing av kroppsspråk, pust og mikrobevegelser',
      'Avspenning av egne prestasjonskrav og trygghet i egen maskulinitet'
    ],
    location: 'Oslo (Norge) & Tantracentrum Kameňák (Tsjekkia)',
    timing: '1 dag (10:00 – 18:00)',
    whatToBring: ['Behagelige klær', 'Notatbok og penn'],
    priceNOK: 'How to Please a Woman: 2 500 kr',
    priceCZK: '2 900 CZK',
    priceNote: 'Inkluderer undervisning, materiell og veiledning i trygge rammer.',
    testimonials: [
      {
        quote: 'En helt utrolig øyeåpnende opplevelse. Daniela formidler med en naturlighet og verdighet som gjør at all usikkerhet forsvinner.',
        author: 'Martin K.'
      }
    ]
  },
  {
    id: 'bekkenbunnens-hemmeligheter',
    slug: 'tajemstvi-panevniho-dna',
    title: 'Bekkenbunnens hemmeligheter',
    tag: 'Workshop for kvinner',
    subtitle: 'Møt din nye beste venn – en helhetlig opplevelsesworkshop for kvinner',
    shortDescription: 'Gjenopprett kontakten med bekkenbunnens styrke, smidighet og feminine livskraft.',
    cardImage: 'https://www.danielatorp.cz/images/2-2-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/2-2-1024x1024.jpg',
    fullDescription: [
      'Uansett om du ønsker å bli gravid, få et rikere og mer tilfredsstillende sexliv, eller om du sliter med gynekologiske plager – på denne workshopen vil du bli kjent med din nye beste venn: bekkenbunnen din.',
      'Vi arbeider etter den anerkjente 3×3-metoden fra Skolen for bekkenbunn ved Renata Skálová, som forener det fysiske, det emosjonelle og det energetiske planet.',
      'Glem alt du har hørt om hard knipetrening på helsestudio. Bekkenbunnen er et levende, pustende senter for livskraft som trenger like mye avspenning og elastisitet som styrke.'
    ],
    levels: [
      {
        title: '1. Kroppens plan: Helseøvelser for bekkenbunnen',
        desc: 'Lær bekkenbunnens ulike lag og hvordan du kjenner dem igjen. Enkle teknikker for avspenning og styrking. Her handler det om funksjon og smidighet – vi rydder opp i vanlige misforståelser og lærer deg å bruke bekkenbunnspumpen i hverdagen.'
      },
      {
        title: '2. Det emosjonelle plan: Psykosomatikk og bioenergetikk',
        desc: 'Vi utforsker bekkenbunnen fra et psykosomatisk perspektiv og ser på sammenhengen mellom spenninger i kroppen og opplevelsene i hverdagen vår. Vi bruker bioenergetiske øvelser spesielt rettet mot bekkenregionen.'
      },
      {
        title: '3. Det energetiske plan: Sanselighet og livskraft',
        desc: 'Vekk opp bekkenbunnens feminine energisenter. Lær hvordan pusten og oppmerksomheten kan sirkulere vitalitet til hele kroppen og gi fornyet glede og sanselighet.'
      }
    ],
    location: 'Oslo (Norge) & Nýřany (Tsjekkia) / Online tilbys også',
    timing: 'Dagsseminar (10:00 – 17:30)',
    whatToBring: ['Myke treningsklær', 'Varmt teppe', 'Notatbok'],
    priceNOK: 'Veiledende 2 200 kr (kontakt for dato i Norge)',
    priceCZK: '1 900 CZK',
    priceNote: 'Inkluderer personlig hefte med øvelser for hjemmepraksis.'
  },
  {
    id: 'kunsten-a-tilfredsstille-en-mann',
    slug: 'umeni-potesit-muze',
    title: 'Kunsten å tilfredsstille en mann',
    tag: 'Workshop for kvinner',
    subtitle: 'Åpne døren til mannens dypere erotiske verden og opplev ekte samspill',
    shortDescription: 'Forstå mannens dype behov, sårbarhet og emosjonelle berøring som berører hjertet.',
    cardImage: 'https://www.danielatorp.cz/images/9-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/9-1024x1024.jpg',
    fullDescription: [
      'Å tilfredsstille en mann kan ved første øyekast virke enkelt og likefrem. Mange kvinner tror kanskje at det ikke krever noen dypere forståelse – at en enkel berøring her eller der er alt som skal til. Men det er en enorm forskjell mellom en rutinemessig utløsning og det å gi mannen en dyp, transformerende og sanselig opplevelse.',
      'På denne workshopen vil du oppdage at det finnes sårbare, hemmelighetsfulle og kraftfulle lag i mannens seksualitet som de færreste kjenner til. Du vil lære hvordan du møter ham med full tilstedeværelse, sanselighet, varme og ekte forståelse.',
      'Vi går gjennom både teori og praktiske prinsipper, og viser hvordan du gjennom bevisst og sanselig massasje (lingammassasje) kan veilede mannen til dyp og helhetlig nytelse helt uten prestasjonspress.'
    ],
    quote: '«Også i perioder der dere av ulike grunner ikke har tradisjonelt samleie – for eksempel under graviditet, etter fødsel eller etter operasjon – kan du med disse teknikkene gi partneren din en uforglemmelig nærhet og dyp intim nytelse.»',
    bulletsTitle: 'Hva du får ut av workshopen:',
    bullets: [
      'Forstå mannens indre verden: Få innsikt i forskjellene mellom kvinnelig og mannlig opplevelse av seksualitet',
      'Styrket trygghet og selvtillit: Føl deg trygg, sensuell og fri i din rolle som elskerinne',
      'Tantriske massasjeteknikker: Lær sanselig massasje og bevisst berøring som sirkulerer energien i hele mannens kropp',
      'Kommunikasjon om intime behov og avvæpning av mannens prestasjonspress'
    ],
    targetAudience: [
      'Har du en ny partner og ønsker å overraske ham og nå inn til et dypere nivå av nærhet?',
      'Er dere i et langvarig parforhold og ønsker å vekke den gnistrende lidenskapen til live igjen?',
      'Er du for tiden singel, men nysgjerrig og vil forstå mannens anatomi, psykologi og din egen kvinnelige tiltrekningskraft bedre?'
    ],
    location: 'Oslo (Norge) & Tantracentrum Kameňák (Tsjekkia)',
    timing: '1 dag (10:00 – 18:00)',
    whatToBring: ['Behagelige klær du trives i', 'Notatbok og penn'],
    priceNOK: 'How to Please a Man: 2 500 kr',
    priceCZK: '2 900 CZK',
    priceNote: 'Kurset holdes i små grupper for å sikre trygghet og individuell oppfølging.'
  },
  {
    id: 'jeg-var-gravid-men',
    slug: 'byla-jsem-tehotna-ale',
    title: 'Jeg var gravid, men …',
    tag: 'Støtteseminar for kvinner',
    subtitle: 'Et trygt og omsorgsfullt rom for bearbeidelse, forsoning og indre heling',
    shortDescription: 'Finn forsoning, bearbeid tapet og vend tilbake til din indre livskraft i et trygt og omsorgsfullt rom.',
    cardImage: 'https://www.danielatorp.cz/images/4-1-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/4-1-1024x1024.jpg',
    fullDescription: [
      'Har du mistet et barn i svangerskapet, eller måttet gå gjennom et svangerskapsavbrudd? Nå nylig, for et år siden, eller kanskje for mange år siden? Kjenner du på en sorg, sinne, tomhet eller fortvilelse som du ikke har klart å forsone deg med – eller føler du tvert imot at du har måttet stenge av for følelsene dine, også for gleden?',
      'Føler du at du står alene med disse erfaringene, eller at omgivelsene ikke helt forstår hvor dypt dette preger kropp, hjerte og sjel?',
      'Dette er et trygt, fortrolig og omsorgsfullt rom der du kan møte andre kvinner i samme situasjon, bli møtt uten dømmende blikk, og finne tilbake til verdighet, varme og kontakt med din egen kropp.'
    ],
    quote: '«Hvis du kjenner at det er på tide å gi sorgen plass, bearbeide opplevelsen og finne veien tilbake til din indre livskraft, er dette seminaret her for deg.»',
    location: 'Oslo (Norge)',
    timing: 'Dagsseminar kl. 10:00 – 19:00',
    catering: 'Velsmakende vegetarisk lunsj er inkludert i kursavgiften.',
    whatToBring: ['Behagelige klær', 'Notatbok og penn'],
    priceNOK: 'Veiledende 1 500 kr / Ta kontakt for oppsatte datoer i Norge',
    priceCZK: '990 CZK',
    priceNote: 'Seminaret ledes av Daniela Torp med stor faglig og menneskelig varhet.'
  },
  {
    id: 'fodsel-med-trygghet',
    slug: 'porod-jako-jistota',
    title: 'Fødsel med trygghet',
    tag: 'Forberedelseskurs for par',
    subtitle: 'Opplev en bevisst, trygg og harmonisk fødsel i fellesskap',
    shortDescription: 'Bygg dyp tillit til egen kropp og forbered fødselen i trygghet sammen med partneren.',
    cardImage: 'https://www.danielatorp.cz/images/2-1-1024x1024.jpg',
    heroImage: 'https://www.danielatorp.cz/images/2-1-1024x1024.jpg',
    fullDescription: [
      'I løpet av dette opplevelsesbaserte kurset vil dere på egen kropp erfare og integrere enkle, naturlige og fremfor alt velfungerende teknikker som hjelper fødselsveiene til å åpne seg harmonisk og trygt.',
      'Vi retter et sterkt og dedikert fokus mot partneren og vedkommendes rolle under fødselen. Kjære partnere og ledsagere: Vi lærer dere nøyaktig hva dere kan gjøre i de ulike fasene for å lindre smerte, støtte hormonflyten og være den stødige, trygge støtten kvinnen trenger.',
      'Gjennom fødselen kan dere bygge et dypt, intimt bånd. Vi tar i bruk innsikter fra somatisk arbeid og kroppens sanselige intelligens. Jeg forklarer hvordan dere utnytter kvinnekroppens naturlige visdom, hvordan oksytocin og andre fødselshormoner fungerer i praksis, og hvordan dere sammen kan åpne opp for en opplevelse av trygghet og dyp mestring.'
    ],
    quote: '«Det er babyen som bestemmer tidspunktet og fremdriften for fødselen – sammen utforsker vi hvordan dere best mulig kan bane vei og gjøre reisen til verden så skånsom, rolig og kjærlig som mulig.»',
    bulletsTitle: 'Hva vi går grundig gjennom:',
    bullets: [
      'Mestring av smerte og frykt: Hvordan forstå riene, avspenne bekkenbunnen og snu frykt til trygg overgivelse',
      'Fødestillinger og smertelindring: Naturlige stillinger som gir tyngdekraften fritt spillerom og åpner bekkenet',
      'Pusteøvelser tilpasset fødselens faser: Rolig pust som roer nervesystemet og bevarer oksygentilførselen',
      'Sanselig berøring og massasje: Spesifikke berøringsteknikker partneren kan utføre for umiddelbar smertelindring og trygghet'
    ],
    location: 'Oslo (Norge)',
    timing: 'Helgesamling eller dagsseminar (10:00 – 18:00)',
    catering: 'Velsmakende vegetarisk lunsj er inkludert i kursavgiften.',
    whatToBring: ['Behagelige, myke klær', 'Øyebind eller skjerf', 'Varmt pledd og innesko', 'Massasjeolje'],
    priceNOK: 'Veiledende 3 200 kr per par / Ta kontakt for datoer i Norge',
    priceCZK: '2 400 CZK (+ 400 CZK for partner/ledsager)',
    priceNote: 'Vi anbefaler på det varmeste at dere deltar som et par eller sammen med fødselspartner.'
  },
  {
    id: 'mor-og-datter',
    slug: 'matka-a-dcera',
    title: 'Mor og datter',
    tag: 'Transformerende seminar',
    subtitle: 'Bygg bro over generasjonene, finn felles forståelse og helbred relasjonen',
    shortDescription: 'Lær å lytte og kommunisere med dyp respekt for den andres følelser og generasjonsbånd.',
    cardImage: 'https://www.danielatorp.cz/images/2.jpg',
    heroImage: 'https://www.danielatorp.cz/images/2.jpg',
    fullDescription: [
      'Dette seminaret passer for alle døtre og mødre. Dere kan delta sammen som mor og datter, på tvers av flere generasjoner (også med bestemor, for bestemor er jo også mamma). Nedre aldersgrense for døtre er 8 år.',
      'Vi skaper et rom der dere kan legge hverdagens konflikter til side og møte hverandre som likeverdige kvinner. Gjennom samtaler, berøring, lek og øvelser bygger vi broer over misforståelser og finner tilbake til den dype kjærligheten som alltid ligger i bunnen.',
      'Mange mødre og døtre bærer på usagte ord og sår som har vart i årevis. Her får dere veiledning og et trygt rom til å åpne hjertene og finne felles grunn.'
    ],
    quote: '«Jeg vil at vi skal finne tilbake til hverandre. Jeg vil være din trygge støtte gjennom hele livet. / Mamma & Datter»',
    bulletsTitle: 'Hva vil dere oppleve og lære?',
    bullets: [
      'Lære å lytte til hverandre og kommunisere med respekt for den andres følelser',
      'Bli bevisst på familiemønstre og ubevisste generasjonsbyrder, og lære å frigjøre både dere selv og døtrene fra dem',
      'Få støtte og et trygt rom til å snakke om temaer som ellers skaper emosjonell avstand i relasjonen',
      'Le, danse, hvile, pleie dere selv og knytte dypere bånd på tvers av generasjoner'
    ],
    location: 'Hurgal - Norge',
    timing: 'Helgesamling eller dagsseminar',
    whatToBring: ['Behagelige klær du føler deg feminin og vel i', 'Notatbok og penn'],
    priceNOK: 'Veiledende 2 800 kr for mor og datter / Ta kontakt for datoer i Norge',
    priceCZK: '2 250 CZK for mor og datter (+ 500 CZK per ekstra kvinnelig familiemedlem)',
    priceNote: 'Nedre aldersgrense for døtre er 8 år. Ekstra døtre eller bestemor er hjertelig velkomne.',
    testimonials: [
      {
        quote: 'Tusen takk for at du åpnet øynene mine, ikke bare innen det relasjonelle feltet. En utrolig behagelig, menneskelig og trygg tilnærming fra Daniela.',
        author: 'Lucie L.'
      }
    ]
  }
];

// Ensure asset URLs adapt automatically to GitHub Pages or custom domain
WORKSHOPS_DATA.forEach((w) => {
  w.cardImage = getAssetUrl(w.cardImage);
  w.heroImage = getAssetUrl(w.heroImage);
  if (w.seasons) {
    w.seasons.forEach((s) => {
      s.image = getAssetUrl(s.image);
    });
  }
  if (w.pusteritual) {
    w.pusteritual.image = getAssetUrl(w.pusteritual.image);
  }
});

// Helper to look up workshop by slug or id or compatible legacy URLs
export function getWorkshopBySlug(slug: string): Workshop | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace(/\.html$/, '').replace(/_no$/, '');
  return WORKSHOPS_DATA.find(w => 
    w.slug.toLowerCase() === clean || 
    w.id.toLowerCase() === clean ||
    w.slug.toLowerCase() === slug.toLowerCase() ||
    w.id.toLowerCase() === slug.toLowerCase()
  );
}
