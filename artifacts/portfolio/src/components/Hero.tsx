import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Layered background glows for depth */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd" }}
          >
            Disponível para novos projetos
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-white leading-[1.05]">
            Desenvolvedor
            <br />
            <span style={{ color: "rgba(147,197,253,0.35)" }}>de Software.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
            Construindo interfaces precisas e experiências digitais excepcionais. Onde a engenharia encontra o design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex items-center gap-4"
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)", boxShadow: "0 0 24px rgba(59,130,246,0.35)" }}
            data-testid="button-view-projects"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white/70 hover:text-white rounded-full transition-all duration-300"
            style={{ border: "1px solid rgba(59,130,246,0.25)" }}
            data-testid="button-contact"
          >
            Contato
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(147,197,253,0.3)" }}>Scroll</span>
        <div className="w-[1px] h-12" style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.4), transparent)" }} />
      </motion.div>
    </section>
  );
}
