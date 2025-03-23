'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MyPicture from "@/assests/images/about.png"
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
            My Journey in Development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative h-64 md:h-[38rem] w-full overflow-hidden rounded-lg">
              <Image
                src={MyPicture}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div ref={contentRef}>
            {/* <h3 className="text-2xl font-bold mb-6">A Bit About Me</h3> */}

            <p className="text-secondary mb-6">
              A front-end developer with three years of experience in building modern web applications. I do my best to create high-performance, scalable, and interactive applications, mainly using React, React Native, and Next.js. While my main focus is front-end development, I also have experience with back-end technologies, particularly Express.js, allowing me to build full-stack solutions when needed.
            </p>

            <p className="text-secondary mb-8">
              I have a solid understanding of design patterns, data structures, and maintainable software architecture, which helps me write clean, efficient, and scalable code. I'm also experienced in Linux environments and have some knowledge of CI/CD tools like Docker, which has helped me streamline development workflows.
            </p>

            <p className="text-secondary mb-8">
              I’ve also taken on project management responsibilities, like reviewing code, organizing tasks, and making sure things run smoothly. I’m always learning and exploring new technologies to improve my skills and keep up with the latest trends in development.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-accent mb-3 font-medium">Education</h4>
                <p className="font-medium">BSc in Computer Science</p>
                <p className="text-secondary">Azad univerity</p>
              </div>

              <div>
                <h4 className="text-accent mb-3 font-medium">Location</h4>
                <p className="font-medium">Tehran, IR</p>
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