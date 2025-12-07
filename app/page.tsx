import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"

// Dynamic imports para componentes below-the-fold (lazy loading)
const StepsSection = dynamic(() => import("@/components/sections/steps-section"), {
  loading: () => <div className="min-h-[600px]" />,
})
const BenefitsSection = dynamic(() => import("@/components/sections/benefits-section"), {
  loading: () => <div className="min-h-[400px]" />,
})
const WhyChooseSection = dynamic(() => import("@/components/sections/why-choose-section"), {
  loading: () => <div className="min-h-[500px]" />,
})
const CtaSection = dynamic(() => import("@/components/sections/cta-section"), {
  loading: () => <div className="min-h-[400px]" />,
})
const FooterSection = dynamic(() => import("@/components/sections/footer-section"), {
  loading: () => <div className="min-h-screen" />,
})

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <WhyChooseSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
