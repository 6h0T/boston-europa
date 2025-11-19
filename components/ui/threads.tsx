"use client"

import React, { useRef, useEffect, useState } from "react"
import * as THREE from "three"

interface ThreadsProps {
  amplitude?: number
  distance?: number
  enableMouseInteraction?: boolean
}

const Threads: React.FC<ThreadsProps> = ({
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Cargar Vanta Globe dinámicamente
    const loadVanta = async () => {
      // Cargar el script de Vanta Globe desde archivo local
      const script = document.createElement("script")
      script.src = "/vanta.globe.min.js"
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        if ((window as any).VANTA && containerRef.current) {
          const effect = (window as any).VANTA.GLOBE({
            el: containerRef.current,
            THREE: THREE,
            mouseControls: enableMouseInteraction,
            touchControls: enableMouseInteraction,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            color2: 0x2563eb,
            size: 1.4,
            backgroundColor: 0x1d3969,
          })
          setVantaEffect(effect)
          
          // Forzar resize después de cargar
          setTimeout(() => {
            if (effect && effect.resize) {
              effect.resize()
            }
          }, 100)
        }
      }
    }

    loadVanta()

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [enableMouseInteraction])
  
  // Resize en cambios de ventana
  useEffect(() => {
    if (!vantaEffect) return
    
    const handleResize = () => {
      if (vantaEffect && vantaEffect.resize) {
        vantaEffect.resize()
      }
    }
    
    window.addEventListener('resize', handleResize)
    // Forzar resize inicial
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [vantaEffect])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full absolute inset-0"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default Threads
