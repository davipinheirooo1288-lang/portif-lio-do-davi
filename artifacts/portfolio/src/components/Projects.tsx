import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiVercel, SiCloudflare } from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

type Category = "Landing Page" | "E-commerce" | "Web App" | "Todos";

export default function Projects() {
  const [filter, setFilter] = useState<Category>("Todos");

  const categories: Category[] = ["Todos", "Landing Pages" as Category, "E-commerce", "Web Apps" as Category];

  const filteredProjects = projects.filter((project) => {
    if (filter === "Todos") return true;
    if (filter === "Landing Pages") return project.category === "Landing Page";
    if (filter === "Web Apps") return project.category === "Web App";
    return project.category === filter;
  });

  return (
    <section id="projetos" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Projetos</h2>
            <p className="text-white/50 text-lg max-w-md">Uma seleção de trabalhos recentes, focados em performance e excelência visual.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="group relative flex flex-col bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/50"
                data-testid={`project-card-${project.id}`}
              >
                <div 
                  className="w-full h-56 relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {/* Subtle overlay on the gradient for texture */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-md rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/40">
                      {project.platform === "Vercel" ? <SiVercel size={16} /> : <SiCloudflare size={16} />}
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                      data-testid={`link-live-${project.id}`}
                    >
                      <ExternalLink size={14} /> Live Site
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                        data-testid={`link-repo-${project.id}`}
                      >
                        <Github size={14} /> Código
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
