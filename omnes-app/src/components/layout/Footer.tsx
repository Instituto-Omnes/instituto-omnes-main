import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-8
          flex
          items-center
          justify-between
          text-slate-400
          text-sm
        "
      >
        <Link
          to="/"
          className="text-white text-2xl font-bold"
        >
          Omnes
        </Link>

        <div className="flex gap-6">
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <span>
          © 2026 Omnes. Inteligência de Dados e Precisão Estratégica.
        </span>
      </div>
    </footer>
  );
}