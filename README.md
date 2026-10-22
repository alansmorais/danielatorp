# Daniela Torp – Offisiell norsk nettside

Komplett norsk nettside for **Daniela Torp** bygget med React 18, TypeScript, Vite og Tailwind CSS.

## 🌟 Funksjoner

- **Intimitetens 6 søyler:** Dyp utforskning av de 6 grunnleggende søylene for intimitet gjennom alle livets faser.
- **Komplett workshop-katalog:** Detaljerte sider for alle 9 transformative workshops med spesifikke beskrivelser, program, priser i NOK og opprinnelig CZK-referanse, målgrupper, sitater og deltakererfaringer:
  1. *Kunsten å tilfredsstille en kvinne*
  2. *Kunsten å tilfredsstille en mann*
  3. *Kunsten å tilfredsstille – for par*
  4. *Bekkenbunnens hemmeligheter*
  5. *Jeg var gravid, men …*
  6. *Fødsel med trygghet*
  7. *Mor og datter*
  8. *Lek med meg*
  9. *Kvinneessens og livskraft*
- **Privat konsultasjon:** Somatisk veiledning og parterapi for dypere kontakt med kropp og relasjoner.
- **Blogg:** Artikler og personlige refleksjoner.
- **Sanntids Google Apps Script integrasjon:**
  - *Kommende datoer:* Henter dynamisk oppdaterte datoer for norske arrangementer via Google Apps Script API.
  - *Kontaktskjema & påmelding:* Sender henvendelser direkte til det etablerte Google Apps Script-endepunktet med full kildeattribusjon (`[KILDE: danielatorp.no]`, skjematype, workshop-ID, tidsstempel).
- **Anti-spam beskyttelse:** Skjult honeypot-felt og tidsvalidering (minimum 3 sekunders innsendingstid).
- **Avbestillingsvilkår & personvern:** Integrerte og tilgjengelige modaler for vilkår og personvern.
- **Flerspråklig navigasjon:** Rask tilgang til den tsjekkiske (`danielatorp.cz`) og engelske (`danielatorp.com`) nettsiden.

## 🛠️ Teknisk oppsett

- **Rammeverk:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Navigasjon:** React Router DOM (støtter både rene stier og kompatibilitetsruter for eksisterende `.html`-lenker)
- **Kompatibilitet:** Kan bygges til statisk HTML/JS (`npm run build`) for publisering på GitHub Pages eller tilsvarende hosting.

## 🚀 Kjøring og bygging

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver (port 3000)
npm run dev

# Bygg for produksjon (genererer dist/)
npm run build

# Kjør linter / typesjekk
npm run lint
```
