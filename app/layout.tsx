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
  title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
  description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto. Institución autorizada por FINRA y SEC.",
  keywords: [
    "inversiones",
    "mercado de capitales",
    "asesoramiento financiero",
    "Boston Asset Manager",
    "invertir",
    "FINRA",
    "SEC",
    "gestión de activos",
    "finanzas",
    "bolsa de valores"
  ],
  authors: [{ name: "Boston Asset Manager" }],
  creator: "Boston Asset Manager",
  publisher: "Boston Asset Manager",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["de_DE", "fr_FR", "it_IT", "sv_SE"],
    url: "https://bostonam.eu",
    siteName: "Boston Asset Manager",
    title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
    description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto.",
    images: [
      {
        url: "https://bostonam.ar/wp-content/uploads/2023/03/LOGOWEBSITE-e1680142400144.png",
        width: 1200,
        height: 630,
        alt: "Boston Asset Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
    description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto.",
    images: ["https://bostonam.ar/wp-content/uploads/2023/03/LOGOWEBSITE-e1680142400144.png"],
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  generator: 'Next.js'
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
