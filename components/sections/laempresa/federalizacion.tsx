"use client"

export default function LaEmpresaFederalizacion() {
  return (
    <section className="relative py-20 overflow-hidden w-full bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d3969] mb-8 leading-tight tracking-tight">
              Compromiso Federal y Humano
            </h2>
            <p className="text-lg text-[#374151] leading-relaxed mb-6">
              Desde Boston construimos un modelo de trabajo federal e inclusivo, integrando talentos y generando oportunidades en todo el país.
            </p>
            <p className="text-lg text-[#374151] leading-relaxed">
              Nuestro equipo está formado por personas que comparten los valores de la empresa y contribuyen activamente al propósito que nos impulsa: acompañar, educar y generar impacto positivo en la vida de las personas.
            </p>
          </div>

          {/* Mapa placeholder - puedes reemplazar con el SVG completo si lo necesitas */}
          <div className="relative flex items-center justify-center p-10">
            <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-br from-[#1d3969]/10 to-[#2563eb]/10 rounded-3xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-center p-8">
                <svg className="w-full h-auto max-w-[300px] mx-auto mb-4" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 L70 40 L90 50 L80 80 L85 120 L50 140 L15 120 L20 80 L10 50 L30 40 Z" 
                    fill="#1d3969" 
                    stroke="#2563eb" 
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <circle cx="50" cy="70" r="8" fill="#059669" className="animate-ping" style={{ animationDuration: '2s' }} />
                </svg>
                <p className="text-sm text-[#64748b] font-medium">
                  Presencia en 14+ provincias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
