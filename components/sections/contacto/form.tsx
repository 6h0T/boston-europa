"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function ContactoForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    setTimeout(() => {
      console.log("Formulario de contacto enviado:", formData)
      setSubmitStatus("success")
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
      })
      
      // Reset status después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative py-20 overflow-hidden w-full bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d3969] mb-4">
            {t('contact.form.title')}
          </h2>
          <p className="text-lg text-[#64748b]">
            {t('contact.form.subtitle')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl shadow-2xl p-8 md:p-12 border border-[#e2e8f0]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-[#374151] mb-2">
                  {t('form.fullName')} {t('form.required')}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#374151] mb-2">
                  {t('form.email')} {t('form.required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-[#374151] mb-2">
                  {t('form.phone')} {t('form.required')}
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-semibold text-[#374151] mb-2">
                  {t('contact.form.subject')} {t('form.required')}
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                >
                  <option value="">{t('contact.form.selectSubject')}</option>
                  <option value="consulta-general">{t('contact.form.subject.general')}</option>
                  <option value="abrir-cuenta">{t('contact.form.subject.openAccount')}</option>
                  <option value="inversiones">{t('contact.form.subject.investments')}</option>
                  <option value="soporte">{t('contact.form.subject.support')}</option>
                  <option value="otro">{t('contact.form.subject.other')}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-[#374151] mb-2">
                {t('form.message').replace(' (Opcional)', '')} {t('form.required')}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-[#059669]/10 border border-[#059669]/20 text-[#059669] px-6 py-4 rounded-xl flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="font-semibold">{t('contact.form.success')}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#1d3969] to-[#2563eb] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.form.sending')}
                </span>
              ) : (
                t('contact.form.submit')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
