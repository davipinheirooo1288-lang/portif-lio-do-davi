import { motion, AnimatePresence } from "framer-motion";
import { SiVercel, SiCloudflare } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const filteredProjects = projects;

  return (
    <section id="projetos" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Projetos</h2>
          <p className="text-white/50 text-lg max-w-md">Uma seleção de trabalhos recentes, focados em performance e excelência visual.</p>
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
                className="group relative flex flex-col rounded-2xl border overflow-hidden hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-primary/50"
                style={{ background: "hsl(221,44%,9%)", borderColor: "hsl(220,30%,18%)" }}
                data-testid={`project-card-${project.id}`}
              >
                <div className="relative h-56 overflow-hidden" style={{ background: project.gradient }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium text-white/80 bg-black/40 backdrop-blur-md rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400/60">
                      {project.platform === "Vercel" ? <SiVercel size={16} /> : <SiCloudflare size={16} />}
                    </div>
                  </div>

                  <p className="text-white/55 text-sm leading-relaxed mb-8 flex-1">
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
