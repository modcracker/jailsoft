# Jailsoft Corrections Technology Platform

A complete, production-ready, clinical GovTech website for the domain **jailsoft.com**, designed to run statically out of the box and deploy on Vercel under zero configuration.

## Features

1. **Strict Monochrome "Black & White Bar" Theme:** Pure blacks (`#000000`), pure whites (`#FFFFFF`), and refined dark grays to mimic military defense contractor blueprints. Zero color accents.
2. **Desaturated Imagery:** Built-in `grayscale` and high-contrast CSS filters process stock photos automatically to keep styling integrity.
3. **Structured Bar Motifs:** Visual rhythm separators and vertical line markers represent clinical structure across all components.
4. **Acquisition Modal Overlay:** Pre-configured on the homepage to alert visitors of Jailsoft's corporate acquisition by **EVU.com** effective June 2026. Fully crawlable and crawl-optimized.
5. **Interactive Email Gate:** A custom anti-scrambler arithmetic gate on the `/contact` page protecting the contact email `info@jailsoft.com` from bots.
6. **40-Page SEO Compliant Sitemap:** 40 fully written, content-complete pages mapped under Next.js Metadata API and structured sitemap formats with unique titles and tags for all 19 products, 5 solutions, 6 resources, 2 legal agreements, and company pages.
7. **Production Ready:** Pre-configured for deployment to **Vercel** with immediate rendering support.

---

## File Architecture

- `/app`
  - `/layout.tsx` - Google Inter & Space Grotesk fonts loader, global headers/footers
  - `/page.tsx` - Homepage and Acquisition Modal
  - `/about/page.tsx` - Detailed anonymous corporate timeline
  - `/contact/page.tsx` - Simple arithmetic verification box and guide
  - `/products/[slug]/page.tsx` - Generates 19 rich product profiles (software, hardware, comms)
  - `/solutions/[slug]/page.tsx` - Generates 5 distinct facilities scopes
  - `/resources/[slug]/page.tsx` - Generates 6 case studies, whitepapers, FAQ, glossary indexes
  - `/legal/[slug]/page.tsx` - SEC & GovTech compliant terms of service and policies
  - `/security/page.tsx` - Air-gapped server models description
  - `/integrations/page.tsx` - Secure REST API databases layout
  - `/partners/page.tsx` - Approved contractors index
  - `/careers/page.tsx` - QA operations & Labs hiring boards
  - `/press/page.tsx` - Statement files archive
  - `sitemap.ts` - Automatic crawling mapping tracking all 40 URLs
  - `robots.ts` - Allow indices across search engines
- `/components`
  - `Nav.tsx` - Desktop mega dropdowns and mobile drawers
  - `Footer.tsx` - Standard index, legal blocks and "Website by Feelize" links
  - `EmailGate.tsx` - Self-healing math verification and click copy clipboard actions
  - `AcquisitionModal.tsx` - Backdrop blur, EVU redirect actions, and archived site browse commands
  - `BarDivider.tsx` - Microcode barcodes and structural margins rules
  - `PageHero.tsx` - High-end bento details and desaturated image brackets framework
- `/lib`
  - `content.ts` - All 40 pages of written industry-specific content (400–800+ words per item)
  - `utils.ts` - Custom cn Tailwind helper definitions

---

## Installation & Local Development

Run the web application locally with simple Node commands:

```bash
# Install dependencies
npm install

# Run the local development server on port 3000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your web browser to browse the archived site interfaces.

---

## Deploy to Vercel with Zero Config

Deploy the project immediately from your terminals:

```bash
# Log in and push standard parameters
npm install -g vercel
vercel

# Deploy to active production
vercel --prod
```

## Credits

Website by **Feelize** [https://feelize.com/start](https://feelize.com/start).
