import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const PARTICLE_COUNT = 18

function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
                const size = Math.random() * 6 + 3
                const left = Math.random() * 100
                const delay = Math.random() * 12
                const duration = Math.random() * 10 + 12
                return (
                    <div
                        key={i}
                        className="particle absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            bottom: '-20px',
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                            background: i % 3 === 0
                                ? 'rgba(203,161,53,0.35)'
                                : i % 3 === 1
                                    ? 'rgba(255,255,255,0.15)'
                                    : 'rgba(74,111,165,0.3)',
                        }}
                    />
                )
            })}
        </div>
    )
}

const textVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { delay: i * 0.18, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function HeroSection() {
    const heroRef = useRef(null)

    // Subtle parallax on scroll
    useEffect(() => {
        const el = heroRef.current
        if (!el) return
        const onScroll = () => {
            const scrolled = window.scrollY
            const bg = el.querySelector('.hero-bg')
            if (bg) bg.style.transform = `translateY(${scrolled * 0.3}px)`
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: '#0B1F22' }}
        >
            {/* Hero Background Image with Parallax */}
            <div className="hero-bg absolute inset-0 scale-110">
                <img
                    src="/images/hero_property.png"
                    alt="Luxury Property"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(180deg, rgba(11,31,34,0.4) 0%, rgba(11,31,34,0.15) 40%, rgba(11,31,34,0.75) 80%, rgba(11,31,34,0.95) 100%),
              linear-gradient(135deg, rgba(15,61,62,0.7) 0%, rgba(11,31,34,0.3) 100%)
            `
                    }}
                />
            </div>

            {/* Floating Particles */}
            <Particles />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center pt-32 pb-16">
                <div className="max-w-3xl mx-auto">
                    {/* Tag */}
                    <motion.p
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="section-tag mb-5 inline-flex items-center justify-center gap-2"
                    >
                        <span className="w-8 h-px bg-[#CBA135] inline-block" />
                        Building Trust Since 2018
                        <span className="w-8 h-px bg-[#CBA135] inline-block" />
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-heading text-white leading-[1.1] mb-6"
                        style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                    >
                        Your Trusted{' '}
                        <span className="italic" style={{ color: '#CBA135' }}>
                            Real Estate
                        </span>
                        <br />
                        Partner
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white/70 font-body mb-10 max-w-xl leading-relaxed"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
                    >
                        Comprehensive solutions for all your property needs — from search to legal
                        transactions, home loans, and expert post-sale support.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        custom={3}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="https://wa.me/9627088818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold inline-flex items-center justify-center gap-2 text-sm"
                        >
                            ENQUIRE NOW
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link
                            to="/properties"
                            className="btn-outline-gold inline-flex items-center justify-center gap-2 text-sm"
                        >
                            View Properties
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Bar — in flow, below buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="mt-10 max-w-2xl mx-auto"
                >
                    <div className="glass rounded-2xl px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-white/20">
                        {[
                            { num: '150+', label: 'Trusted Services' },
                            { num: '15+', label: 'Expert Team Members' },
                            { num: '2018', label: 'Est. Year' },
                        ].map((item) => (
                            <div key={item.label} className="flex-1 text-center sm:px-6">
                                <p className="font-heading text-2xl font-bold" style={{ color: '#CBA135' }}>
                                    {item.num}
                                </p>
                                <p className="text-white/60 text-xs font-body tracking-wide mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
