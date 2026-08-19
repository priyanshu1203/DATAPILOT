# DECISIONS.md — Engineering & Design Rationale

This document outlines key product, technical, and architectural decisions made during the development of **DataPilot** for the Acdyon Technologies Frontend Challenge (Part 2).

---

### 1. Why this approach?

For **DataPilot**, the primary goal was to create a B2B SaaS home page that invokes a "Wow, I want an account" response within 3 seconds, while strictly adhering to honest, zero-fluff presentation guidelines.

**UI/UX & Product Design Approach:**
- **Product-First Visuals:** Instead of abstract illustrations, isometric mockups, or generic stock landing templates, the hero immediately embeds an interactive, highly realistic analytics dashboard mockup (`HeroVisual`). This proves product value instantly.
- **Honest Positioning over Fake Social Proof:** Many AI landing pages use fake logos ("Trusted by Google & Meta") and fabricated user statistics ("Join 50,000+ happy teams"). I explicitly chose an authentic "Built for teams that want clarity, not more dashboards" approach. Demo data is clearly labeled as sample data.
- **Restrained Motion System:** Framer Motion is utilized for purposeful staggered entrance sequences and tab transitions, avoiding excessive glowing blobs or distracting parallax that degrades usability.

**Technical Stack Selection:**
- **Vite + React 19 + TypeScript:** Chosen over SSR frameworks (like Next.js) because a marketing landing page with interactive client-side dashboard mockups benefits from lightning-fast client hydration, zero bundle overhead, and straightforward deployment to Vercel/Netlify.
- **Tailwind CSS v4 + Design Tokens:** Provides tight control over visual hierarchy, color scales, grid background patterns, glassmorphism layers, and responsive layout boundaries without heavy runtime CSS libraries.

---

### 2. Time-limit trade-off

**Trade-Off Made:**
Given the tight timeframe of the challenge, I prioritized a **hyper-polished frontend presentation and rich interactive visualizations** (SVG trend charts, live search/filtering in sample tables, AI modal analysis, responsive drawer navigation, dark mode persistence, and Konami code Easter egg) over building **real backend database persistence and OAuth authentication**.

**What I Would Build with a Full Week:**
1. **Live Backend Integration:** Build a Node.js/FastAPI backend with PostgreSQL + Prisma to support actual Stripe Webhook syncing and OAuth 2.0 connection flows for Google Analytics & Mixpanel.
2. **Interactive Charting Library:** Integrate Recharts or Visx for customizable chart zoom levels, multi-period overlays, and custom CSV export generation.
3. **End-to-End Test Suite:** Add Playwright visual regression tests covering 390px mobile, 768px tablet, and 1440px desktop viewports to prevent layout regression across browser updates.

---

### 3. AI Usage Disclosure

AI assistance was leveraged as an agentic pair programmer during the development process:
- **Scaffolding & Boilerplate Generation:** AI assisted in generating initial component skeletons, TypeScript interface structures (`src/types/index.ts`), and mock dataset fixtures (`src/data/mockData.ts`).
- **Interactive SVG Chart Math:** AI assisted in formulating the smooth coordinate mapping for the SVG trend line and gradient area polygon calculations in `HeroVisual.tsx`.
- **Human Verification & Engineering Oversight:** Every line of code, Tailwind layout class, accessibility attribute (`aria-labels`, semantic elements), and responsive rule (390px vs 1440px viewport constraints) was rigorously tested, refined, verified via browser subagent inspection, and checked against zero-console-error build standards.
