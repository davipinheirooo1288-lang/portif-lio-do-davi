import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Multi-layer overlay for premium depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,8,20,0.55) 0%, rgba(4,8,20,0.4) 40%, rgba(4,8,20,0.7) 80%, rgba(4,8,20,0.95) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(4,8,20,0.5) 100%)" }} />

      {/* Subtle blue vignette at top-right */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center px-6 md:px-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block mb-8 px-5 py-1.5 rounded-full text-xs font-semibold tracking-[0.25em] uppercase"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(10px)",
            }}
          >
            Desenvolvedor de Software · Brasil
          </span>
        </motion.div>

        {/* MY WORKSPACE headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1
            className="font-bold tracking-tighter leading-none"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 2px 40px rgba(59,130,246,0.18))",
            }}
          >
            My Workspace
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
          style={{ color: "rgba(200,215,255,0.55)" }}
        >
          Interfaces precisas. Experiências excepcionais. Onde a engenharia encontra o design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              boxShadow: "0 0 32px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            data-testid="button-view-projects"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
            style={{
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.05)",
            }}
            data-testid="button-contact"
          >
            Contato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <div className="w-[1px] h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }} />
      </motion.div>
    </section>
  );
}
