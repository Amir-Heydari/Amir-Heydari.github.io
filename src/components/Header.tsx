'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import transparentLogo from "@/assests/images/mini-transparent-logo.png"
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        // { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm py-4 shadow-md' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    href="#home"
                    className="text-2xl font-bold"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={transparentLogo} alt='Logo' width={50} height={50} />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex space-x-8"
                    >
                        {navItems.map((item, index) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-accent transition-colors duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-background/95 backdrop-blur-sm"
                >
                    <ul className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 hover:text-accent transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </header>
    )
}