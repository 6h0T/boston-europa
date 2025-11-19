"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CountrySelector from "./country-selector"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCountrySelector, setShowCountrySelector] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Verificar si ya se seleccionó un idioma en esta sesión
    const sessionLanguage = sessionStorage.getItem("selectedLanguage")
    
    if (sessionLanguage) {
      // Ya se seleccionó en esta sesión, saltar al contenido
      setSelectedLanguage(sessionLanguage)
      setIsReady(true)
      setIsLoading(false)
    } else {
      // Primera carga o recarga completa, mostrar preloader y selector
      const timer = setTimeout(() => {
        setIsLoading(false)
        setShowCountrySelector(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleCountrySelect = (language: string) => {
    setSelectedLanguage(language)
    // Guardar en sessionStorage para esta sesión
    sessionStorage.setItem("selectedLanguage", language)
    // También guardar en localStorage para futuras referencias si es necesario
    localStorage.setItem("selectedLanguage", language)
    setTimeout(() => {
      setShowCountrySelector(false)
      setIsReady(true)
    }, 500)
  }

  // No mostrar el contenido hasta que esté listo
  if (!isReady && (isLoading || showCountrySelector)) {
    // Bloquear el contenido de fondo
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-center">
              <motion.img
                src="https://bostonam.ar/wp-content/uploads/2023/03/LOGOWEBSITE-e1680142400144.png"
                alt="Boston Asset Manager"
                className="w-48 h-auto mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.div
                className="flex gap-2 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showCountrySelector && !selectedLanguage && (
        <CountrySelector onSelect={handleCountrySelect} />
      )}
    </>
  )
}
