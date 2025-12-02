import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import AbrirCuentaHero from "@/components/sections/abrircuenta/hero"

// Dynamic imports para lazy loading
const InversionUE = dynamic(() => import("@/components/sections/abrircuenta/inversion-ue"), {
  loading: () => <div className="min-h-[600px]" />,
})
const InversionExterior = dynamic(() => import("@/components/sections/abrircuenta/inversion-exterior"), {
  loading: () => <div className="min-h-[600px]" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[200px]" />,
})

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
