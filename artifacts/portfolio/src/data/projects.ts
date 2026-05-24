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
    id: "dracarladower",
    title: "Dra. Carla Dower",
    description:
      "Landing page para advocacia internacional em Portugal, com defesa penal para imigrantes, áreas de atuação, depoimentos, localização e atendimento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://dracarladower.vercel.app",
    gradient: "linear-gradient(135deg, #17110d 0%, #4b3428 48%, #f3eee8 100%)",
    image: "/projects/dracarladower.jpg",
  },
  {
    id: "odontomelo",
    title: "Odonto Melo",
    description:
      "Landing page para clínica odontológica premium em Itapipoca-CE, com doutores, serviços, avaliações, localização e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["React", "TypeScript", "Vite", "Tailwind"],
    liveUrl: "https://odontomelo.vercel.app",
    gradient: "linear-gradient(135deg, #fdfcf8 0%, #e8dcc6 48%, #6b4f35 100%)",
    image: "/projects/odontomelo.jpg",
  },
  {
    id: "cmo-ita",
    title: "CMO Itapipoca",
    description:
      "Landing page para centro médico e odontológico em Itapipoca-CE, com especialidades, equipe, avaliações, localização e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://cmo-ita.vercel.app",
    gradient: "linear-gradient(135deg, #061d2e 0%, #0f5b78 50%, #8cc8d8 100%)",
    image: "/projects/cmo-ita.jpg",
  },
  {
    id: "beleza-canina",
    title: "Beleza Canina",
    description:
      "Landing page para pet shop e consultório veterinário em Itapipoca-CE, com banho e tosa, vacinas, exames, produtos, localização e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://beleza-canina.vercel.app",
    gradient: "linear-gradient(135deg, #080807 0%, #28251d 52%, #f7c600 100%)",
    image: "/projects/beleza-canina.jpg",
  },
  {
    id: "clinica-costa-campos",
    title: "Clínica Costa Campos",
    description:
      "Landing page para clínica médica em Itapipoca-CE, com especialidades, equipe, avaliações, localização e agendamento inteligente via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://clinica-costa-campos.vercel.app",
    gradient: "linear-gradient(135deg, #08231d 0%, #16614f 48%, #d1b46f 100%)",
    image: "/projects/clinica-costa-campos.jpg",
  },
  {
    id: "petsus",
    title: "PetSUS",
    description:
      "Landing page para clínica veterinária popular 24h em Fortaleza-CE, com serviços, produtos, avaliações, mapa e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://petsus.vercel.app",
    gradient: "linear-gradient(135deg, #061426 0%, #075fea 52%, #c7a13b 100%)",
    image: "/projects/petsus.jpg",
  },
  {
    id: "casa-hospitalvet",
    title: "CASA Hospital Vet",
    description:
      "Landing page para hospital veterinário 24h em Fortaleza-CE, com urgência, exames, especialidades, depoimentos, localização e atendimento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://casa-hospitalvet-site.vercel.app",
    gradient: "linear-gradient(135deg, #061315 0%, #0d3b42 48%, #63c8b4 100%)",
    image: "/projects/casa-hospitalvet.jpg",
  },
  {
    id: "clinica-vitae",
    title: "Clínica Vitae",
    description:
      "Landing page premium para clínica odontológica em Fortaleza-CE, com serviços, depoimentos, localização, horários e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://clinica-vitae.vercel.app",
    gradient: "linear-gradient(135deg, #07120f 0%, #123c35 48%, #c4a46a 100%)",
    image: "/projects/clinica-vitae.jpg",
  },
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
  {
    id: "clinica-odontologica-ferreira-seraf",
    title: "Consultório Ferreira Serafim",
    description:
      "Landing page para consultório odontológico em Sobral-CE: especialidades, depoimentos, reputação no Google, localização no São Lucas Medical Center e agendamento via WhatsApp.",
    category: "Landing Page",
    platform: "Vercel",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://clinica-odontologica-ferreira-seraf.vercel.app",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #132038 45%, #0c1628 100%)",
    image: "/projects/clinica-ferreira-serafim.svg",
  },
];
