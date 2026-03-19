import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

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
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setMenuOpen(false) }, [location])

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
                style={
                    scrolled
                        ? {
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 2px 20px rgba(15, 31, 58, 0.06)',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                        }
                        : {
                            background: 'transparent',
                            paddingTop: '1.25rem',
                            paddingBottom: '1.25rem',
                        }
                }
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group shrink-0">
                        <img
                            src="/images/logo/property_clinic_main_logo.png"
                            alt="Kashi Property Clinic"
                            className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
                            style={{ filter: scrolled ? 'none' : 'brightness(1)' }}
                            loading="eager"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group"
                                style={{ color: scrolled ? '#0F1F3A' : '#FFFFFF' }}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px] rounded bg-[#1E4D8F] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/9627088818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm font-semibold tracking-wide px-5 py-2 rounded-lg transition-all duration-300"
                            style={
                                scrolled
                                    ? {
                                        background: '#C0392B',
                                        color: '#FFFFFF',
                                        boxShadow: '0 4px 14px rgba(192,57,43,0.3)',
                                    }
                                    : {
                                        background: 'rgba(255,255,255,0.15)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.4)',
                                        color: '#FFFFFF',
                                    }
                            }
                        >
                            Enquire Now
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-2xl focus:outline-none p-2 rounded-lg transition-colors"
                        style={{ color: scrolled ? '#0F1F3A' : '#FFFFFF' }}
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
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[1000]"
                        style={{ background: 'rgba(15,31,58,0.5)', backdropFilter: 'blur(4px)' }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Right Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                        className="fixed top-0 right-0 bottom-0 z-[1001] flex flex-col"
                        style={{
                            width: 'min(300px, 82vw)',
                            background: 'rgba(255,255,255,0.98)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderLeft: '1px solid rgba(15,31,58,0.1)',
                            boxShadow: '-8px 0 40px rgba(15,31,58,0.12)',
                        }}
                    >
                        {/* Top blue accent */}
                        <div className="absolute top-0 left-0 right-0 h-[3px]"
                            style={{ background: 'linear-gradient(90deg, #1E4D8F, #4A6FA5)' }} />

                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <img src="/images/logo/property_clinic_main_logo.png" alt="Kashi Property Clinic" className="h-16 w-auto object-contain" />
                            </Link>
                            <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-gray-700 p-1" aria-label="Close menu">
                                <FiX size={22} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col flex-1 px-5 py-6 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center justify-between py-3.5 px-4 rounded-xl font-body font-medium text-base transition-all"
                                        style={{
                                            color: location.pathname === link.path ? '#1E4D8F' : '#0F1F3A',
                                            background: location.pathname === link.path ? 'rgba(30,77,143,0.07)' : 'transparent',
                                        }}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E4D8F]" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-6 px-4">
                                <a
                                    href="https://wa.me/9627088818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-red w-full justify-center"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
