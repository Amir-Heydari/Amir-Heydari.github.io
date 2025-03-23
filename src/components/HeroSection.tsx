'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

export default function HeroSection() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
            .fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                '-=0.6'
            )
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <AnimatedBackground />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-block mb-6 p-2 border border-border rounded-full"
                >
                    <span className="text-sm px-3 py-1">Front-End & Mobile Developer</span>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                >
                    Amir Heydari
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-secondary"
                >
                    Crafting modern, performant, and visually stunning applications with cutting-edge technologies.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <a
                        href="#skills"
                        className="inline-block px-8 py-3 bg-border text-primary rounded-lg hover:bg-hover transition-colors duration-300"
                    >
                        View My Skills
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center items-start p-1">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                        }}
                        className="w-1 h-2 bg-accent rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}