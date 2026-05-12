import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const links = [
    { name: "WhatsApp", url: "https://wa.me/5585992764792", icon: MessageCircle },
    { name: "Instagram", url: "https://www.instagram.com/davipinheirou/", icon: Instagram },
  ];

  return (
    <section id="contato" className="py-32 px-6 md:px-12 border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(147,197,253,0.5)" }}>
            Vamos trabalhar juntos
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Vamos conversar.
          </h2>
          <p className="text-xl text-white/45 mb-16 max-w-2xl mx-auto font-light">
            Disponível para oportunidades freelance e projetos de grande escala.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
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
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-4 text-2xl text-white/55 hover:text-white transition-colors duration-300"
                  data-testid={`link-contact-${link.name.toLowerCase()}`}
                >
                  <span
                    className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.25)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.6)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.25)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Icon size={22} className="text-blue-400" />
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
