'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './ProjectCard'

// Mock project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with cart functionality, payment integration, and responsive design.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Dashboard UI',
    description: 'An interactive dashboard with data visualization, real-time updates, and modern UI components.',
    techStack: ['Vue.js', 'D3.js', 'Vuex', 'SCSS'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'A responsive social media application with real-time chat, notifications, and user authentication.',
    techStack: ['React', 'Firebase', 'Redux', 'Styled Components'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
]

export default function ProjectsSection() {
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
    
    // Staggered project cards animation
    const projectCards = gsap.utils.toArray('.project-card')
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
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
      id="projects" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A collection of my recent work showcasing my expertise in front-end development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}