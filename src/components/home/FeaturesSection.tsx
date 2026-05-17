import { BarChart3, Search } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section className="pb-28">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8">
        <FeatureCard
          icon={<BarChart3 size={28} />}
          title="Monitoramento"
          description="Acompanhamento em tempo real de métricas críticas e análise operacional."
        />

        <FeatureCard
          icon={<Search size={28} />}
          title="Pesquisa"
          description="Investigação estruturada e cruzamento inteligente de dados."
        />
      </div>
    </section>
  );
}
