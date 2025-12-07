"use client"

import { useRef } from "react"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import Footer from "@/components/footer"
import GiantLogoSection from "@/components/sections/giant-logo-section"

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Aplicar scroll snap al contenedor completo
  useScrollSnap(sectionRef)

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-between bg-white"
    >
      <Footer />
      <GiantLogoSection />
    </section>
  )
}
