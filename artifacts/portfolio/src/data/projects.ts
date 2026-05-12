export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Landing Page" | "E-commerce" | "Web App";
  platform: "Vercel" | "Cloudflare";
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
  gradient: string; // CSS gradient string for the preview image area
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Aura Architecture",
    description: "A minimalist studio portfolio with dynamic 3D WebGL reveals and buttery smooth transitions.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
  },
  {
    id: "p2",
    title: "Nova Commerce",
    description: "High-performance headless e-commerce storefront handling 10k+ concurrent users.",
    category: "E-commerce",
    platform: "Cloudflare",
    technologies: ["Next.js", "Shopify", "Stripe", "Radix UI"],
    liveUrl: "#",
    gradient: "linear-gradient(to right, #000000, #171717)",
  },
  {
    id: "p3",
    title: "Nexus Dashboard",
    description: "Real-time analytics dashboard with WebSockets and complex data visualizations.",
    category: "Web App",
    platform: "Vercel",
    technologies: ["React", "TypeScript", "Recharts", "Socket.io"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "radial-gradient(circle at top right, #1e3a8a, #020617)",
  },
  {
    id: "p4",
    title: "Echo Landing",
    description: "Conversion-optimized landing page for a B2B SaaS platform with interactive product demos.",
    category: "Landing Page",
    platform: "Cloudflare",
    technologies: ["Vite", "React", "GSAP", "Tailwind"],
    liveUrl: "#",
    gradient: "linear-gradient(180deg, #050505 0%, #0f172a 100%)",
  },
  {
    id: "p5",
    title: "Onyx Tracker",
    description: "Personal finance and investment tracking application with bank integrations.",
    category: "Web App",
    platform: "Vercel",
    technologies: ["React", "Zustand", "Tailwind", "Plaid API"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(to bottom right, #020617, #0f172a, #172554)",
  }
];
