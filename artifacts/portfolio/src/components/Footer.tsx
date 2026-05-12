export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light" style={{ color: "rgba(147,197,253,0.3)" }}>
          &copy; {year} Davi Pinheiro. Todos os direitos reservados.
        </p>
        <p className="text-sm font-light" style={{ color: "rgba(147,197,253,0.3)" }}>
          Projetado com precisão.
        </p>
      </div>
    </footer>
  );
}
