import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5585992764792"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      data-testid="button-whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-7 right-7 z-50 flex items-center justify-center rounded-full"
      style={{
        width: "58px",
        height: "58px",
        background: "#25D366",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(37,211,102,0.4)" }}
        animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />

      {/* WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.61l-.42-.25-4.26 1.1 1.13-4.14-.28-.44A11.54 11.54 0 0 1 4.4 16.003C4.4 9.6 9.6 4.4 16.003 4.4 22.4 4.4 27.6 9.6 27.6 16.003c0 6.4-5.2 11.597-11.597 11.597zm6.36-8.67c-.35-.175-2.07-1.02-2.39-1.135-.32-.12-.554-.175-.787.175-.234.35-.905 1.135-1.11 1.37-.204.23-.408.26-.757.087-.35-.175-1.475-.544-2.81-1.733-1.038-.926-1.74-2.07-1.944-2.42-.204-.35-.022-.538.153-.712.157-.156.35-.408.525-.612.175-.204.234-.35.35-.583.117-.234.058-.438-.029-.612-.088-.175-.788-1.897-1.08-2.596-.284-.682-.572-.59-.787-.6l-.67-.012c-.234 0-.612.087-.933.438-.32.35-1.225 1.197-1.225 2.918 0 1.72 1.254 3.384 1.428 3.617.175.234 2.47 3.77 5.984 5.288.836.36 1.488.576 1.996.737.839.267 1.603.229 2.207.139.673-.1 2.07-.846 2.362-1.664.292-.817.292-1.518.204-1.664-.087-.146-.32-.234-.67-.408z" />
      </svg>
    </motion.a>
  );
}
