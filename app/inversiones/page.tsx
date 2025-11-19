import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InversionesHero from "@/components/sections/inversiones/hero"
import OpcionesInversion from "@/components/sections/inversiones/opciones"

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
