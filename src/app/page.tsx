'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    gsap.registerPlugin(ScrollTrigger)

    const sections = document.querySelectorAll('.reveal')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      )
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
    </main>
  )
}