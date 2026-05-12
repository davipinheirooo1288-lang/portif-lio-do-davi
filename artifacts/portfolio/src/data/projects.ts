export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Landing Page" | "E-commerce" | "Web App";
  platform: "Vercel" | "Cloudflare";
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
  gradient: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "divina-barbearia",
    title: "Divina Barbearia",
    description:
      "Site completo para barbearia premium com agendamento, portfólio de cortes e experiência de marca sofisticada.",
    category: "Landing Page",
    platform: "Cloudflare",
    technologies: ["React", "TypeScript", "TanStack", "Tailwind", "Framer Motion", "Radix UI"],
    liveUrl: "https://divina-barbearia.davipinheirooo1288.workers.dev",
    repoUrl: "https://github.com/davipinheirooo1288-lang/divina-barbearia",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #2d1600 100%)",
    image: "/projects/divina-barbearia.png",
  },
  {
    id: "clinic-vet",
    title: "Clinic-Vet IA",
    description:
      "Plataforma veterinária com inteligência artificial integrada via Gemini AI, backend Express e interface moderna.",
    category: "Web App",
    platform: "Vercel",
    technologies: ["React", "TypeScript", "Gemini AI", "Express", "Tailwind", "Framer Motion"],
    liveUrl: "https://clinic-vet.vercel.app",
    repoUrl: "https://github.com/davipinheirooo1288-lang/Clinic-vet",
    gradient: "radial-gradient(ellipse at top left, #0a1628 0%, #050505 60%, #0d1f0d 100%)",
    image: "/projects/clinic-vet.png",
  },
  {
    id: "cinvet",
    title: "Cinvet",
    description:
      "Sistema de gestão para clínica veterinária com interface limpa e focada na experiência do usuário.",
    category: "Web App",
    platform: "Vercel",
    technologies: ["TypeScript", "React", "Tailwind"],
    liveUrl: "https://cinvet.vercel.app",
    repoUrl: "https://github.com/davipinheirooo1288-lang/cinvet",
    gradient: "linear-gradient(160deg, #050505 0%, #0f1a2e 50%, #050e05 100%)",
    image: "/projects/cinvet.png",
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic",
    description:
      "Site institucional para clínica odontológica com design clean, apresentação de serviços e call-to-action eficaz.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["TypeScript", "Tailwind", "Vite"],
    liveUrl: "https://dentalclinic-ita.vercel.app",
    gradient: "linear-gradient(135deg, #050505 0%, #0a1628 50%, #001428 100%)",
    image: "/projects/dental-clinic.png",
  },
  {
    id: "oral-vitta",
    title: "Oral Vitta",
    description:
      "Landing page para clínica odontológica com apresentação de especialidades, equipe e formulário de contato.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://oralvitta.vercel.app",
    repoUrl: "https://github.com/davipinheirooo1288-lang/oral-vitta-site",
    gradient: "linear-gradient(to bottom right, #050505, #0f1520, #050d1a)",
    image: "/projects/oral-vitta.png",
  },
  {
    id: "oss-barbeiros",
    title: "Oss Barbeiros",
    description:
      "Site de landing page para barbearia urbana com galeria de trabalhos, localização e reserva de horários.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://oss-barbeiros.vercel.app",
    repoUrl: "https://github.com/davipinheirooo1288-lang/Oss-Barbeiros",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a0a 50%, #0d0800 100%)",
    image: "/projects/oss-barbeiros.png",
  },
];
