import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            paddingTop: "clamp(1.25rem, 3vw, 2rem)",
            paddingBottom: "clamp(1rem, 2vw, 1.5rem)",
            paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
            paddingRight: "clamp(1.5rem, 5vw, 3rem)",
            background: scrolled
              ? "linear-gradient(to bottom, rgba(4,8,20,0.82) 0%, transparent 100%)"
              : "linear-gradient(to bottom, rgba(4,8,20,0.45) 0%, transparent 100%)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            transition: "background 0.5s ease, backdrop-filter 0.5s ease",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand name — Cormorant Garamond, elegant serif */}
            <a
              href="#"
              className="group flex flex-col leading-none"
              data-testid="link-home"
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1,
                  transition: "color 0.3s",
                }}
                className="group-hover:text-white"
              >
                Davi Pinheiro
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  color: "rgba(147,197,253,0.45)",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                Software Developer
              </span>
            </a>

            {/* Nav links — minimal, floating, no background */}
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative text-sm tracking-wide group"
                    style={{
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.55)",
                      transition: "color 0.25s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.95)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                    }}
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                    {/* Underline accent on hover */}
                    <span
                      className="absolute left-0 -bottom-0.5 w-0 h-px group-hover:w-full transition-all duration-300"
                      style={{ background: "rgba(147,197,253,0.5)" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
