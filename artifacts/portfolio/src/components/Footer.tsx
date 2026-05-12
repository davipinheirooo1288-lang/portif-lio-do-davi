export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40 font-light">
          &copy; {year} Davi Pinheiro. Todos os direitos reservados.
        </p>
        <div className="text-sm text-white/40 font-light flex items-center gap-1">
          <span>Projetado com precisão.</span>
        </div>
      </div>
    </footer>
  );
}
