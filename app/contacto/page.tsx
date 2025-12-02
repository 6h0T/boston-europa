import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import ContactoHero from "@/components/sections/contacto/hero"

// Dynamic imports para lazy loading
const ContactoForm = dynamic(() => import("@/components/sections/contacto/form"), {
  loading: () => <div className="min-h-[500px]" />,
})
const ContactoInfo = dynamic(() => import("@/components/sections/contacto/info"), {
  loading: () => <div className="min-h-[300px]" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: "Contacto | Boston Asset Manager",
  description: "Contáctenos para recibir asesoramiento profesional. Estamos disponibles para responder todas sus consultas sobre inversiones y mercado de capitales.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <ContactoHero />
      <ContactoForm />
      <ContactoInfo />
      <Footer />
    </main>
  )
}
