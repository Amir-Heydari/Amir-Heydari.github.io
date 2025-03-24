'use client'

import { useEffect, useState } from 'react'
// import Lenis from '@studio-freight/lenis'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import AnimatedBackground from '@/components/AnimatedBackground'
import Loader from '@/helper/Loader'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // const lenis = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // })

    // function raf(time: number) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

    // gsap.registerPlugin(ScrollTrigger)

    // const sections = document.querySelectorAll('.reveal')
    // sections.forEach((section) => {
    //   gsap.fromTo(
    //     section,
    //     {
    //       y: 50,
    //       opacity: 0
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 0.8,
    //       ease: 'power3.out',
    //       scrollTrigger: {
    //         trigger: section,
    //         start: 'top 80%',
    //       },
    //     }
    //   )
    // })

    setTimeout(() => setIsLoading(false), 2000)

    // return () => {
    //   lenis.destroy()
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    // }
  }, [])

  return (
    <main>
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                delay: 0.2
              }
            }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.3
              }
            }}
          >
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>
    </main>
  )
}