import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import PageLoader from "@/components/ui/page-loader"
import PageTransition from "@/components/ui/page-transition"
import { I18nProvider } from "@/components/providers/i18n-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Boston Asset Manager - Gestor de Activos Financieros",
  description:
    "Boston Asset Manager es una institución de asesoramiento financiero autorizada por FINRA y SEC. Invierte con expertos.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <I18nProvider>
          <PageLoader />
          <PageTransition>
            {children}
          </PageTransition>
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
