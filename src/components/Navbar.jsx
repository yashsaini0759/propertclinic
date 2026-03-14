import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdOutlineRealEstateAgent } from 'react-icons/md'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on route change
    useEffect(() => { setMenuOpen(false) }, [location])

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled
                    ? 'glass-dark shadow-luxury py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/images/logo/property_clinic_main_logo.png"
                            alt="Kashi Property Clinic"
                            className="h-20 md:h-24 w-auto object-contain"
                            loading="eager"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group text-white hover:text-[#4A6FA5] hover-underline-animation`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] rounded bg-[#C0392B] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white hover:text-[#4A6FA5] transition-colors text-2xl focus:outline-none p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </motion.header>

            {/* Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40"
                        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Right-side Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                        className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
                        style={{
                            width: 'min(320px, 85vw)',
                            background: 'rgba(15, 26, 42, 0.97)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderLeft: '1px solid rgba(30, 77, 143, 0.2)',
                        }}
                    >
                        {/* Blue top accent */}
                        <div className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{ background: 'linear-gradient(90deg, transparent, #1E4D8F, #4A6FA5)' }} />

                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <img
                                    src="/images/logo/property_clinic_main_logo.png"
                                    alt="Kashi Property Clinic"
                                    className="h-20 w-auto object-contain"
                                    loading="eager"
                                />
                            </Link>
                            <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white p-1" aria-label="Close menu">
                                <FiX size={22} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-col flex-1 px-5 py-6 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 + 0.1, duration: 0.35 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={`flex items-center justify-between py-3.5 px-4 rounded-xl font-body font-medium text-base transition-all text-white hover:text-[#4A6FA5] ${location.pathname === link.path
                                            ? 'bg-[#1E4D8F]/10'
                                            : 'hover:bg-[#1E4D8F]/10'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
