# Configuración de Dominios - Boston Asset Manager Europa

## Arquitectura de Dominios

### Dominio Base (Selector de Países)
| Dominio | Función |
|---------|---------|
| `bostonam.eu` | Muestra selector de países |
| `bostonassetmanager.eu` | Redirige a selector de países |

### Dominios por País
| País | Dominio Corto | Dominio Largo | Idioma |
|------|---------------|---------------|--------|
| Alemania | `bostonam.de` | `bostonassetmanager.de` | Alemán (de) |
| España | `bostonam.es` | `bostonassetmanager.es` | Español (es) |
| Francia | `bostonam.fr` | `bostonassetmanager.fr` | Francés (fr) |
| Italia | `bostonam.it` | `bostonassetmanager.it` | Italiano (it) |
| Suecia | `bostonam.se` | `bostonassetmanager.se` | Sueco (sv) |

## Flujo de Usuario

```
Usuario visita bostonam.eu
        ↓
Muestra selector de países
        ↓
Usuario selecciona "España"
        ↓
Opción A: Cambia idioma localmente (actual)
Opción B: Redirige a bostonam.es (opcional)
```

## Configuración en Hosting (Netlify/Vercel)

### Opción 1: Un solo deploy con múltiples dominios

En Netlify o Vercel, puedes agregar todos los dominios a un mismo proyecto:

1. **Netlify**: Site settings → Domain management → Add domain alias
2. **Vercel**: Settings → Domains → Add domain

Agregar todos los dominios:
- bostonam.eu (principal)
- bostonassetmanager.eu
- bostonam.de
- bostonassetmanager.de
- bostonam.es
- bostonassetmanager.es
- bostonam.fr
- bostonassetmanager.fr
- bostonam.it
- bostonassetmanager.it
- bostonam.se
- bostonassetmanager.se

### Opción 2: Configuración DNS

Para cada dominio, configurar registros DNS apuntando al hosting:

```
Tipo: CNAME o A
Host: @ (o www)
Valor: [tu-proyecto].netlify.app (o IP de Vercel)
```

## Cómo Funciona el Código

### 1. Middleware (`middleware.ts`)
- Detecta el dominio de la solicitud
- Establece cookies `domain-language` y `skip-country-selector`
- Ejecuta en cada request del servidor

### 2. PageLoader (`components/ui/page-loader.tsx`)
- Lee las cookies del middleware
- Si hay idioma de dominio → aplica idioma automáticamente
- Si es dominio base → muestra selector de países

### 3. CountrySelector (`components/ui/country-selector.tsx`)
- Muestra banderas de países disponibles
- Al seleccionar, cambia el idioma con i18n

## Desarrollo Local

Para probar diferentes dominios localmente:

### Opción 1: Modificar hosts file
```
# Windows: C:\Windows\System32\drivers\etc\hosts
# Mac/Linux: /etc/hosts

127.0.0.1 bostonam.es
127.0.0.1 bostonam.de
127.0.0.1 bostonam.it
```

### Opción 2: Modificar middleware temporalmente
En `middleware.ts`, cambiar:
```typescript
'localhost': 'es', // Probar español
// o
'localhost': 'de', // Probar alemán
```

## Archivos Relevantes

- `middleware.ts` - Detección de dominio en servidor
- `lib/domains.ts` - Configuración centralizada de dominios
- `lib/domain-utils.ts` - Utilidades para manejo de dominios
- `components/ui/page-loader.tsx` - Lógica de carga y selector
- `components/ui/country-selector.tsx` - UI del selector de países
- `lib/i18n.ts` - Traducciones por idioma

## Notas Importantes

1. **SEO**: Cada dominio tendrá su propio contenido en el idioma correspondiente
2. **Cookies**: Se usan cookies para persistir la selección de idioma
3. **Sin rutas de idioma**: No se usan rutas como `/es`, `/de`, etc. El idioma se determina por dominio
4. **Cambio de país**: El usuario puede cambiar de país desde el footer ("Cambiar país")
