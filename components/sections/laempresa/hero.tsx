"use client"

import { useTranslation } from "react-i18next"

export default function LaEmpresaHero() {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-[500px] py-20 overflow-hidden w-full bg-gradient-to-br from-[#1d3969] to-[#2563eb]">
      {/* Animated background pattern */}
      <div 
        className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] opacity-10 pointer-events-none animate-[float_25s_infinite_linear]"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.08)"/></svg>')`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center animate-[fadeInDown_0.8s_ease-out]">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              {t('company.hero.title')}
            </h1>
            <p className="text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              {t('company.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
