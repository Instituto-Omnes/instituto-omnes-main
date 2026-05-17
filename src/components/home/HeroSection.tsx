import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.3),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-white text-6xl font-bold leading-tight">
          Inteligência de Dados para Decisões Críticas.
        </h2>

        <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
          A plataforma definitiva para monitoramento analítico e
          estruturação de informações em cenários complexos.
        </p>

        <Link to="/contato">
          <Button
            className="
              mt-12
              bg-violet-700
              hover:bg-violet-600
              text-white
              px-10
              py-4
              text-sm
              tracking-[0.2em]
            "
          >
            Acessar Plataforma
          </Button>
        </Link>
      </div>
    </section>
  );
}
