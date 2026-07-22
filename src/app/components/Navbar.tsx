"use client"

import { useEffect, useState } from "react";

const navLinks = [
    {href: '#home', label: "#Home"},
    {href: '#about', label: "#About"},
    {href: '#projects', label: "#Projects"},
    {href: '#experience', label: "#Experience"},
    {href: '#testimonials', label: "#Testimonials"},
    {href: '#contact', label: "#Contact"},
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.screenY > 40);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []) ;

    return (
        <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl' : 'bg-transparent' }`}>
            <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between">
                {/* Logo */}
            </div>
        </nav>
    )
}

export default Navbar;