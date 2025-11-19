"use client"

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    // Verificar si hay un idioma guardado y aplicarlo
    const savedLanguage = sessionStorage.getItem('selectedLanguage') || localStorage.getItem('selectedLanguage')
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }

    // Escuchar cambios de idioma en i18next
    const handleLanguageChange = () => {
      forceUpdate(prev => prev + 1)
    }

    i18n.on('languageChanged', handleLanguageChange)

    // Escuchar cambios en el storage
    const handleStorageChange = () => {
      const newLanguage = sessionStorage.getItem('selectedLanguage')
      if (newLanguage && i18n.language !== newLanguage) {
        i18n.changeLanguage(newLanguage)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
