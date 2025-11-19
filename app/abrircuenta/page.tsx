import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AbrirCuentaHero from "@/components/sections/abrircuenta/hero"
import InversionUE from "@/components/sections/abrircuenta/inversion-ue"
import InversionExterior from "@/components/sections/abrircuenta/inversion-exterior"

export const metadata: Metadata = {
  title: "Abra su Cuenta | Boston Asset Manager",
  description: "Abra su cuenta 100% en línea y comience a invertir de inmediato con asesoramiento profesional. Invierta en la Unión Europea o en el exterior.",
}

export default function AbrirCuentaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <AbrirCuentaHero />
      <InversionUE />
      <InversionExterior />
      <Footer />
    </main>
  )
}
