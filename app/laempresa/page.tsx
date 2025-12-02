import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import LaEmpresaHero from "@/components/sections/laempresa/hero"

// Dynamic imports para lazy loading
const LaEmpresaHistoria = dynamic(() => import("@/components/sections/laempresa/historia"), {
  loading: () => <div className="min-h-[500px]" />,
})
const LaEmpresaMVV = dynamic(() => import("@/components/sections/laempresa/mvv"), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: "La Empresa | Boston Asset Manager",
  description: "Conocé nuestra historia, misión, visión y valores. Somos una empresa argentina especializada en asesoramiento financiero dentro del mercado de capitales.",
}

export default function LaEmpresaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <LaEmpresaHero />
      <LaEmpresaHistoria />
      <LaEmpresaMVV />
      <Footer />
    </main>
  )
}
