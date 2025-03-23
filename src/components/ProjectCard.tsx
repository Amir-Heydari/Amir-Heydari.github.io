'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div 
      className="project-card rounded-lg overflow-hidden border border-border bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-secondary mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs rounded-full bg-border text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.githubUrl} 
            className="flex items-center text-accent hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-1">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
          <a 
            href={project.liveUrl} 
            className="flex items-center text-accent hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-1">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}