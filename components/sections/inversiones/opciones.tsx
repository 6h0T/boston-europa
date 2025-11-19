"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function OpcionesInversion() {
  const { t } = useTranslation()
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const opciones = [
    {
      title: t('investments.stocks.title'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      description: t('investments.stocks.description'),
      detailedInfo: [
        {
          question: t('investments.stocks.q1'),
          answer: t('investments.stocks.a1')
        },
        {
          question: t('investments.stocks.q2'),
          answer: t('investments.stocks.a2')
        },
        {
          question: t('investments.stocks.q3'),
          answer: t('investments.stocks.a3')
        },
        {
          question: t('investments.stocks.q4'),
          answer: t('investments.stocks.a4')
        }
      ],
      benefits: [
        t('investments.stocks.benefit1'),
        t('investments.stocks.benefit2'),
        t('investments.stocks.benefit3'),
        t('investments.stocks.benefit4')
      ],
      color: "from-[#2563eb] to-[#1d3969]"
    },
    {
      title: t('investments.etf.title'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      description: t('investments.etf.description'),
      detailedInfo: [
        {
          question: t('investments.etf.q1'),
          answer: t('investments.etf.a1')
        },
        {
          question: t('investments.etf.q2'),
          answer: t('investments.etf.a2')
        }
      ],
      benefits: [
        t('investments.etf.benefit1'),
        t('investments.etf.benefit2'),
        t('investments.etf.benefit3'),
        t('investments.etf.benefit4')
      ],
      color: "from-[#059669] to-[#047857]"
    },
    {
      title: t('investments.warrants.title'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      description: t('investments.warrants.description'),
      detailedInfo: [
        {
          question: t('investments.warrants.q1'),
          answer: t('investments.warrants.a1')
        },
        {
          question: t('investments.warrants.q2'),
          answer: t('investments.warrants.a2')
        },
        {
          question: t('investments.warrants.q3'),
          answer: t('investments.warrants.a3')
        },
        {
          question: t('investments.warrants.q4'),
          answer: t('investments.warrants.a4')
        },
        {
          question: t('investments.warrants.q5'),
          answer: t('investments.warrants.a5')
        },
        {
          question: t('investments.warrants.q6'),
          answer: t('investments.warrants.a6')
        }
      ],
      benefits: [
        t('investments.warrants.benefit1'),
        t('investments.warrants.benefit2'),
        t('investments.warrants.benefit3'),
        t('investments.warrants.benefit4')
      ],
      color: "from-[#8b5cf6] to-[#6d28d9]"
    },
    {
      title: t('investments.funds.title'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      description: t('investments.funds.description'),
      detailedInfo: [
        {
          question: t('investments.funds.q1'),
          answer: t('investments.funds.a1')
        },
        {
          question: t('investments.funds.q2'),
          answer: t('investments.funds.a2')
        },
        {
          question: t('investments.funds.q3'),
          answer: t('investments.funds.a3')
        },
        {
          question: t('investments.funds.q4'),
          answer: t('investments.funds.a4')
        }
      ],
      benefits: [
        t('investments.funds.benefit1'),
        t('investments.funds.benefit2'),
        t('investments.funds.benefit3'),
        t('investments.funds.benefit4')
      ],
      color: "from-[#f59e0b] to-[#d97706]"
    },
    {
      title: t('investments.bonds.title'),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      description: t('investments.bonds.description'),
      detailedInfo: [
        {
          question: t('investments.bonds.q1'),
          answer: t('investments.bonds.a1')
        },
        {
          question: t('investments.bonds.q2'),
          answer: t('investments.bonds.a2')
        },
        {
          question: t('investments.bonds.q3'),
          answer: t('investments.bonds.a3')
        }
      ],
      benefits: [
        t('investments.bonds.benefit1'),
        t('investments.bonds.benefit2'),
        t('investments.bonds.benefit3'),
        t('investments.bonds.benefit4')
      ],
      color: "from-[#06b6d4] to-[#0891b2]"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden w-full bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-16">
          {opciones.map((opcion, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl shadow-xl overflow-hidden border border-[#e2e8f0]"
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-r from-[#2563eb] to-[#1d3969] p-12 text-white">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                      {opcion.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold">{opcion.title}</h2>
                  </div>
                  <p className="text-xl text-white/95 leading-relaxed">
                    {opcion.description}
                  </p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-12">
                <div className="max-w-6xl mx-auto">
                  {index === 2 && opcion.detailedInfo ? (
                    // Layout Bento para Warrants
                    <div>
                      <h3 className="text-2xl font-bold text-[#1d3969] mb-8 text-center">
                        {t('investments.warrants.typesTitle')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {opcion.detailedInfo.map((info, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6]/10 to-[#6d28d9]/10 rounded-xl flex items-center justify-center mb-4">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6]">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                              </svg>
                            </div>
                            <h4 className="font-bold text-[#1d3969] mb-3 text-lg">
                              {info.question}
                            </h4>
                            <p className="text-[#64748b] leading-relaxed text-sm">
                              {info.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Beneficios y CTA en la parte inferior */}
                      <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-8 border border-[#e2e8f0]">
                        <h3 className="text-2xl font-bold text-[#1d3969] mb-6 text-center">
                          {t('investments.benefits')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {opcion.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6]/10 to-[#6d28d9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6]">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              </div>
                              <span className="text-[#374151] font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href="/abrircuenta"
                          className="block w-full max-w-md mx-auto bg-gradient-to-r from-[#2563eb] to-[#1d3969] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center text-lg"
                        >
                          {t('investments.openAccount')}
                        </a>
                      </div>
                    </div>
                  ) : (
                    // Layout normal para otras opciones
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Columna izquierda - Información detallada */}
                      <div>
                        {opcion.detailedInfo && (
                          <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#1d3969] mb-6">
                              {t('investments.faq')}
                            </h3>
                            {opcion.detailedInfo.map((info, idx) => (
                              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm">
                                <h4 className="font-bold text-[#1d3969] mb-3 text-lg">
                                  {info.question}
                                </h4>
                                <p className="text-[#64748b] leading-relaxed">
                                  {info.answer}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Columna derecha - Beneficios y CTA */}
                      <div>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-[#1d3969] mb-6">
                            {t('investments.benefits')}
                          </h3>
                          <div className="space-y-4">
                            {opcion.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#2563eb]/10 to-[#059669]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#2563eb]">
                                    <polyline points="20 6 9 17 4 12"/>
                                  </svg>
                                </div>
                                <span className="text-[#374151] font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* Botón de acción */}
                          <a
                            href="/abrircuenta"
                            className="block w-full mt-8 bg-gradient-to-r from-[#2563eb] to-[#1d3969] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-center text-lg"
                          >
                            {t('investments.openAccount')}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d3969] mb-6">
            {t('investments.cta.title')}
          </h3>
          <p className="text-lg text-[#64748b] mb-8 max-w-2xl mx-auto">
            {t('investments.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-gradient-to-r from-[#1d3969] to-[#2563eb] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t('investments.cta.contact')}
            </a>
            <a
              href="/abrircuenta"
              className="bg-white border-2 border-[#2563eb] text-[#2563eb] font-bold py-4 px-8 rounded-xl hover:bg-[#2563eb] hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t('investments.cta.openAccount')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
