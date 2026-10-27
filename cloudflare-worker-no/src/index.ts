export interface Env {
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  SITE_URL: string;
  ALLOWED_ORIGIN: string;
  GOOGLE_REGISTRATION_WEBHOOK_URL: string;
  GOOGLE_REGISTRATION_SHARED_SECRET: string;
}

type Price = { title: string; amount: number; description: string; path?: string };
const PRICES: Record<string, Record<string, Price>> = {
  'lek-med-meg': {
    level1: { title: 'Lek med meg – nivå 1', amount: 640000, description: 'Workshop i Norge; pris i NOK' },
    level2: { title: 'Lek med meg – nivå 2', amount: 725000, description: 'Workshop i Norge; pris i NOK' }
  },
  'kvinneessens-og-livskraft': {
    samhain: { title: 'Kvinneessens – SAMHAIN', amount: 365000, description: 'Årstidssamling for kvinner; pris i NOK' },
    imbolc: { title: 'Kvinneessens – IMBOLC', amount: 435000, description: 'Årstidssamling for kvinner; pris i NOK' },
    beltane: { title: 'Kvinneessens – BELTANE', amount: 435000, description: 'Årstidssamling for kvinner; pris i NOK' }
  },
  'kun-for-par': {
    standard: { title: 'Kunsten å tilfredsstille – for par', amount: 850000, description: 'Pris per par; pris i NOK' }
  },
  'kunsten-a-tilfredsstille-en-kvinne': {
    standard: { title: 'Kunsten å tilfredsstille en kvinne', amount: 250000, description: 'Workshop i Norge; pris i NOK' }
  },
  'kunsten-a-tilfredsstille-en-mann': {
    standard: { title: 'Kunsten å tilfredsstille en mann', amount: 250000, description: 'Workshop i Norge; pris i NOK' }
  },
  'bekkenbunnens-hemmeligheter': {
    standard: { title: 'Bekkenbunnens hemmeligheter', amount: 220000, description: 'Veiledende pris; bekreft norsk dato før betaling' }
  },
  'jeg-var-gravid-men': {
    standard: { title: 'Jeg var gravid, men …', amount: 150000, description: 'Veiledende pris; bekreft norsk dato før betaling' }
  },
  'fodsel-med-trygghet': {
    standard: { title: 'Fødsel med trygghet', amount: 320000, description: 'Veiledende pris per par; bekreft norsk dato før betaling' }
  },
  'mor-og-datter': {
    standard: { title: 'Mor og datter', amount: 280000, description: 'Veiledende pris for mor og datter; bekreft norsk dato før betaling' }
  }
};


const SHE_ORIGIN = 'https://sheacademy.no';
const SHE_PRICES: Record<string, Record<string, Price>> = {
  'ws-1': { standard: { title: 'The Art of Pleasing a Woman', amount: 350000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-2': { standard: { title: 'The Art of Pleasing a Man', amount: 350000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-3': { standard: { title: 'Larvik Vital Essence SAMHAIN', amount: 550000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-4': { standard: { title: 'Trauma workshop with Anne-Oslo', amount: 490000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-5': { standard: { title: 'Play with Me 1', amount: 650000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-6': { standard: { title: 'Play with Me Level 2', amount: 690000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-7': { standard: { title: 'Woman Vital Essence Imbolic', amount: 590000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-8': { standard: { title: 'How to Please a Man', amount: 350000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-9': { standard: { title: 'How to Please a Woman', amount: 350000, description: 'SHE Academy workshop; price in NOK' } },
  'ws-10': { standard: { title: 'Just for Couples', amount: 750000, description: 'SHE Academy workshop; price in NOK' } }
};


const COM_ORIGIN = 'https://danielatorp.com';
const COM_PRICES: Record<string, Price> = {
  'play-with-me': { title: 'Play with Me', amount: 690000, description: 'Workshop registration; price in NOK', path: '/workshops/Hraj-si-se-mnou.html' },
  'i-was-pregnant-but': { title: 'I Was Pregnant, But …', amount: 240000, description: 'Workshop registration; price in NOK', path: '/workshops/byla-jsem-tehotna-ale.html' },
  'art-of-pleasing-couples': { title: 'The Art of Pleasing (For Couples)', amount: 540000, description: 'Workshop registration; price in NOK', path: '/workshops/jen-pro-pary.html' },
  'mother-and-daughter': { title: 'Mother and Daughter', amount: 390000, description: 'Workshop registration; price in NOK', path: '/workshops/matka-a-dcera.html' },
  'birth-as-certainty': { title: 'Birth as Certainty', amount: 320000, description: 'Workshop registration; price in NOK', path: '/workshops/porod-jako-jistota.html' },
  'secrets-of-the-pelvic-floor': { title: 'Secrets of the Pelvic Floor', amount: 260000, description: 'Workshop registration; price in NOK', path: '/workshops/tajemstvi-panevniho-dna.html' },
  'art-of-pleasing-a-man': { title: 'The Art of Pleasing a Man', amount: 280000, description: 'Workshop registration; price in NOK', path: '/workshops/umeni-potesit-muze.html' },
  'art-of-pleasing-a-woman': { title: 'The Art of Pleasing a Woman', amount: 280000, description: 'Workshop registration; price in NOK', path: '/workshops/umeni-potesit-zenu.html' },
  'female-essence-and-life-force': { title: 'Female Essence and Life Force', amount: 320000, description: 'Workshop registration; price in NOK', path: '/workshops/zenska-esence-no.html' }
};

function json(data: unknown, status: number, origin: string): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Stripe-Signature',
      'Vary': 'Origin'
    }
  });
}

async function verifyStripeSignature(payload: string, signatureHeader: string, secret: string): Promise<boolean> {
  const parts = signatureHeader.split(',').map((part) => part.split('='));
  const timestamp = parts.find(([key]) => key === 't')?.[1];
  const signatures = parts.filter(([key]) => key === 'v1').map(([, value]) => value);
  if (!timestamp || signatures.length === 0) return false;
  const timestampNumber = Number(timestamp);
  if (!Number.isFinite(timestampNumber) || Math.abs(Date.now() / 1000 - timestampNumber) > 300) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const digest = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${timestamp}.${payload}`));
  const expected = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  return signatures.some((signature) => {
    if (signature.length !== expected.length) return false;
    let mismatch = 0;
    for (let i = 0; i < signature.length; i++) mismatch |= signature.charCodeAt(i) ^ expected.charCodeAt(i);
    return mismatch === 0;
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const allowedOrigin = env.ALLOWED_ORIGIN;
    const allowedOrigins = [allowedOrigin, 'https://danielatorp.no', 'https://www.danielatorp.no', COM_ORIGIN, 'https://www.danielatorp.com', SHE_ORIGIN, 'https://www.sheacademy.no'];
    const originAllowed = allowedOrigins.includes(origin) || origin === 'http://localhost:3000';
    const corsOrigin = originAllowed ? origin : allowedOrigin;

    if (request.method === 'OPTIONS') {
      if (!originAllowed) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: {
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Stripe-Signature',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
      }});
    }

    if (url.pathname === '/api/webhook') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      const rawBody = await request.text();
      const signature = request.headers.get('Stripe-Signature') || '';
      if (!env.STRIPE_WEBHOOK_SECRET || !(await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET))) {
        return new Response('Invalid Stripe signature', { status: 400 });
      }
      const event = JSON.parse(rawBody) as { id?: string; type?: string; data?: { object?: Record<string, any> } };
      const object = event.data?.object || {};
      if (event.type === 'checkout.session.completed' && object.payment_status === 'paid') {
        if (!env.GOOGLE_REGISTRATION_WEBHOOK_URL || !env.GOOGLE_REGISTRATION_SHARED_SECRET) {
          return new Response('Payment verified, but registration destination is not configured', { status: 500 });
        }
        const forward = await fetch(env.GOOGLE_REGISTRATION_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.GOOGLE_REGISTRATION_SHARED_SECRET}` },
          body: JSON.stringify({
            type: 'workshop_registration_paid',
            stripe_event_id: event.id,
            checkout_session_id: object.id,
            payment_intent_id: object.payment_intent,
            payment_status: object.payment_status,
            shared_secret: env.GOOGLE_REGISTRATION_SHARED_SECRET,
            amount_total: object.amount_total,
            currency: object.currency,
            customer_email: object.customer_details?.email,
            customer_name: object.customer_details?.name || object.metadata?.participant_name,
            metadata: object.metadata,
            registration_source: object.metadata?.registration_source || 'DanielaTorp.no',
            // Compatibility fields for the existing spreadsheet's Website source column (M).
            website_source: object.metadata?.registration_source || 'DanielaTorp.no',
            source_website: object.metadata?.source_website || object.metadata?.site_url || env.SITE_URL,
            site_language: object.metadata?.site_language || 'NO',
            workshop_id: object.metadata?.workshop_id || object.client_reference_id || '',
            paid_at: new Date().toISOString()
          })
        });
        const result = await forward.json().catch(() => null) as { ok?: boolean } | null;
        if (!forward.ok || result?.ok !== true) return new Response('Registration destination failed', { status: 502 });
      }
      return new Response('ok', { status: 200 });
    }

    if (url.pathname !== '/api/create-checkout-session' || request.method !== 'POST') return new Response('Not found', { status: 404 });
    if (!originAllowed) return json({ error: 'Origin is not allowed.' }, 403, corsOrigin);
    if (!env.STRIPE_SECRET_KEY || !env.SITE_URL) return json({ error: 'Online betaling er ikke konfigurert ennå. Kontakt Daniela.' }, 503, corsOrigin);

    let body: { workshopId?: string; priceOption?: string; participantName?: string; participantEmail?: string };
    try { body = await request.json(); } catch { return json({ error: 'Ugyldig forespørsel.' }, 400, corsOrigin); }
    const workshopId = body.workshopId || '';
    const priceOption = body.priceOption || 'standard';
    const isSheAcademy = origin === SHE_ORIGIN || origin === 'https://www.sheacademy.no';
    const isDanielaCom = origin === COM_ORIGIN || origin === 'https://www.danielatorp.com';
    const price = isDanielaCom ? COM_PRICES[workshopId] : (isSheAcademy ? SHE_PRICES : PRICES)[workshopId]?.[priceOption];
    const name = (body.participantName || '').trim().slice(0, 120);
    const email = (body.participantEmail || '').trim().slice(0, 254);
    if (!price || !name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Kontroller workshop og kontaktopplysninger.' }, 400, corsOrigin);
    }

    const site = new URL(isDanielaCom ? COM_ORIGIN : isSheAcademy ? 'https://sheacademy.no' : env.SITE_URL);
    const successUrl = new URL(isDanielaCom ? (price.path || '/') : '/', site);
    successUrl.search = '?payment=success&session_id={CHECKOUT_SESSION_ID}';
    const cancelUrl = new URL(isDanielaCom ? (price.path || '/workshops') + '#kontakt' : isSheAcademy ? '/#workshops' : '/workshops', site);
    const form = new URLSearchParams();
    form.set('mode', 'payment');
    form.set('success_url', successUrl.toString());
    form.set('cancel_url', cancelUrl.toString());
    form.set('customer_email', email);
    form.set('client_reference_id', workshopId);
    form.set('line_items[0][price_data][currency]', 'nok');
    form.set('line_items[0][price_data][unit_amount]', String(price.amount));
    form.set('line_items[0][price_data][product_data][name]', price.title);
    form.set('line_items[0][price_data][product_data][description]', price.description);
    form.set('line_items[0][quantity]', '1');
    form.set('metadata[workshop_id]', workshopId);
    form.set('metadata[workshop_title]', price.title);
    form.set('metadata[participant_name]', name);
    form.set('metadata[participant_email]', email);
    form.set('metadata[site_language]', isDanielaCom ? 'EN' : isSheAcademy ? 'SHE' : 'NO');
    form.set('metadata[registration_source]', isDanielaCom ? 'DanielaTorp.com' : isSheAcademy ? 'SHE Academy' : 'DanielaTorp.no');
    form.set('metadata[website_source]', isDanielaCom ? 'DanielaTorp.com' : isSheAcademy ? 'SHE Academy' : 'DanielaTorp.no');
    form.set('metadata[source_website]', site.origin);
    form.set('metadata[price_option]', priceOption);
    form.set('metadata[site_url]', env.SITE_URL);

    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    });
    const stripeData = await stripeResponse.json() as { url?: string; error?: { message?: string } };
    if (!stripeResponse.ok || !stripeData.url) return json({ error: 'Stripe kunne ikke klargjøre betalingen. Prøv igjen senere.' }, 502, corsOrigin);
    return json({ url: stripeData.url }, 200, corsOrigin);
  }
};
