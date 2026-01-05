"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import StaggeredMenu from "@/components/ui/staggered-menu"
import { isCountryDomain, getDomainForLanguage } from "@/lib/domain-utils"

export default function Navbar() {
  const [menuColor, setMenuColor] = useState("#ffffff")
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language || 'es')

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      console.log('Language changed event:', lng)
      setCurrentLang(lng)
    }

    i18n.on('languageChanged', handleLanguageChanged)
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [i18n])

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section, footer")) as HTMLElement[]
      const scrollPosition = window.scrollY + 100

      let currentColor = "#ffffff" // Por defecto blanco

      if (isHomePage) {
        // Lógica para la landing page (home)
        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Índice 0: Hero (blanco)
            // Índice 1: Proceso Simple (azul)
            // Índice 2: Por qué elegir (blanco)
            // Índice 3: Para qué invertir (azul)
            // Índice 4: Conoce tu perfil (blanco)
            // Índice 5: Footer (azul - fondo blanco)
            // Índice 6: Giant Logo (azul - fondo blanco)
            
            if (index === 0 || index === 2 || index === 4) {
              currentColor = "#ffffff"
            } else {
              currentColor = "#1d3969"
            }
          }
        })
      } else {
        // Lógica para otras páginas
        if (sections.length > 0) {
          const firstSection = sections[0]
          const firstSectionBottom = firstSection.offsetTop + firstSection.offsetHeight

          // Blanco en la primera sección, azul en el resto
          if (scrollPosition < firstSectionBottom) {
            currentColor = "#ffffff"
          } else {
            currentColor = "#1d3969"
          }
        }
      }

      setMenuColor(currentColor)
    }

    handleScroll() // Ejecutar al montar
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])
  const handleLanguageChange = (language: string) => {
    console.log('Changing language to:', language)
    console.log('Current language:', i18n.language)
    
    // Si estamos en un dominio específico de país, redirigir al dominio del nuevo idioma
    if (isCountryDomain()) {
      const targetDomain = getDomainForLanguage(language)
      if (targetDomain) {
        const currentPath = window.location.pathname
        window.location.href = `https://${targetDomain}${currentPath}`
        return
      }
    }
    
    // En dominio base (.eu, localhost), cambiar idioma dinámicamente
    i18n.changeLanguage(language).then(() => {
      console.log('Language changed successfully to:', language)
      sessionStorage.setItem("selectedLanguage", language)
      localStorage.setItem("selectedLanguage", language)
    }).catch((error) => {
      console.error('Error changing language:', error)
    })
  }

  const menuItems = [
    { label: t('menu.home'), ariaLabel: "Ir a inicio", link: "/" },
    { label: t('menu.company'), ariaLabel: "Conocer la empresa", link: "/laempresa" },
    { label: t('menu.openAccount'), ariaLabel: "Abrir cuenta", link: "/abrircuenta" },
    { label: t('menu.contact'), ariaLabel: "Contactarse", link: "/contacto" },
    { label: t('menu.investments'), ariaLabel: "Ver opciones de inversión", link: "/inversiones" },
    // { label: t('menu.crypto'), ariaLabel: "Operar criptomonedas", link: "#cripto" },
  ]

  const languageItems = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "sv", label: "Svenska", flag: "🇸🇪" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ]

  const socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/company/boston-asset-manager/posts/?feedView=all" },
    { label: "Twitter", link: "https://x.com/AssetBoston" },
    { label: "Instagram", link: "https://www.instagram.com/bostonassetmanager/" },
  ]

  // Determinar variante del logo basado en el color del menú
  const logoVariant = menuColor === "#ffffff" ? "light" : "dark"

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      languageItems={languageItems}
      currentLanguage={currentLang}
      onLanguageChange={handleLanguageChange}
      languageLabel={t('menu.language')}
      displaySocials={true}
      displayItemNumbering={false}
      menuButtonColor={menuColor}
      openMenuButtonColor="#1d3969"
      changeMenuColorOnOpen={true}
      colors={["#1d3969", "#2563eb"]}
      logoUrlLight="/boston blanco.png"
      logoUrlDark="/boston azul.png"
      currentLogoVariant={logoVariant}
      accentColor="#2563eb"
      isFixed={true}
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
    />
  )
}
