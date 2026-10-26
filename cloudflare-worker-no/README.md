# Norwegian Stripe Checkout Worker

This is a separate Worker for `danielatorp.no`. Do not change the existing Czech Worker `danielatorp-stripe-checkout`.

## Required secrets

Set these with Wrangler secrets or Cloudflare Worker settings; never commit their values:

- `STRIPE_SECRET_KEY` — Stripe secret key for the intended account/mode.
- `STRIPE_WEBHOOK_SECRET` — signing secret for the webhook endpoint below.
- `GOOGLE_REGISTRATION_WEBHOOK_URL` — the existing Google Apps Script receiver URL, after confirming it accepts Norwegian registration events.
- `GOOGLE_REGISTRATION_SHARED_SECRET` — matching shared secret for that receiver.

## Deploy

From this directory, after authenticating Wrangler with the correct Cloudflare account:

```sh
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler secret put GOOGLE_REGISTRATION_WEBHOOK_URL
npx wrangler secret put GOOGLE_REGISTRATION_SHARED_SECRET
npx wrangler deploy
```

Use Stripe **test mode first**. In Stripe Developers → Webhooks, add the deployed Worker URL plus `/api/webhook`, and subscribe to `checkout.session.completed`. Store the generated signing secret as `STRIPE_WEBHOOK_SECRET`.

## Frontend configuration

Set `VITE_STRIPE_WORKER_URL` in the Norwegian site's build environment to the deployed Worker origin, for example `https://danielatorp-no-stripe-checkout.<your-cloudflare-subdomain>.workers.dev`. Do not use the Czech Worker URL.

## Pricing

The Worker owns the amount values and accepts only known workshop IDs and price options. Amounts are in NOK øre. Review all prices and the receiver's registration mapping before enabling live payments. Workshops with indicative prices are marked as such in their Stripe line-item descriptions.

## Registration receiver

The webhook forwards paid checkout sessions to the configured Google Apps Script receiver with `site_language: no` metadata and the Stripe currency/amount. Confirm the receiver stores the site language and NOK values correctly before launch. The Worker returns a retryable error if the receiver does not confirm success.
