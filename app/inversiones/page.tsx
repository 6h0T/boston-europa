import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import InversionesHero from "@/components/sections/inversiones/hero"

// Dynamic imports para lazy loading
const OpcionesInversion = dynamic(() => import("@/components/sections/inversiones/opciones"), {
  loading: () => <div className="min-h-[600px]" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: "Opciones de Inversión | Boston Asset Manager",
  description: "Descubra las distintas opciones de inversión disponibles: Acciones, ETF, Warrants, Fondos y Certificados. Asesoramiento profesional para cada tipo de operación.",
}

export default function InversionesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <InversionesHero />
      <OpcionesInversion />
      <Footer />
    </main>
  )
}
