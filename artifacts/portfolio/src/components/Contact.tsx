import { motion } from "framer-motion";
import { Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const links = [
    { name: "LinkedIn", url: "https://linkedin.com/in/davipinheiro", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/davipinheiro", icon: Github },
    { name: "WhatsApp", url: "https://wa.me/5500000000000", icon: MessageCircle },
  ];

  return (
    <section id="contato" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Vamos conversar.
          </h2>
          <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light">
            Disponível para oportunidades freelance e projetos de grande escala.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-4 text-2xl text-white/60 hover:text-white transition-colors duration-300"
                  data-testid={`link-contact-${link.name.toLowerCase()}`}
                >
                  <span className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} />
                  </span>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
