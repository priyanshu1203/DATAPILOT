# DataPilot — Premium SaaS Landing Page

**Tagline:** Turn your data into decisions.

DataPilot is an AI-powered analytics platform built for startup founders, product managers, marketing teams, and business analysts. It connects business data sources, identifies important trends, and transforms complex analytics into clear, actionable insights.

This repository was built for the **Acdyon Technologies Frontend Challenge — Part 2: The Premium Home Page**.

---

## ✨ Key Features

- **Hero Section**: Strong value proposition with primary CTA ("Start Free"), secondary CTA ("See how it works"), and supporting trust tag ("No credit card required").
- **Interactive Dashboard Mockup**: Polished executive analytics preview featuring real-time sample KPIs ($84,240 Revenue, 4.82% Conversion Rate, 12,480 Active Users, +18.4% Growth), SVG trend trajectory chart, traffic source distribution, and AI insights.
- **Product Showcase**: Interactive tabbed workspace deep dive (Analytics Overview, AI Anomaly Feed, Automated Reports, Data Sources) with real-time table searching and status indicators.
- **AI Insights Component**: Visual card with confidence score and interactive detail analysis modal.
- **Capabilities Cards**: 4 feature cards with custom micro-animations and Lucide icons.
- **3-Step Workflow**: Visual sequence ("Connect your data" → "Understand what changed" → "Take action").
- **Honest Positioning**: Authentic product commitment statement without fabricated logos or false metrics.
- **Complete Dark Mode**: Seamless theme toggle with local storage persistence and system preference detection.
- **Responsive Architecture**: Pixel-perfect layout at 390px mobile, 768px tablet, 1024px laptop, and 1440px desktop with **zero horizontal page scroll**.
- **Easter Egg**: Secret Konami Code listener (`↑ ↑ ↓ ↓ ← → ← → B A`) with celebratory confetti feedback.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/datapilot.git
   cd datapilot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Vercel Deployment

1. Push your code to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Click **Deploy**. Vercel will build and deploy the site automatically.
