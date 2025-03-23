'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
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
    
    // Image and content animations
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    )
    
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
              <Image 
                src="/api/placeholder/600/800"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 bg-border rounded-lg">
              <p className="text-lg font-medium">5+ Years Experience</p>
              <p className="text-sm text-secondary">Front-End Development</p>
            </div>
          </div>
          
          <div ref={contentRef}>
            <h3 className="text-2xl font-bold mb-6">Front-End Developer with a passion for creating modern web experiences</h3>
            
            <p className="text-secondary mb-6">
              I'm a front-end developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, responsive, and performant web applications using modern technologies like React, Next.js, and TypeScript.
            </p>
            
            <p className="text-secondary mb-8">
              With a strong background in UI/UX design and a passion for clean, efficient code, I strive to create seamless user experiences that are both visually appealing and highly functional. I enjoy working with complex problems and finding innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-accent mb-3 font-medium">Education</h4>
                <p className="font-medium">BSc in Computer Science</p>
                <p className="text-secondary">University Name, 2018</p>
              </div>
              
              <div>
                <h4 className="text-accent mb-3 font-medium">Location</h4>
                <p className="font-medium">San Francisco, CA</p>
                <p className="text-secondary">Available for remote work</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-border hover:bg-hover text-primary font-medium rounded-lg transition-colors duration-300"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}