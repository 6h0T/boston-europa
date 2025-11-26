import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Configuración de dominios para Boston Asset Manager Europa
 * 
 * DOMINIO BASE: bostonam.eu / bostonassetmanager.eu → Selector de países
 * DOMINIOS POR PAÍS: bostonam.{tld} → Idioma específico
 */

// Mapeo de dominios a idiomas (inline para evitar problemas de importación en middleware)
const domainToLanguage: Record<string, string> = {
  // Dominios cortos
  'bostonam.de': 'de',
  'bostonam.es': 'es',
  'bostonam.fr': 'fr',
  'bostonam.it': 'it',
  'bostonam.se': 'sv',
  
  // Dominios largos
  'bostonassetmanager.de': 'de',
  'bostonassetmanager.es': 'es',
  'bostonassetmanager.fr': 'fr',
  'bostonassetmanager.it': 'it',
  'bostonassetmanager.se': 'sv',
  
  // Dominio base (selector de países)
  'bostonam.eu': 'selector',
  'bostonassetmanager.eu': 'selector',
  
  // Desarrollo local - puedes cambiar esto para probar diferentes idiomas
  'localhost': 'selector',
}

// Dominios que muestran el selector de países
const selectorDomains = ['bostonam.eu', 'bostonassetmanager.eu', 'localhost']

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  // Remover puerto para desarrollo local
  const domain = hostname.split(':')[0]
  
  const response = NextResponse.next()
  
  // Buscar el idioma correspondiente al dominio
  const language = domainToLanguage[domain]
  
  if (language && language !== 'selector') {
    // Dominio específico de país: establecer cookie con el idioma
    response.cookies.set('domain-language', language, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 año
    })
    response.cookies.set('skip-country-selector', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  } else if (selectorDomains.includes(domain)) {
    // Dominio base: mostrar selector de países
    response.cookies.delete('skip-country-selector')
    response.cookies.set('domain-language', 'selector', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  }
  
  return response
}

export const config = {
  matcher: [
    // Aplicar a todas las rutas excepto archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
}
