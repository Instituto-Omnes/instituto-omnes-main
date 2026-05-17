// src/pages/About/index.tsx

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import {
  Flag,
  Eye,
  Gem,
} from "lucide-react";

import lauraImg from "@/assets/team/laura.png";
import victoriaImg from "@/assets/team/victoria.png";
import pedroImg from '@/assets/team/pedro.png';

export default function About() {
  return (
    <div className="min-h-screen bg-[#020B2D] text-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)]
            "
          />

          <div className="relative max-w-5xl mx-auto px-8 py-24 text-center">
            <h1
              className="
                text-5xl
                md:text-6xl
                font-bold
                leading-tight
                text-slate-100
              "
            >
              Inteligência de dados para decisões críticas
            </h1>

            <p
              className="
                mt-8
                text-slate-300
                leading-relaxed
                max-w-3xl
                mx-auto
                text-lg
              "
            >
              Nós transformamos dados de redes sociais
              complexos em estratégias claras, previsíveis
              e acionáveis. Nosso ecossistema de inteligência
              foi desenhado para líderes que exigem precisão
              em ambientes de alta volatilidade.
            </p>
          </div>
        </section>

        {/* CARDS */}
        <section className="pb-28">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-6">
            {/* Missão */}
            <div
              className="
                bg-white/5
                border
                border-white/5
                p-8
                rounded-md
              "
            >
              <div
                className="
                  w-12
                  h-12
                  bg-[#0D1634]
                  flex
                  items-center
                  justify-center
                  rounded-sm
                "
              >
                <Flag className="w-5 h-5 text-violet-300" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold">
                Missão
              </h2>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Fornecer a infraestrutura analítica definitiva
                para campanhas e mandatos, eliminando o
                achismo e instaurando o rigor científico
                na tomada de decisão estratégica.
              </p>
            </div>

            {/* Visão */}
            <div
              className="
                bg-white/5
                border
                border-white/5
                p-8
                rounded-md
              "
            >
              <div
                className="
                  w-12
                  h-12
                  bg-[#0D1634]
                  flex
                  items-center
                  justify-center
                  rounded-sm
                "
              >
                <Eye className="w-5 h-5 text-violet-300" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold">
                Visão
              </h2>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Ser o padrão ouro em inteligência eleitoral
                na América Latina, reconhecidos não apenas
                pela acurácia dos dados, mas pela clareza
                cristalina com que os apresentamos.
              </p>
            </div>

            {/* Valores */}
            <div
              className="
                bg-white/5
                border
                border-white/5
                p-8
                rounded-md
              "
            >
              <div
                className="
                  w-12
                  h-12
                  bg-[#0D1634]
                  flex
                  items-center
                  justify-center
                  rounded-sm
                "
              >
                <Gem className="w-5 h-5 text-violet-300" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold">
                Valores
              </h2>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Obsessão por precisão. Foco em performance.
                Design minimalista para redução de ruído
                cognitivo. Segurança inegociável da informação.
              </p>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-8">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-5xl font-bold">
                Nossa Equipe
              </h2>

              <p className="mt-4 text-slate-300">
                Especialistas forjados na interseção entre
                ciência de dados e estratégia política.
              </p>
            </div>

            {/* Team Grid */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {/* Laura */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/5
                  overflow-hidden
                  rounded-md
                "
              >
                <img
                  src={lauraImg}
                  alt="Laura"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    grayscale
                  "
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    Laura Gagliardi
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Fundadora e Cientista de Dados
                  </p>
                </div>
              </div>

              {/* Victoria */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/5
                  overflow-hidden
                  rounded-md
                "
              >
                <img
                  src={victoriaImg}
                  alt="Victoria"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    grayscale
                  "
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    Victoria Ferro
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Co-Fundadora e Cientista de Dados
                  </p>
                </div>
              </div>

              {/* Pedro */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/5
                  overflow-hidden
                  rounded-md
                "
              >
                <img
                  src={pedroImg}
                  alt="Pedro"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    grayscale
                  "
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    Pedro Morais
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Co-Fundador e Cientista de Dados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}