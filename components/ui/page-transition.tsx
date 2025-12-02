"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya seleccionó un país en esta sesión
    const checkReady = () => {
      const sessionLanguage = sessionStorage.getItem("selectedLanguage")
      if (sessionLanguage) {
        setIsReady(true)
      } else {
        // Esperar a que se seleccione
        const interval = setInterval(() => {
          const lang = sessionStorage.getItem("selectedLanguage")
          if (lang) {
            setIsReady(true)
            clearInterval(interval)
          }
        }, 100)
        return () => clearInterval(interval)
      }
    }
    
    const cleanup = checkReady()
    return cleanup
  }, [])

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </AnimatePresence>
      {isReady ? children : null}
    </>
  )
}
