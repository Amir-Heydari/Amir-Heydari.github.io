'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SkillsCarousel from '@/helper/SkillsCarousel'

// Skill data - replace with your own skills
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Three.js', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'GSAP', level: 80 },
  { name: 'Redux', level: 85 },
  { name: 'GraphQL', level: 70 },
  { name: 'Framer Motion', level: 75 },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    )

    // Skills bars animation
    const skillBars = gsap.utils.toArray('.skill-progress-bar')

    skillBars.forEach((bar: any) => {
      const level = bar.getAttribute('data-level')

      gsap.fromTo(
        bar,
        { width: 0 },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-background/30 backdrop-blur-sm"
    >
      <SkillsCarousel />
    </section>
  )
}