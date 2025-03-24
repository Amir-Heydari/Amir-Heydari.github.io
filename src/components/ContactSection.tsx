'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'

export default function ContactSection() {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Social media links
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/Amir-Heydari',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amir-heydari-amjad',
      icon: FaLinkedin,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/qr/UTYUYY6YQFMTI1',
      icon: IoLogoWhatsapp,
    },
    {
      name: 'Email',
      url: 'mailto:aheydariamjad@gmail.com',
      icon: SiGmail,
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-background/30 backdrop-blur-sm relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-border/20 hover:bg-border/40 rounded-2xl text-accent hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
              aria-label={link.name}
            >

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-border/10 backdrop-blur-sm p-8 rounded-lg border border-border flex justify-center gap-5 items-center"
              >

                <link.icon size={45} />

                <h3 className="text-2xl font-bold">{link.name}</h3>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}


