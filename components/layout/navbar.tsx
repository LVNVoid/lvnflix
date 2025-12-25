'use client';

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLink = [
    { href: '/', label: 'Home' },
    { href: '/series', label: 'Series' },
    { href: '/movies', label: 'Movies' },
    { href: '/new-popular', label: 'New & Popular' },
    { href: '/my-list', label: 'My List' },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="absolute top-0 w-full z-50 py-4 md:py-6 bg-gradient-to-b from-background/90 to-transparent transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={110} height={100} className="w-24 md:w-[110px] h-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
                        {navLink.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 text-foreground">
                    <button
                        className="md:hidden p-2 text-foreground/80 hover:text-foreground"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute min-h-screen top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/10 shadow-lg md:hidden animate-in slide-in-from-top-2 duration-200">
                    <ul className="flex flex-col p-4 gap-4 text-center">
                        {navLink.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block py-2 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar