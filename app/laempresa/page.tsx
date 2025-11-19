import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LaEmpresaHero from "@/components/sections/laempresa/hero"
import LaEmpresaHistoria from "@/components/sections/laempresa/historia"
import LaEmpresaMVV from "@/components/sections/laempresa/mvv"

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
