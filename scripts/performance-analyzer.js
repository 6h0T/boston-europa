#!/usr/bin/env node

/**
 * Performance Analyzer for Boston Europa
 * Analiza el rendimiento del proyecto y sugiere optimizaciones
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

const log = {
  error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.cyan}ℹ ${msg}${colors.reset}`),
  header: (msg) => console.log(`\n${colors.bold}${colors.blue}═══ ${msg} ═══${colors.reset}\n`),
};

// Patrones problemáticos para el rendimiento
const PERFORMANCE_PATTERNS = {
  // Imports pesados
  heavyImports: [
    { pattern: /import.*from\s+['"]framer-motion['"]/, name: 'framer-motion (full)', suggestion: 'Usa import { motion } from "motion/react" o importa solo lo necesario' },
    { pattern: /import.*from\s+['"]lodash['"](?!\/)/, name: 'lodash (full bundle)', suggestion: 'Usa imports específicos: import debounce from "lodash/debounce"' },
    { pattern: /import.*from\s+['"]moment['"]/, name: 'moment.js', suggestion: 'Usa date-fns o dayjs que son más ligeros' },
    { pattern: /import\s*\*\s*as/, name: 'Wildcard import (*)', suggestion: 'Importa solo lo que necesitas para mejor tree-shaking' },
  ],
  
  // Problemas de renderizado
  renderingIssues: [
    { pattern: /useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*\}\s*\)(?!\s*,\s*\[)/, name: 'useEffect sin dependencias', suggestion: 'Añade array de dependencias para evitar re-renders infinitos' },
    { pattern: /style=\{\{[^}]+\}\}/, name: 'Inline styles object', suggestion: 'Mueve estilos a className o useMemo para evitar re-creación en cada render' },
    { pattern: /onClick=\{\(\)\s*=>/, name: 'Arrow function en onClick', suggestion: 'Usa useCallback para funciones en props si el componente es pesado' },
  ],
  
  // Imágenes no optimizadas
  imageIssues: [
    { pattern: /<img\s+(?![^>]*loading=)/, name: 'Imagen sin lazy loading', suggestion: 'Añade loading="lazy" o usa next/image' },
    { pattern: /src=["'][^"']+\.(png|jpg|jpeg)["'](?![^>]*width)/, name: 'Imagen sin dimensiones', suggestion: 'Añade width y height para evitar layout shift (CLS)' },
    { pattern: /<img\s/, name: 'Usando <img> en lugar de next/image', suggestion: 'Usa <Image> de next/image para optimización automática' },
  ],
  
  // Animaciones pesadas
  animationIssues: [
    { pattern: /animate=\{[^}]*\}(?![^>]*whileInView)/, name: 'Animación sin viewport trigger', suggestion: 'Usa whileInView para animar solo cuando sea visible' },
    { pattern: /transition:\s*['"]all/, name: 'transition: all', suggestion: 'Especifica propiedades exactas: transition: "transform 0.3s"' },
    { pattern: /box-shadow.*transition|transition.*box-shadow/, name: 'Animando box-shadow', suggestion: 'box-shadow es costoso, usa transform o opacity' },
  ],
  
  // Componentes client-side innecesarios
  clientIssues: [
    { pattern: /["']use client["']/, name: 'Componente client-side', suggestion: 'Verifica si realmente necesita ser client component' },
  ],
  
  // Bundle size
  bundleIssues: [
    { pattern: /import.*gsap/, name: 'GSAP import', suggestion: 'GSAP es pesado (~60KB), considera CSS animations para casos simples' },
    { pattern: /import.*three|import.*@react-three/, name: 'Three.js', suggestion: 'Three.js es muy pesado, usa dynamic import con next/dynamic' },
  ],
};

// Extensiones a analizar
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build'];

function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(item)) {
        getAllFiles(fullPath, files);
      }
    } else if (EXTENSIONS.includes(path.extname(item))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(PROJECT_ROOT, filePath);
  const issues = [];
  
  for (const [category, patterns] of Object.entries(PERFORMANCE_PATTERNS)) {
    for (const { pattern, name, suggestion } of patterns) {
      const matches = content.match(new RegExp(pattern, 'g'));
      if (matches) {
        issues.push({
          category,
          name,
          suggestion,
          count: matches.length,
          file: relativePath,
        });
      }
    }
  }
  
  // Analizar tamaño del archivo
  const lines = content.split('\n').length;
  if (lines > 300) {
    issues.push({
      category: 'fileSize',
      name: `Archivo grande (${lines} líneas)`,
      suggestion: 'Considera dividir en componentes más pequeños',
      count: 1,
      file: relativePath,
    });
  }
  
  return issues;
}

function analyzeImages() {
  const publicDir = path.join(PROJECT_ROOT, 'public');
  const issues = [];
  
  if (!fs.existsSync(publicDir)) return issues;
  
  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
          const sizeKB = stat.size / 1024;
          const relativePath = path.relative(PROJECT_ROOT, fullPath);
          
          if (sizeKB > 500) {
            issues.push({
              category: 'largeImage',
              name: `Imagen grande: ${relativePath}`,
              suggestion: `${Math.round(sizeKB)}KB - Comprime o convierte a WebP/AVIF`,
              count: 1,
              file: relativePath,
            });
          }
          
          if (ext !== '.webp' && ext !== '.avif') {
            issues.push({
              category: 'imageFormat',
              name: `Formato no óptimo: ${relativePath}`,
              suggestion: 'Convierte a WebP para mejor compresión',
              count: 1,
              file: relativePath,
            });
          }
        }
      }
    }
  }
  
  scanDir(publicDir);
  return issues;
}

function checkNextConfig() {
  const configPath = path.join(PROJECT_ROOT, 'next.config.mjs');
  const issues = [];
  
  if (fs.existsSync(configPath)) {
    const content = fs.readFileSync(configPath, 'utf-8');
    
    if (!content.includes('images')) {
      issues.push({
        category: 'config',
        name: 'next.config sin optimización de imágenes',
        suggestion: 'Configura images.formats: ["image/avif", "image/webp"]',
        count: 1,
        file: 'next.config.mjs',
      });
    }
    
    if (!content.includes('compress')) {
      issues.push({
        category: 'config',
        name: 'Compresión no configurada',
        suggestion: 'Añade compress: true en next.config',
        count: 1,
        file: 'next.config.mjs',
      });
    }
  }
  
  return issues;
}

function generateReport(allIssues) {
  log.header('REPORTE DE RENDIMIENTO');
  
  // Agrupar por categoría
  const byCategory = {};
  for (const issue of allIssues) {
    if (!byCategory[issue.category]) {
      byCategory[issue.category] = [];
    }
    byCategory[issue.category].push(issue);
  }
  
  const categoryNames = {
    heavyImports: '📦 Imports Pesados',
    renderingIssues: '🔄 Problemas de Renderizado',
    imageIssues: '🖼️  Imágenes en Código',
    animationIssues: '✨ Animaciones',
    clientIssues: '🖥️  Componentes Client-Side',
    bundleIssues: '📊 Bundle Size',
    fileSize: '📄 Archivos Grandes',
    largeImage: '🗂️  Imágenes Pesadas',
    imageFormat: '🎨 Formato de Imágenes',
    config: '⚙️  Configuración',
  };
  
  let totalIssues = 0;
  let criticalIssues = 0;
  
  for (const [category, issues] of Object.entries(byCategory)) {
    console.log(`\n${colors.bold}${categoryNames[category] || category}${colors.reset}`);
    console.log('─'.repeat(50));
    
    // Agrupar por archivo
    const byFile = {};
    for (const issue of issues) {
      if (!byFile[issue.file]) {
        byFile[issue.file] = [];
      }
      byFile[issue.file].push(issue);
    }
    
    for (const [file, fileIssues] of Object.entries(byFile)) {
      console.log(`\n  ${colors.cyan}${file}${colors.reset}`);
      for (const issue of fileIssues) {
        const isCritical = ['largeImage', 'heavyImports', 'bundleIssues'].includes(category);
        if (isCritical) {
          log.error(`    ${issue.name} (x${issue.count})`);
          criticalIssues++;
        } else {
          log.warning(`    ${issue.name} (x${issue.count})`);
        }
        console.log(`      ${colors.magenta}→ ${issue.suggestion}${colors.reset}`);
        totalIssues++;
      }
    }
  }
  
  // Resumen
  log.header('RESUMEN');
  console.log(`Total de problemas encontrados: ${totalIssues}`);
  console.log(`Problemas críticos: ${colors.red}${criticalIssues}${colors.reset}`);
  console.log(`Problemas menores: ${colors.yellow}${totalIssues - criticalIssues}${colors.reset}`);
  
  // Recomendaciones principales para LCP
  log.header('RECOMENDACIONES PARA MEJORAR LCP');
  console.log(`
${colors.green}1. Optimizar imágenes:${colors.reset}
   - Convierte imágenes a WebP/AVIF
   - Usa next/image con priority para imágenes above-the-fold
   - Comprime imágenes grandes (>100KB)

${colors.green}2. Reducir JavaScript inicial:${colors.reset}
   - Usa dynamic imports: const Component = dynamic(() => import('./Component'))
   - Mueve animaciones pesadas a whileInView
   - Lazy load componentes below-the-fold

${colors.green}3. Optimizar fuentes:${colors.reset}
   - Usa next/font para carga optimizada
   - Añade font-display: swap

${colors.green}4. Precargar recursos críticos:${colors.reset}
   - Añade <link rel="preload"> para recursos críticos
   - Usa priority={true} en imágenes hero

${colors.green}5. Reducir CSS no utilizado:${colors.reset}
   - Revisa clases de Tailwind no usadas
   - Considera purgeCSS en producción
`);
  
  return { totalIssues, criticalIssues };
}

// Main
console.log(`${colors.bold}${colors.cyan}
╔═══════════════════════════════════════════════════════╗
║     🚀 Performance Analyzer - Boston Europa 🚀        ║
╚═══════════════════════════════════════════════════════╝
${colors.reset}`);

log.info('Analizando archivos del proyecto...\n');

const files = getAllFiles(PROJECT_ROOT);
log.info(`Encontrados ${files.length} archivos para analizar`);

let allIssues = [];

// Analizar código
for (const file of files) {
  const issues = analyzeFile(file);
  allIssues = allIssues.concat(issues);
}

// Analizar imágenes
const imageIssues = analyzeImages();
allIssues = allIssues.concat(imageIssues);

// Analizar configuración
const configIssues = checkNextConfig();
allIssues = allIssues.concat(configIssues);

// Generar reporte
const { totalIssues, criticalIssues } = generateReport(allIssues);

// Exit code basado en issues críticos
process.exit(criticalIssues > 10 ? 1 : 0);
