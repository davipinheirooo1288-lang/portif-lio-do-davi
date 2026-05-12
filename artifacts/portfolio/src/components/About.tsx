import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js",
    "Tailwind CSS", "Framer Motion", "Vite", "Express",
    "Cloudflare Workers", "TanStack Query", "Radix UI", "Gemini AI",
  ];

  return (
    <section id="sobre" className="py-32 px-6 md:px-12 border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">Sobre mim</h2>
            <div className="space-y-6 text-lg text-white/55 font-light leading-relaxed">
              <p>
                Sou um desenvolvedor de software focado em criar interfaces digitais que não apenas funcionam perfeitamente, mas parecem excepcionais. Acredito que o bom design é invisível, mas o excelente design é inesquecível.
              </p>
              <p>
                Minha abordagem combina precisão técnica com uma sensibilidade afiada para design. Cada projeto é uma oportunidade de equilibrar forma e função — garantindo que o código limpo se traduza em uma experiência de usuário impecável.
              </p>
              <p>
                Com base no Brasil, trabalho com clientes e equipes ao redor do mundo, construindo produtos digitais robustos e escaláveis, hospedados em Vercel e Cloudflare.
              </p>
            </div>
          </div>

          <div className="lg:mt-20">
            <h3 className="text-xl font-medium text-white mb-6">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-lg text-sm text-white/75 hover:text-white transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.2)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
