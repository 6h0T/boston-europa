# UI Kit - Boston Asset Manager

## 🎨 Paleta de Colores

### Variables CSS Estándar
Todas las páginas deben usar estas variables CSS consistentes:

```css
.nombre-seccion-estatico {
  --saas-primary: #1d3969;      /* Azul principal */
  --saas-accent: #2563eb;       /* Azul de acento */
  --saas-light: #f8fafc;        /* Gris claro de fondo */
  --saas-border: #e2e8f0;       /* Bordes */
  --saas-text: #374151;         /* Texto principal */
  --saas-muted: #64748b;        /* Texto secundario */
  --saas-success: #059669;      /* Verde de éxito */
}
```

### Colores Principales

| Color | Hex | Uso |
|-------|-----|-----|
| **Azul Principal** | `#1d3969` | Títulos, elementos principales, branding |
| **Azul de Acento** | `#2563eb` | Botones, enlaces, highlights |
| **Gris Claro** | `#f8fafc` | Fondos de secciones |
| **Gris Borde** | `#e2e8f0` | Bordes, separadores |
| **Texto Principal** | `#374151` | Texto del cuerpo |
| **Texto Secundario** | `#64748b` | Texto de apoyo, subtítulos |
| **Verde Éxito** | `#059669` | Estados de éxito, confirmaciones |

### Gradientes

#### Gradiente Principal (Botones y Hero)
```css
background: linear-gradient(135deg, var(--saas-primary), var(--saas-accent));
/* o */
background: linear-gradient(135deg, #1d3969, #2563eb);
```

#### Gradiente de Fondo (Secciones)
```css
background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
```

#### Gradiente Sutil (Contenedores de Iconos)
```css
background: linear-gradient(135deg, rgba(29, 57, 105, 0.08), rgba(37, 99, 235, 0.08));
```

### Sombras

#### Sombras Estándar
```css
/* Sombra ligera */
box-shadow: 0 4px 15px rgba(29, 57, 105, 0.1);

/* Sombra media */
box-shadow: 0 8px 25px rgba(29, 57, 105, 0.15);

/* Sombra intensa (hover) */
box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);

/* Sombra para tarjetas */
box-shadow: 0 15px 35px rgba(29, 57, 105, 0.12);
```

---

## 📝 Tipografía

### Font Family
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Jerarquía de Títulos

#### Título Principal (H1)
```css
.title {
    font-size: 3rem;           /* 48px */
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--saas-primary);
}

/* Responsive */
@media (max-width: 768px) {
    .title {
        font-size: 2.2rem;     /* 35.2px */
    }
}
```

#### Subtítulo (H2)
```css
.subtitle {
    font-size: 1.4rem;         /* 22.4px */
    margin-bottom: 30px;
    opacity: 0.9;
    line-height: 1.5;
    color: var(--saas-muted);
}
```

#### Descripción / Párrafo
```css
.description {
    font-size: 1.2rem;         /* 19.2px */
    margin-bottom: 40px;
    opacity: 0.8;
    line-height: 1.6;
    color: var(--saas-text);
}
```

#### Título de Tarjeta (H3)
```css
.card-title {
    font-size: 1.5rem;         /* 24px */
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--saas-primary);
}
```

### Escala Tipográfica

| Elemento | Tamaño | Peso | Line Height | Letter Spacing |
|----------|--------|------|-------------|----------------|
| H1 (Hero) | 3rem (48px) | 800 | 1.1 | -0.02em |
| H2 (Subtítulo) | 1.4rem (22.4px) | 600 | 1.5 | normal |
| H3 (Tarjetas) | 1.5rem (24px) | 700 | 1.3 | normal |
| Párrafo | 1.2rem (19.2px) | 400 | 1.6 | normal |
| Botón CTA | 1.1rem (17.6px) | 700 | normal | 0.5px |
| Texto pequeño | 0.9rem (14.4px) | 400 | 1.4 | normal |

---

## 🎯 Iconos

### Estilo Visual Obligatorio
**IMPORTANTE**: Todos los iconos deben seguir el estilo minimalista con contenedor de fondo.

### Estructura de Iconos

#### Contenedor de Icono (Tarjetas)
```css
.icono-contenedor {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(29, 57, 105, 0.08), rgba(37, 99, 235, 0.08));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
}
```

#### Contenedor de Icono (Títulos)
```css
.title-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, rgba(29, 57, 105, 0.08), rgba(37, 99, 235, 0.08));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### Especificaciones SVG

#### Iconos SVG Recomendados
Usar iconos SVG de **Lucide/Feather** con estas características:
- **Stroke width**: 2
- **Tamaño**: 20-24px
- **Color**: `currentColor` (hereda del contenedor)
- **Estilo**: Line icons (outline, no fill)

#### Template SVG Base
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- paths aquí -->
</svg>
```

### Biblioteca de Iconos Comunes

#### Finanzas y Dinero

**Dólar/Dinero**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
</svg>
```

**Gráfico de Barras**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
</svg>
```

#### Navegación y Acciones

**Globo/Internacional**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>
```

**Objetivo/Target**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
</svg>
```

**Visión/Ojo**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
</svg>
```

**Estrella/Valores**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
```

### Ejemplos de Implementación

#### Tarjeta con Icono
```html
<div class="card">
    <div class="card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
    </div>
    <h3 class="card-title">Título</h3>
    <p class="card-description">Descripción</p>
</div>
```

#### Título con Icono
```html
<h3 class="section-title">
    <span class="title-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
        </svg>
    </span>
    Título de Sección
</h3>
```

### ❌ NO Usar / ✅ Usar

**❌ Evitar:**
- Emojis sin contenedor de fondo
- Iconos de diferentes estilos mezclados
- Iconos con fill (relleno sólido) sin ser consistente
- Tamaños inconsistentes
- Colores directos en lugar de currentColor

**✅ Usar:**
- Iconos SVG con stroke
- Contenedores con fondo gradiente sutil
- Tamaños consistentes (60px para tarjetas, 50px para títulos)
- Border-radius de 10-12px
- currentColor para heredar colores

---

## 🔘 Botones

### Botón CTA Principal
```css
.cta-button {
    display: inline-block;
    background: linear-gradient(135deg, var(--saas-primary), var(--saas-accent));
    color: white;
    padding: 15px 35px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(29, 57, 105, 0.3);
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    color: white;
    text-decoration: none;
}
```

### Variantes de Botones

#### Botón Secundario
```css
.btn-secondary {
    background: white;
    color: var(--saas-primary);
    border: 2px solid var(--saas-primary);
    padding: 15px 35px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--saas-primary);
    color: white;
    transform: translateY(-2px);
}
```

#### Botón Outline
```css
.btn-outline {
    background: transparent;
    color: var(--saas-accent);
    border: 2px solid var(--saas-accent);
    padding: 12px 30px;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background: var(--saas-accent);
    color: white;
}
```

---

## 📦 Componentes

### Tarjetas (Cards)

#### Tarjeta Estándar
```css
.card-item {
    background: white;
    border-radius: 16px;
    padding: 40px 30px;
    box-shadow: 0 4px 15px rgba(29, 57, 105, 0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--saas-border);
}

.card-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(29, 57, 105, 0.12);
}
```

#### Icono de Tarjeta
```css
.card-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(29, 57, 105, 0.08), rgba(37, 99, 235, 0.08));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--saas-primary);
}
```

### Contenedores

#### Contenedor Principal
```css
.seccion-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
    position: relative;
    z-index: 2;
    width: 100%;
}
```

#### Sección Full Width
```css
.seccion-section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: white;
    color: var(--saas-text);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    /* EXTENSIÓN A TODO EL VIEWPORT */
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    min-height: 800px;
}
```

### Grid de Tarjetas
```css
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 60px;
}

@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
```

---

## ✨ Animaciones

### Efectos de Entrada

#### Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated-element {
    animation: fadeInUp 0.6s ease-out forwards;
}
```

### Efectos Hover

#### Hover Lift
```css
.hover-element {
    transition: all 0.3s ease;
}

.hover-element:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(29, 57, 105, 0.12);
}
```

#### Hover Scale
```css
.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.05);
}
```

---

## 📱 Responsive Design

### Breakpoints Estándar

```css
/* Desktop Large (por defecto) */
/* 1400px+ */

/* Desktop */
@media (max-width: 1400px) {
    .seccion-container {
        max-width: 1200px;
    }
}

/* Tablet */
@media (max-width: 1024px) {
    .seccion-container {
        padding: 0 30px;
    }
    
    .title {
        font-size: 2.5rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .seccion-section {
        width: 100%;
        margin-left: 0;
        padding: 60px 0;
    }
    
    .seccion-container {
        padding: 0 15px;
    }
    
    .title {
        font-size: 2.2rem;
    }
    
    .subtitle {
        font-size: 1.2rem;
    }
    
    .description {
        font-size: 1rem;
    }
}
```

---

## 🎭 Estados y Transiciones

### Transiciones Estándar
```css
/* Transición suave general */
transition: all 0.3s ease;

/* Transición específica */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Transición rápida */
transition: all 0.2s ease;

/* Transición lenta */
transition: all 0.5s ease;
```

### Estados de Elementos

#### Hover
```css
element:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}
```

#### Focus
```css
element:focus {
    outline: 2px solid var(--saas-accent);
    outline-offset: 2px;
}
```

#### Active
```css
element:active {
    transform: scale(0.98);
}
```

---

## 📐 Espaciado

### Sistema de Espaciado

| Tamaño | Valor | Uso |
|--------|-------|-----|
| XS | 10px | Espacios mínimos |
| S | 20px | Espacios pequeños |
| M | 30px | Espacios medios |
| L | 40px | Espacios grandes |
| XL | 60px | Separación de secciones |
| XXL | 100px | Padding de secciones |

### Padding de Secciones
```css
/* Desktop */
padding: 100px 0;

/* Mobile */
@media (max-width: 768px) {
    padding: 60px 0;
}
```

### Margin entre Elementos
```css
/* Títulos */
margin-bottom: 20px;

/* Subtítulos */
margin-bottom: 30px;

/* Descripciones */
margin-bottom: 40px;

/* Entre secciones */
margin-top: 60px;
```

---

## 🔧 Utilidades CSS

### Reset Base
```css
.seccion-estatico * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Prevenir Scroll Horizontal
```css
/* OBLIGATORIO en todas las páginas */
body {
    overflow-x: hidden;
}
```

### Ajuste con Navbar/Footer
```css
/* Primera sección - elimina espacio con navbar */
.seccion-estatico .primera-seccion {
    margin-top: -60px;
}

/* Última sección - elimina espacio con footer */
.seccion-estatico .ultima-seccion {
    margin-bottom: -60px;
}
```

---

## 📋 Checklist de Implementación

### Al usar el UI Kit:

- [ ] Usar variables CSS estándar (`--saas-primary`, `--saas-accent`, etc.)
- [ ] Aplicar tipografía con jerarquía correcta
- [ ] Iconos SVG con contenedores de fondo gradiente
- [ ] Botones con gradiente y efectos hover
- [ ] Transiciones suaves (0.3s ease)
- [ ] Responsive design con breakpoints estándar
- [ ] Prevenir scroll horizontal (`overflow-x: hidden`)
- [ ] Ajustar espaciado con navbar/footer cuando corresponda
- [ ] Sombras consistentes con la paleta
- [ ] Animaciones de entrada cuando sea apropiado

---

## 🎨 Ejemplos de Uso

### Hero Section Completo
```html
<section class="hero-section" style="
    background: linear-gradient(135deg, var(--saas-primary), var(--saas-accent));
    padding: 100px 0;
    margin-top: -60px;
">
    <div class="hero-container" style="max-width: 1400px; margin: 0 auto; padding: 0 30px;">
        <h1 style="
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin-bottom: 20px;
            line-height: 1.1;
            letter-spacing: -0.02em;
        ">Título Principal</h1>
        
        <p style="
            font-size: 1.4rem;
            color: rgba(255,255,255,0.9);
            margin-bottom: 30px;
            line-height: 1.5;
        ">Subtítulo descriptivo</p>
        
        <a href="#" style="
            display: inline-block;
            background: white;
            color: var(--saas-primary);
            padding: 15px 35px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        ">Comenzar</a>
    </div>
</section>
```

---

**Última actualización:** Noviembre 2024  
**Versión:** 1.0  
**Proyecto:** Boston Asset Manager


https://bostonam.ar/wp-content/uploads/2023/03/LOGOWEBSITE-e1680142400144.png logo