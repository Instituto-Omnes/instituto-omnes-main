import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-bold text-violet-200"
        >
          Omnes
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-8 text-sm text-slate-300">
          <Link
            to="/"
            className={
              isActive("/")
                ? "text-white border-b-2 border-violet-400 pb-1"
                : "hover:text-white transition-colors"
            }
          >
            Início
          </Link>

          <Link
            to="/sobre"
            className={
              isActive("/sobre")
                ? "text-white border-b-2 border-violet-400 pb-1"
                : "hover:text-white transition-colors"
            }
          >
            Sobre Nós
          </Link>

          <Link
            to="/contato"
            className={
              isActive("/contato")
                ? "text-white border-b-2 border-violet-400 pb-1"
                : "hover:text-white transition-colors"
            }
          >
            Contato
          </Link>
        </nav>

        {/* CTA */}
        <Link to="/contato">
          <Button
            className="
              bg-violet-700
              hover:bg-violet-600
              text-white
              px-6
              py-3
            "
          >
            Acessar Plataforma
          </Button>
        </Link>
      </div>
    </header>
  );
}