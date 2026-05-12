interface CardIllustrationProps {
  projectId: string;
}

function BarberShopIllustration({ ghost }: { ghost?: string }) {
  return (
    <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0c0800 0%, #1a1000 60%, #0f0900 100%)" }}>
      {ghost && (
        <span className="absolute inset-0 flex items-center justify-center text-[7rem] font-black tracking-tighter select-none pointer-events-none" style={{ color: "rgba(251,191,36,0.06)", lineHeight: 1 }}>
          {ghost}
        </span>
      )}
      <div className="absolute top-3 right-3 w-16 h-16 opacity-20" style={{ background: "repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 2px, transparent 2px, transparent 8px)", borderRadius: "2px" }} />
      <div className="absolute bottom-3 left-3 w-12 h-12 opacity-20" style={{ background: "repeating-linear-gradient(-45deg, #f59e0b 0px, #f59e0b 2px, transparent 2px, transparent 8px)", borderRadius: "2px" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="16" r="7" stroke="#f59e0b" strokeWidth="2.5" fill="none" opacity="0.9"/>
          <circle cx="52" cy="16" r="7" stroke="#f59e0b" strokeWidth="2.5" fill="none" opacity="0.9"/>
          <circle cx="20" cy="56" r="7" stroke="#f59e0b" strokeWidth="2.5" fill="none" opacity="0.9"/>
          <circle cx="52" cy="56" r="7" stroke="#f59e0b" strokeWidth="2.5" fill="none" opacity="0.9"/>
          <line x1="24" y1="20" x2="48" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
          <line x1="48" y1="20" x2="24" y2="52" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
          <line x1="20" y1="24" x2="20" y2="48" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          <line x1="52" y1="24" x2="52" y2="48" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0800]/90 via-transparent to-transparent" />
    </div>
  );
}

function VetAIIllustration() {
  return (
    <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071220 0%, #0a1f2e 60%, #061018 100%)" }}>
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 300 224" fill="none" preserveAspectRatio="xMidYMid slice">
        <line x1="30" y1="0" x2="30" y2="224" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="90" y1="0" x2="90" y2="224" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="150" y1="0" x2="150" y2="224" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="210" y1="0" x2="210" y2="224" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="270" y1="0" x2="270" y2="224" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="0" y1="40" x2="300" y2="40" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="0" y1="112" x2="300" y2="112" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="0" y1="184" x2="300" y2="184" stroke="#3b82f6" strokeWidth="0.8"/>
        <rect x="27" y="37" width="6" height="6" fill="#3b82f6" opacity="0.6" rx="1"/>
        <rect x="87" y="109" width="6" height="6" fill="#3b82f6" opacity="0.6" rx="1"/>
        <rect x="207" y="37" width="6" height="6" fill="#3b82f6" opacity="0.6" rx="1"/>
        <rect x="147" y="181" width="6" height="6" fill="#3b82f6" opacity="0.6" rx="1"/>
        <rect x="267" y="109" width="6" height="6" fill="#3b82f6" opacity="0.6" rx="1"/>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <ellipse cx="24" cy="20" rx="8" ry="10" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="48" cy="20" rx="8" ry="10" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="14" cy="34" rx="7" ry="9" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="58" cy="34" rx="7" ry="9" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="36" cy="46" rx="14" ry="16" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.1)" opacity="0.9"/>
          <text x="36" y="52" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b82f6" opacity="0.7" fontFamily="monospace">AI</text>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#071220]/90 via-transparent to-transparent" />
    </div>
  );
}

function VetSystemIllustration() {
  return (
    <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #070f20 0%, #0d1a38 60%, #050d1a 100%)" }}>
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 224" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 32} x2="300" y2={i * 32} stroke="#60a5fa" strokeWidth="0.6" strokeDasharray="4 8"/>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 33} y1="0" x2={i * 33} y2="224" stroke="#60a5fa" strokeWidth="0.6" strokeDasharray="4 8"/>
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <ellipse cx="24" cy="20" rx="8" ry="10" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="48" cy="20" rx="8" ry="10" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="14" cy="34" rx="7" ry="9" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="58" cy="34" rx="7" ry="9" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.9"/>
          <ellipse cx="36" cy="46" rx="14" ry="16" stroke="#60a5fa" strokeWidth="2" fill="rgba(96,165,250,0.08)" opacity="0.9"/>
          <path d="M36 38 L40 46 L36 50 L32 46 Z" fill="#60a5fa" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#070f20]/90 via-transparent to-transparent" />
    </div>
  );
}

function DentalIllustration() {
  return (
    <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #060d1f 0%, #0a1635 60%, #060e22 100%)" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="absolute left-0 right-0" style={{ top: `${20 + i * 28}px`, height: "1px", background: "rgba(96,165,250,0.08)" }} />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="68" height="80" viewBox="0 0 68 80" fill="none">
          <path d="M34 4 C20 4 8 14 8 26 C8 34 10 40 12 50 C14 60 18 76 22 76 C26 76 28 64 34 64 C40 64 42 76 46 76 C50 76 54 60 56 50 C58 40 60 34 60 26 C60 14 48 4 34 4Z" stroke="#93c5fd" strokeWidth="2" fill="rgba(59,130,246,0.08)" opacity="0.9"/>
          <path d="M34 64 C34 64 34 48 34 44" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M8 28 C12 28 16 24 20 24 C24 24 28 30 34 30 C40 30 44 24 48 24 C52 24 56 28 60 28" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f]/90 via-transparent to-transparent" />
    </div>
  );
}

function OralIllustration() {
  return (
    <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #070c1a 0%, #0c1830 60%, #060a18 100%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <path d="M10 30 Q30 8 50 8 Q70 8 90 30" stroke="#93c5fd" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M18 35 Q22 28 28 26 Q34 24 34 32 L34 40 Q34 44 28 44 Q22 44 18 40 Z" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(59,130,246,0.1)"/>
          <path d="M38 35 Q42 26 50 26 Q58 26 62 35 L62 42 Q62 46 50 46 Q38 46 38 42 Z" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(59,130,246,0.1)"/>
          <path d="M66 35 Q70 28 76 26 Q82 24 82 32 L82 40 Q82 44 76 44 Q70 44 66 40 Z" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(59,130,246,0.1)"/>
          <path d="M10 30 Q30 52 50 52 Q70 52 90 30" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a]/90 via-transparent to-transparent" />
    </div>
  );
}

export default function CardIllustration({ projectId }: CardIllustrationProps) {
  switch (projectId) {
    case "divina-barbearia":
      return <BarberShopIllustration ghost="DB" />;
    case "oss-barbeiros":
      return <BarberShopIllustration ghost="OSS" />;
    case "clinic-vet":
      return <VetAIIllustration />;
    case "cinvet":
      return <VetSystemIllustration />;
    case "dental-clinic":
      return <DentalIllustration />;
    case "oral-vitta":
      return <OralIllustration />;
    default:
      return (
        <div className="w-full h-56 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #070d1a, #0d1e3a)" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a]/90 via-transparent to-transparent" />
        </div>
      );
  }
}
