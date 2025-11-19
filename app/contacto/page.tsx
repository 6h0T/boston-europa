import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactoHero from "@/components/sections/contacto/hero"
import ContactoForm from "@/components/sections/contacto/form"
import ContactoInfo from "@/components/sections/contacto/info"

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
