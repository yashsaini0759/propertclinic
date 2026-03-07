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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-dark shadow-luxury py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #CBA135, #E5BE6A)' }}>
                            <MdOutlineRealEstateAgent className="text-[#0B1F22] text-xl" />
                        </div>
                        <div className="leading-tight">
                            <span className="block text-white font-heading font-bold text-base tracking-wide group-hover:text-[#CBA135] transition-colors">
                                Property Clinic
                            </span>
                            <span className="block text-[#CBA135] text-[9px] tracking-[0.2em] uppercase font-body font-medium">
                                Kashipur
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${location.pathname === link.path
                                    ? 'text-[#CBA135]'
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] rounded bg-[#CBA135] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white text-2xl focus:outline-none p-2"
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
                            background: 'rgba(11, 31, 34, 0.97)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            borderLeft: '1px solid rgba(203,161,53,0.2)',
                        }}
                    >
                        {/* Gold top accent */}
                        <div className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{ background: 'linear-gradient(90deg, transparent, #CBA135, #E5BE6A)' }} />

                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
                            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #CBA135, #E5BE6A)' }}>
                                    <MdOutlineRealEstateAgent className="text-[#0B1F22] text-base" />
                                </div>
                                <span className="text-white font-heading font-bold text-sm">Property Clinic</span>
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
                                        className={`flex items-center justify-between py-3.5 px-4 rounded-xl font-body font-medium text-base transition-all ${location.pathname === link.path
                                            ? 'text-[#CBA135] bg-[#CBA135]/10'
                                            : 'text-white/80 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135]" />
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
