"use client"

import { useTranslation } from "react-i18next"

export default function LaEmpresaMVV() {
  const { t } = useTranslation()
  const valores = [
    { title: t('company.mvv.values.transparency.title'), text: t('company.mvv.values.transparency.text') },
    { title: t('company.mvv.values.education.title'), text: t('company.mvv.values.education.text') },
    { title: t('company.mvv.values.innovation.title'), text: t('company.mvv.values.innovation.text') },
    { title: t('company.mvv.values.commitment.title'), text: t('company.mvv.values.commitment.text') },
    { title: t('company.mvv.values.federalism.title'), text: t('company.mvv.values.federalism.text') },
    { title: t('company.mvv.values.trust.title'), text: t('company.mvv.values.trust.text') }
  ]

  return (
    <section 
      className="relative py-20 overflow-hidden w-full"
      style={{
        backgroundImage: "url('/bg-3.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa de gradiente para atenuar el SVG */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(29, 57, 105, 0.95), rgba(29, 57, 105, 0.98))",
          zIndex: 1
        }}
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('company.mvv.title')}
          </h2>
        </div>

        {/* MISIÓN */}
        <div className="rounded-3xl p-12 mb-10 transition-all hover:shadow-2xl hover:-translate-y-2" style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(29, 57, 105, 0.1)"
        }}>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1d3969]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            {t('company.mvv.mission.title')}
          </h3>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            {t('company.mvv.mission.p1')}
          </p>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            {t('company.mvv.mission.p2')}
          </p>
          <p className="text-lg text-white leading-relaxed font-semibold">
            {t('company.mvv.mission.p3')}
          </p>
        </div>

        {/* VISIÓN */}
        <div className="rounded-3xl p-12 mb-10 transition-all hover:shadow-2xl hover:-translate-y-2" style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(29, 57, 105, 0.1)"
        }}>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1d3969]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            {t('company.mvv.vision.title')}
          </h3>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            {t('company.mvv.vision.p1')}
          </p>
          <p className="text-lg text-white leading-relaxed font-semibold">
            {t('company.mvv.vision.p2')}
          </p>
        </div>

        {/* VALORES */}
        <div className="rounded-3xl p-12 transition-all hover:shadow-2xl hover:-translate-y-2" style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(29, 57, 105, 0.1)"
        }}>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1d3969]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            {t('company.mvv.values.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border-l-4 border-white/50 transition-all duration-300 hover:translate-x-2 hover:border-white hover:shadow-md"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(5px)"
                }}
              >
                <h4 className="text-xl font-bold text-white mb-3">{valor.title}</h4>
                <p className="text-base text-white/80 leading-relaxed">{valor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
