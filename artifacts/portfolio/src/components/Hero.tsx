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

      {/* Subtle cinematic overlay — lets video breathe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,8,20,0.38) 0%, rgba(4,8,20,0.22) 35%, rgba(4,8,20,0.55) 75%, rgba(4,8,20,0.97) 100%)",
        }}
      />
      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(4,8,20,0.55) 100%)",
        }}
      />

      {/* Content — centered on video */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center px-6 md:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(200,220,255,0.45)",
            }}
          >
            Desenvolvedor de Software &nbsp;·&nbsp; Brasil
          </span>
        </motion.div>

        {/* MY WORKSPACE — main headline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(4rem, 13vw, 11rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              background: "linear-gradient(175deg, #ffffff 10%, rgba(190,215,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 60px rgba(59,130,246,0.15))",
            }}
          >
            My Workspace
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            fontWeight: 300,
            color: "rgba(180,205,255,0.45)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
            maxWidth: "32rem",
            marginBottom: "3rem",
          }}
        >
          Interfaces precisas. Experiências excepcionais.
          <br />
          Onde a engenharia encontra o design.
        </motion.p>

        {/* Buttons — glass / integrated into video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          {/* Primary — frosted glass with blue tint */}
          <a
            href="#projetos"
            className="inline-flex items-center justify-center transition-all duration-400 hover:scale-[1.03]"
            style={{
              padding: "0.8rem 2rem",
              borderRadius: "999px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
              background: "rgba(59,130,246,0.18)",
              border: "1px solid rgba(100,160,255,0.35)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 2px 24px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(59,130,246,0.32)";
              el.style.borderColor = "rgba(120,180,255,0.55)";
              el.style.boxShadow = "0 4px 40px rgba(59,130,246,0.32), inset 0 1px 0 rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(59,130,246,0.18)";
              el.style.borderColor = "rgba(100,160,255,0.35)";
              el.style.boxShadow = "0 2px 24px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)";
            }}
            data-testid="button-view-projects"
          >
            Ver Projetos
          </a>

          {/* Secondary — pure glass, almost invisible */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center transition-all duration-400 hover:scale-[1.03]"
            style={{
              padding: "0.8rem 2rem",
              borderRadius: "999px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(255,255,255,0.75)";
              el.style.background = "rgba(255,255,255,0.09)";
              el.style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(255,255,255,0.45)";
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.borderColor = "rgba(255,255,255,0.12)";
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
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
