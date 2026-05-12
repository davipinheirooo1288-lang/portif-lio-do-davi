import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", 
    "Tailwind CSS", "Framer Motion", "PostgreSQL", "GraphQL"
  ];

  return (
    <section id="sobre" className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
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
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                Sou um desenvolvedor de software focado em criar interfaces digitais que não apenas funcionam perfeitamente, mas parecem excepcionais. Acredito que o bom design é invisível, mas o excelente design é inesquecível.
              </p>
              <p>
                Minha abordagem combina precisão técnica com uma sensibilidade afiada para design. Cada projeto é uma oportunidade de equilibrar forma e função, garantindo que o código limpo se traduza em uma experiência de usuário impecável.
              </p>
              <p>
                Com base no Brasil, trabalho colaborando com clientes e equipes ao redor do mundo para construir produtos digitais robustos e escaláveis.
              </p>
            </div>
          </div>
          
          <div className="lg:mt-24">
            <h3 className="text-xl font-medium text-white mb-6">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:bg-white/10 hover:border-primary/50 transition-colors"
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
