/**
 * Configuración de dominios para Boston Asset Manager Europa
 * 
 * ARQUITECTURA DE DOMINIOS:
 * 
 * DOMINIO BASE (Selector de países):
 * - bostonam.eu → Muestra selector de países
 * - bostonassetmanager.eu → Redirige a bostonam.eu (o muestra selector)
 * 
 * DOMINIOS POR PAÍS:
 * - Alemania: bostonam.de / bostonassetmanager.de → Idioma alemán (de)
 * - España: bostonam.es / bostonassetmanager.es → Idioma español (es)
 * - Francia: bostonam.fr / bostonassetmanager.fr → Idioma francés (fr)
 * - Italia: bostonam.it / bostonassetmanager.it → Idioma italiano (it)
 * - Suecia: bostonam.se / bostonassetmanager.se → Idioma sueco (sv)
 */

export interface DomainConfig {
  domain: string
  language: string
  country: string
  countryCode: string
  isSelector: boolean
}

export const domains: DomainConfig[] = [
  // Dominios base (selector)
  { domain: 'bostonam.eu', language: 'selector', country: 'Europa', countryCode: 'EU', isSelector: true },
  { domain: 'bostonassetmanager.eu', language: 'selector', country: 'Europa', countryCode: 'EU', isSelector: true },
  
  // Alemania
  { domain: 'bostonam.de', language: 'de', country: 'Alemania', countryCode: 'DE', isSelector: false },
  { domain: 'bostonassetmanager.de', language: 'de', country: 'Alemania', countryCode: 'DE', isSelector: false },
  
  // España
  { domain: 'bostonam.es', language: 'es', country: 'España', countryCode: 'ES', isSelector: false },
  { domain: 'bostonassetmanager.es', language: 'es', country: 'España', countryCode: 'ES', isSelector: false },
  
  // Francia
  { domain: 'bostonam.fr', language: 'fr', country: 'Francia', countryCode: 'FR', isSelector: false },
  { domain: 'bostonassetmanager.fr', language: 'fr', country: 'Francia', countryCode: 'FR', isSelector: false },
  
  // Italia
  { domain: 'bostonam.it', language: 'it', country: 'Italia', countryCode: 'IT', isSelector: false },
  { domain: 'bostonassetmanager.it', language: 'it', country: 'Italia', countryCode: 'IT', isSelector: false },
  
  // Suecia
  { domain: 'bostonam.se', language: 'sv', country: 'Suecia', countryCode: 'SE', isSelector: false },
  { domain: 'bostonassetmanager.se', language: 'sv', country: 'Suecia', countryCode: 'SE', isSelector: false },
]

// Mapeo rápido de dominio a idioma
export const domainToLanguage: Record<string, string> = Object.fromEntries(
  domains.map(d => [d.domain, d.language])
)

// Mapeo de idioma a dominio principal (versión corta)
export const languageToDomain: Record<string, string> = {
  de: 'bostonam.de',
  es: 'bostonam.es',
  fr: 'bostonam.fr',
  it: 'bostonam.it',
  sv: 'bostonam.se',
}

// Dominios que muestran el selector
export const selectorDomains = domains
  .filter(d => d.isSelector)
  .map(d => d.domain)

// Helper para obtener la configuración de un dominio
export function getDomainConfig(hostname: string): DomainConfig | undefined {
  const domain = hostname.split(':')[0] // Remover puerto
  return domains.find(d => d.domain === domain)
}

// Helper para verificar si un dominio es válido
export function isValidDomain(hostname: string): boolean {
  const domain = hostname.split(':')[0]
  return domains.some(d => d.domain === domain)
}
