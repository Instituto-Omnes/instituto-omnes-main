// src/pages/Contact/index.tsx

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";

import {
  Building2,
  Mail,
  Phone,
  SendHorizonal,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#020B2D] text-white flex flex-col">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        {/* Glow Background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)]
          "
        />

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-8 py-16">
          <div
            className="
              bg-[#121C3B]/95
              border
              border-white/5
              rounded-md
              p-10
              shadow-2xl
            "
          >
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-violet-200">
                Inicie seu Projeto Conosco
              </h1>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Conte-nos um pouco sobre sua necessidade para
                que possamos oferecer a melhor solução de
                monitoramento.
              </p>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-8">
              {/* Empresa */}
              <div>
                <label className="block text-sm mb-3 text-slate-300 tracking-wide">
                  Nome da Empresa
                </label>

                <div className="relative">
                  <Building2
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                      w-5
                      h-5
                    "
                  />

                  <input
                    type="text"
                    placeholder="Sua Empresa LTDA"
                    className="
                      w-full
                      bg-[#2D3553]
                      border
                      border-white/5
                      h-14
                      pl-12
                      pr-4
                      text-white
                      placeholder:text-slate-400
                      rounded-md
                      outline-none
                      focus:border-violet-500
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-3 text-slate-300 tracking-wide">
                  Seu E-mail
                </label>

                <div className="relative">
                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                      w-5
                      h-5
                    "
                  />

                  <input
                    type="email"
                    placeholder="contato@empresa.com.br"
                    className="
                      w-full
                      bg-[#2D3553]
                      border
                      border-white/5
                      h-14
                      pl-12
                      pr-4
                      text-white
                      placeholder:text-slate-400
                      rounded-md
                      outline-none
                      focus:border-violet-500
                    "
                  />
                </div>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm mb-3 text-slate-300 tracking-wide">
                  Telefone / WhatsApp
                </label>

                <div className="relative">
                  <Phone
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                      w-5
                      h-5
                    "
                  />

                  <input
                    type="text"
                    placeholder="(11) 90000-0000"
                    className="
                      w-full
                      bg-[#2D3553]
                      border
                      border-white/5
                      h-14
                      pl-12
                      pr-4
                      text-white
                      placeholder:text-slate-400
                      rounded-md
                      outline-none
                      focus:border-violet-500
                    "
                  />
                </div>
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-sm mb-3 text-slate-300 tracking-wide">
                  Descrição da Necessidade
                </label>

                <textarea
                  placeholder="Descreva os dados ou entidades que deseja monitorar..."
                  rows={6}
                  className="
                    w-full
                    bg-[#2D3553]
                    border
                    border-white/5
                    p-4
                    text-white
                    placeholder:text-slate-400
                    rounded-md
                    outline-none
                    resize-none
                    focus:border-violet-500
                  "
                />
              </div>

              {/* Footer Actions */}
              <div
                className="
                  pt-6
                  border-t
                  border-white/5
                  flex
                  items-center
                  justify-end
                  gap-4
                "
              >
                <button
                  type="button"
                  className="
                    text-slate-300
                    hover:text-white
                    transition-colors
                  "
                >
                  Cancelar
                </button>

                <Button
                  className="
                    bg-violet-300
                    hover:bg-violet-200
                    text-violet-950
                    px-8
                    h-12
                    font-medium
                    tracking-wide
                  "
                >
                  Enviar Mensagem

                  <SendHorizonal className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}