export default function Marquee() {
  const items = [
    "React", "✦", "TypeScript", "✦", "Tailwind CSS", "✦", "Node.js", "✦",
    "Framer Motion", "✦", "Vite", "✦", "Vercel", "✦", "Cloudflare", "✦",
    "Next.js", "✦", "Express", "✦", "Gemini AI", "✦", "Radix UI", "✦",
    "React", "✦", "TypeScript", "✦", "Tailwind CSS", "✦", "Node.js", "✦",
    "Framer Motion", "✦", "Vite", "✦", "Vercel", "✦", "Cloudflare", "✦",
  ];

  return (
    <div className="relative py-10 overflow-hidden">
      <div
        className="relative"
        style={{
          width: "110vw",
          left: "-5vw",
          transform: "rotate(-3deg)",
        }}
      >
        <div
          className="overflow-hidden border-y py-3"
          style={{
            background: "linear-gradient(90deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.08) 100%)",
            borderColor: "rgba(59,130,246,0.25)",
          }}
        >
          <div className="flex whitespace-nowrap marquee-track">
            {[...items, ...items].map((item, i) => (
              <span
                key={i}
                className={
                  item === "✦"
                    ? "mx-5 text-primary text-sm"
                    : "mx-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/70"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
