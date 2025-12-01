"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function InversionExterior() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'exterior',
          ...formData
        })
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          pais: "",
          mensaje: ""
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Error enviando formulario:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative py-20 overflow-hidden w-full bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Formulario izquierda */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl shadow-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-2xl font-bold text-[#1d3969] mb-6">{t('openAccount.exterior.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre-ext" className="block text-sm font-semibold text-[#374151] mb-2">
                    {t('form.fullName')} {t('form.required')}
                  </label>
                  <input
                    type="text"
                    id="nombre-ext"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email-ext" className="block text-sm font-semibold text-[#374151] mb-2">
                    {t('form.email')} {t('form.required')}
                  </label>
                  <input
                    type="email"
                    id="email-ext"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono-ext" className="block text-sm font-semibold text-[#374151] mb-2">
                    {t('form.phone')} {t('form.required')}
                  </label>
                  <input
                    type="tel"
                    id="telefono-ext"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="pais-ext" className="block text-sm font-semibold text-[#374151] mb-2">
                    {t('form.country')} {t('form.required')}
                  </label>
                  <select
                    id="pais-ext"
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all"
                  >
                    <option value="">{t('form.selectCountry')}</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CA">Canadá</option>
                    <option value="MX">México</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje-ext" className="block text-sm font-semibold text-[#374151] mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="mensaje-ext"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-[#059669]/10 border border-[#059669]/20 text-[#059669] px-4 py-3 rounded-xl flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="font-semibold text-sm">{t('contact.form.success')}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    <span className="font-semibold text-sm">{t('contact.form.error')}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#059669] to-[#047857] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.sending')}
                    </span>
                  ) : t('openAccount.exterior.form.button')}
                </button>
              </form>
            </div>
          </div>

          {/* Contenido derecha */}
          <div className="text-left order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-[#059669]/10 rounded-full mb-6">
              <span className="text-[#059669] font-semibold text-sm uppercase tracking-wide">{t('openAccount.exterior.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d3969] mb-6 leading-tight">
              {t('openAccount.exterior.title')}
            </h2>
            <p className="text-lg text-[#374151] leading-relaxed mb-6">
              {t('openAccount.exterior.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#059669]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#059669]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d3969] mb-2">{t('openAccount.exterior.feature1.title')}</h3>
                  <p className="text-[#64748b]">{t('openAccount.exterior.feature1.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#059669]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#059669]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d3969] mb-2">{t('openAccount.exterior.feature2.title')}</h3>
                  <p className="text-[#64748b]">{t('openAccount.exterior.feature2.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#059669]/10 to-[#2563eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#059669]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d3969] mb-2">{t('openAccount.exterior.feature3.title')}</h3>
                  <p className="text-[#64748b]">{t('openAccount.exterior.feature3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
