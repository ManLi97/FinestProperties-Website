# Project_idea.md (Planning-first, Step-by-step, NO one-shot)

## Project Name
Finest Properties Mallorca — Website Refresh (Showcase Prototype)

## Goal
Create a modern, mobile-first showcase website for a Mallorca real estate agency (Finest Properties Mallorca / Markus Redlich).  
This is a **prototype**: use **dummy data** for listings and content, but make it feel realistic and premium.

## Critical Rules (Read carefully)
1. **Do NOT build everything in one go.** Work **step-by-step** and wait for approval after each step.
2. Always start in **Planning Mode**: propose your own structured implementation plan (phases + checkpoints) before building anything.
3. **Mobile-first** always. Design for small screens first, then adapt for tablet/desktop.
4. Keep pages **clean, light, and property-focused**. Avoid long text walls.
5. Use **Option B visual direction**: Mediterranean Light Luxury (warm off-white), with a **dark hero overlay** for the video section.
6. **Dummy data is fine**, but the structure must support real data later (listings, filters, detail pages).
7. Primary conversion = **phone call**, secondary = **WhatsApp**, tertiary = **contact form/email**.

## Language Requirements (Very Important)
- This brief is in English, BUT **all visible website UI and copy must be in German**:
  - Navigation labels
  - Buttons / CTAs
  - Form labels & helper text
  - Headings and section copy
  - Footer text and legal link labels
- EN/ES content is NOT required for the showcase, but the language switch must be present in the header.

## Assets & Media
I will provide videos/images in the project folder.
- Create/use a folder named: **/Media**
- The hero video should be loaded from **/Media** (I may provide multiple video options).
- If assets are missing, use placeholders but keep the structure ready to swap.

## Primary UX Elements
- **Hero with autoplay video** (muted, looping, overlay, premium feel)
- **Search / Property Finder** directly under the hero (prominent, like current site)
- **Trust badges in hero** (2–3 max; no awards available for now → use factual badges)
- **Trust/About section (Stage 2)** with Markus photo + concise, high-trust copy
- **Latest properties section** (cards)
- **Services section** (4 cards; keep concise, premium)
- **Mallorca Guide hub** (cards linking to guide articles; content concise)
- **Sell CTA section** (selling-focused conversion)
- **Floating phone bubble** (always visible, bottom-right)
- **Sticky header** on scroll (mobile-first)

## Navigation & Sitemap (Showcase)

### Header Navigation (German labels)
- **Startseite**
- **Immobilien** (dropdown categories)
- **Verkaufen**
- **Service** (dropdown)
- **Kontakt**
- **Language switch**: **DE / EN / ES** (UI exists; only DE content required now)

### Immobilien dropdown categories (German labels)
- **Villa & Finca kaufen**
- **Wohnung kaufen**
- **Mieten**
- **Grundstück**
- **Immobilien Palma de Mallorca**
- **Gewerbeimmobilien**
- **Hotels**

### Pages to build (minimum for showcase)
1. **Startseite**
2. **Immobilien (Listing + Filters)**
3. **Immobilien-Detail (Template)**
4. **Verkaufen (Seller Landing)**
5. **Service Hub / Subpages** (can be separate pages or structured sections)
   - **Über uns**
   - **VIP Mallorca Erlebnis**
   - **Leben auf Mallorca**
   - **Mallorca Guide (Hub)**
6. **Kontakt** (Form + legal links placeholders)
7. **Rechtliches (basic placeholders)**
   - **Datenschutz**
   - **Impressum**

## Key Page Requirements (German UI/copy)

### Startseite
- Hero video (from /Media) + headline + 2 CTAs:
  - **„Immobilien finden“**
  - **„Immobilie verkaufen“**
- Hero badges (2–3, factual)
- Finder card below hero (Type, Location, Ref, Price range) with German labels:
  - **Immobilientyp**
  - **Region/Ort**
  - **Referenznummer**
  - **Preisklasse**
  - CTA: **„Suchen“**
- Trust/About Stage 2 (Markus photo, 2–3 bullets, CTA: **„Jetzt anrufen“** / **„WhatsApp“**)
- Latest properties (6–8) section title e.g. **„Neue Immobilienangebote“**
- Services (4 cards) section title e.g. **„Unsere Services“**
- Mallorca Guide (hub cards) section title e.g. **„Mallorca Guide“**
- Sell CTA section title e.g. **„Immobilie verkaufen auf Mallorca“**
- Footer includes a small Partner area with **Sixt** (logo if available; otherwise placeholder)

### Immobilien (Listing)
- Filter controls (German labels): Kategorie, Ort, Preisklasse, Referenznummer
- Sort options (German): **„Neueste“**, **„Preis aufsteigend“**, **„Preis absteigend“**
- Cards show: image, title, location, price, key facts, ref
- Pagination or “Load more” (dummy), German label e.g. **„Mehr laden“**

### Immobilien-Detail (Template)
- Gallery (images, optional video slot)
- Price, location, ref, hard facts, energy certificate field (German labels)
- Description + features list
- Buttons:
  - **„Exposé herunterladen“** (dummy)
  - **„Objekt teilen“**
- Compact inquiry form (required), German labels:
  - **Name**
  - **E-Mail**
  - **Telefon**
  - **Ihre Nachricht**
  - Checkboxes:
    - **„Rückruf erwünscht“**
    - **„Bitte um Rücksprache zwecks Besichtigungstermin“**
    - **„Ich habe die Datenschutzerklärung gelesen und akzeptiere sie“** + link to Datenschutz

### Verkaufen (Seller Landing)
- NO property listings at the top.
- Start with: **„Warum über Finest Properties verkaufen?“** (or similar)
- Benefits + process steps + CTA blocks for call / WhatsApp / contact form
- Optional short FAQ

### Service / Mallorca Guide
- Service cards lead to clean, short pages (German)
- Mallorca Guide is a hub with multiple guide cards (short copy, scannable)

### Kontakt
- Contact info + map link (avoid heavy map embed on mobile)
- Full contact form (German): Name, E-Mail, Telefon, Nachricht
- Legal links (German): Datenschutz / Impressum

## Floating Bubble (Always Visible, German UI)
- Default: phone icon
- Tap opens bottom sheet:
  1) Primary: **„Jetzt anrufen“**
  2) Secondary: **„WhatsApp“**
  3) Small links: **„E-Mail“** / **„Kontaktformular“**

## Visual Style (Option B)
- Warm off-white backgrounds, stone/sand neutrals
- Brand accent: orange (#EC6907) for CTAs/highlights only
- Modern typography (Montserrat ok)
- Soft radius (~12px), clean cards, restrained shadows
- Premium spacing, minimal clutter, strong hierarchy

## Planning Mode Output (What you must do first)
Before building, provide:
- A phased implementation plan (pages/components order)
- Clear approval checkpoints
- Risks/assumptions (e.g., missing media assets, placeholder content)
Then wait for approval and proceed step-by-step.

## Success Criteria
- Feels premium, modern, and mobile-first
- Clear conversion paths (Call/WhatsApp)
- Full showcase flow: Startseite → Immobilien Listing → Detail → Anfrage + Verkaufen funnel
- Easy to replace dummy data with real database later

## Non-goals (for now)
- No real database integration
- No full multilingual content (only DE, but switch exists)
- No heavy CMS setup unless explicitly requested