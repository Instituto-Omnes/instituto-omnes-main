import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 text-white">
      <div className="text-violet-300">
        {icon}
      </div>

      <h3 className="mt-6 text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-5 text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
