# PROMPT — Build the BIP Consulting Website

> Copy everything below into your Replit Agent chat. This is a complete build brief for a professional, international, animated corporate website.

---

## 1. PROJECT SUMMARY

Build a **premium, international, professional website** for **BIP Consulting**, an international consulting and technology firm helping governments, businesses, development organizations, investors, and startups accelerate digital transformation across **Europe and Africa**.

Current legal/commercial positioning to display: **"BIP Consulting – Advisory & Professional Services."** The architecture must be built so it can scale later into a larger digital platform (see Section 8 — Future Modules), so structure the code in a modular, extensible way even though those modules are NOT built yet.

**Tagline:** "Building the Future Through Innovation, Technology & Talent"

**Company info (use exactly, in the footer, contact page, and structured data/SEO metadata):**
- Company name: BIP Consulting
- Address: Glimmervägen 2, 193 41 Sigtuna, Sweden
- Email: info@bipconsulting.se
- Domain (already purchased, live on one.com DNS): www.bipconsulting.se
- Region served: Europe & Africa

---

## 2. TECH STACK (use this unless a strong reason not to)

- **Framework:** Next.js 14+ (App Router) with React + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion for UI/scroll animations + GSAP (with ScrollTrigger) for any complex scroll-driven sequences
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation; contact form submits via a serverless API route emailing to info@bipconsulting.se (use Resend or Nodemailer — stub the API key as an environment variable)
- **Deployment target:** Must run cleanly on Replit and be exportable/deployable to a standard Node hosting environment, with the custom domain www.bipconsulting.se connectable via DNS
- **SEO:** next-seo or built-in Next.js metadata API, sitemap.xml, robots.txt, Open Graph tags, Organization schema.org JSON-LD
- **Accessibility:** WCAG AA compliant — proper contrast, alt text, keyboard navigation, focus states
- **Performance target:** Lighthouse scores 90+ on Performance, Accessibility, Best Practices, SEO. Lazy-load images, use next/image, code-split heavy animation libraries.
- **Responsive:** Mobile-first, fully responsive from 320px to 4K.

---

## 3. DESIGN DIRECTION

BIP Consulting bridges Europe and Africa through innovation, so the visual identity should feel **global, modern, credible, and forward-looking** — not generic corporate/stock-photo-heavy.

- **Color palette:** A confident primary (deep navy or indigo blue conveys trust/institutional credibility) + one energetic accent color (amber/gold or teal — suggests growth, energy, Africa-Europe connection) + neutral grays/off-white backgrounds. Support a dark-mode hero section and light-mode content sections for visual rhythm.
- **Typography:** A modern, geometric sans-serif for headings (e.g., a Space Grotesk / General Sans / Inter Tight style) paired with a highly readable sans (Inter) for body text.
- **Visual motifs:** Subtle world-map / network-node graphics (representing global connectivity), abstract gradient blobs, thin-line iconography — avoid clip-art or generic stock photography; prefer custom illustration-style graphics, abstract shapes, or high-quality diverse professional photography.
- **Motion personality:** Smooth, confident, not flashy. Purposeful motion that reveals content and guides attention — not decoration for its own sake.

> **Assumption made:** primary site language is **English** (matches the content supplied and the international/investor audience). If you also want French and/or Swedish versions, tell your agent to add `next-intl` i18n routing (`/en`, `/fr`, `/sv`) reusing the same content structure.

---

## 4. ANIMATION / MOTION SPEC

Implement these specific interactions:

1. **Hero section:** staggered fade+slide-up entrance for headline, subheadline, and CTA buttons on load; subtle animated gradient or slowly drifting abstract shapes/particles in the background (performant, CSS/canvas-based, not heavy WebGL).
2. **Scroll reveals:** every major section (Who We Are, Why Choose BIP, Services, Industries, Approach, Why BIP, Insights, Careers, Partners, Contact) fades/slides into view on scroll using Framer Motion `whileInView`.
3. **Stat counters:** if metrics are shown (e.g., "X countries," "Y clients," "Z projects" — use placeholder numbers the client can edit), animate count-up when scrolled into view.
4. **Card hover micro-interactions:** service cards, industry cards, and value cards should lift slightly (translateY + shadow) and reveal an accent underline or icon color change on hover.
5. **Sticky/animated navbar:** navbar transitions from transparent-over-hero to solid background with shadow on scroll; smooth mobile menu slide-in.
6. **Page transitions:** subtle fade/slide transition between route changes.
7. **Partner/client logo strip:** infinite auto-scrolling marquee (pause on hover) if logos are available; otherwise placeholder logo tiles.
8. **"Our Approach" (Discover → Design → Deliver → Measure):** animate as a connected horizontal (desktop) / vertical (mobile) process timeline with sequential reveal as the user scrolls.

Keep animations under ~400ms for micro-interactions and respect `prefers-reduced-motion` (disable/simplify animations for users who have that setting on).

---

## 5. SITE ARCHITECTURE (pages & sections)

Build these pages/routes with the exact content structure below (rewrite/polish copy for a premium tone, keep the meaning intact):

### `/` — Home
- **Hero:** Headline "Building the Future Through Innovation, Technology & Talent" + subheadline about BIP Consulting's mission across Europe and Africa + two CTAs: **"Start Your Project"** and **"Book a Consultation"**
- **Who We Are:** heading "Your Strategic Partner for Innovation and Growth" + supporting paragraphs
- **Why Choose BIP:** 6 feature cards — Strategy, Technology, Talent, Innovation, Global Partnerships, Sustainable Impact
- **Services preview:** short teaser grid linking to `/services`
- **Our Approach:** Discover / Design / Deliver / Measure process
- **Why BIP:** International Expertise, Innovation Driven, Client Focused, Long-Term Partnerships
- **Insights preview:** 2–3 latest article cards linking to `/insights`
- **Partners strip:** logo marquee
- **Final CTA banner:** "Ready to Build the Future?" → links to `/contact`

### `/about` — About Us
- Who We Are (company description)
- Vision statement
- Mission statement
- Core Values (8 values as icon+label grid: Excellence, Integrity, Innovation, Collaboration, Impact, Sustainability, Inclusion, Accountability)

### `/services` — Services
Full listing with expandable/tabbed sections for each of the 7 service lines (each with its description + bullet list of sub-services):
1. Strategy & Management Consulting
2. Artificial Intelligence
3. Digital Transformation
4. Software & Technology
5. Talent Solutions
6. Entrepreneurship & Innovation
7. International Development

### `/industries` — Industries
Grid of 13 industry cards: Government, Education, Healthcare, Banking, Telecommunications, Energy, Agriculture, Manufacturing, NGOs, Development Partners, Financial Services, Technology, Startups

### `/solutions`
Cross-link page connecting Services × Industries — can present as a simple "solutions we build" showcase (placeholder case-study style cards; client will fill in real case studies later)

### `/insights`
Blog/article listing grid with category filter tags: Digital Transformation, Artificial Intelligence, Government Innovation, Leadership, Technology Trends, Investment, Entrepreneurship, Research Reports. Build as a CMS-ready structure (MDX or a simple JSON/markdown-driven collection) so articles can be added easily later.

### `/careers`
- Intro: "Join a team shaping the future of innovation."
- Current Opportunities grid: Consultants, Software Engineers, AI Specialists, Project Managers, Researchers, Business Developers, Trainers, Graduate Programme
- Simple application CTA (mailto or form)

### `/partners`
"We collaborate with" — grid of partner categories: Governments, International Organizations, Universities, Private Sector, Development Partners, Innovation Hubs, Investors, Technology Companies

### `/contact`
- Heading: "Ready to Build the Future?"
- Intro paragraph (governments, companies, development orgs, investors, startups)
- Contact form (Name, Email, Organization, Message, Subject/Interest dropdown)
- Direct contact details: info@bipconsulting.se, address (Glimmervägen 2, 193 41 Sigtuna, Sweden)
- Optional: embedded map (Sigtuna, Sweden) and a "Book a Consultation" calendar link placeholder (e.g., Calendly embed placeholder)

### Global footer (all pages)
- Logo + tagline: "Building Innovation. Creating Opportunity. Transforming Economies."
- Quick links to all main pages
- Contact: info@bipconsulting.se, address, phone placeholder
- Social icons (LinkedIn primary, placeholders for others)
- Copyright line

---

## 6. NAVIGATION

Top navbar: Home, About Us, Services (dropdown w/ 7 lines), Industries, Solutions, Insights, Careers, Partners, Contact — with "Book a Consultation" as a highlighted button on the right. Mobile: slide-in hamburger menu with accordion for Services dropdown.

---

## 7. SEO & INTERNATIONAL READINESS

- Unique `<title>` and meta description per page
- Open Graph + Twitter card meta with a shared social preview image
- `Organization` JSON-LD schema with name, address, email, url
- `sitemap.xml` and `robots.txt`
- Semantic HTML (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`)
- Prepare (but don't fully build unless requested) i18n routing structure so French/Swedish translations can be dropped in later without re-architecting

---

## 8. FUTURE MODULES (build the code to be extensible toward these — do NOT build them now)

Structure the project (routing, auth placeholders, database schema stubs) so these can be added later without a rewrite:
Client Portal, AI Assistant, Online Learning Academy, Job Board, Startup Hub, Investor Portal, Knowledge Center, Events Platform, Research Library, Grant & Tender Opportunities, Partner Dashboard.

Concretely: use a folder structure like `/app/(marketing)/...` for today's public site vs. a reserved `/app/(platform)/...` route group for future authenticated modules, and keep content data-driven (JSON/MDX) rather than hardcoded, so it can later be swapped for a real CMS/database.

---

## 9. DELIVERABLE CHECKLIST

- [ ] Fully responsive, animated, production-ready Next.js site matching the structure above
- [ ] All copy proofread and rewritten in a polished, professional international-consulting tone
- [ ] Working contact form that emails info@bipconsulting.se
- [ ] SEO metadata, sitemap, robots.txt, JSON-LD in place
- [ ] Lighthouse 90+ across the board
- [ ] Clean component structure with comments, ready to hand off to a developer
- [ ] README explaining folder structure, how to add a new Insights article, and how to connect the www.bipconsulting.se domain

---

**Build this now, section by section, starting with the design system (colors, typography, base components) and the Home page, then the remaining pages.**
