import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { BsChevronDoubleDown } from 'react-icons/bs'
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
                                ? 'rgba(192,57,43,0.35)' // Red accent particles
                                : i % 3 === 1
                                    ? 'rgba(255,255,255,0.15)'
                                    : 'rgba(30,77,143,0.3)', // Primary blue particles
                        }}
                    />
                )
            })}
        </div>
    )
}

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" }
    }
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
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{ background: '#0F1A2A' }}
        >
            {/* Hero Background Image with Parallax */}
            <div className="hero-bg absolute inset-0 scale-110">
                <img
                    src="/images/hero_property.png"
                    alt="Luxury Property"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Lighter gradient overlay — not dull on mobile */}
                <div className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(180deg, rgba(11,31,34,0.25) 0%, rgba(11,31,34,0.05) 35%, rgba(11,31,34,0.6) 75%, rgba(11,31,34,0.88) 100%),
              linear-gradient(135deg, rgba(15,61,62,0.4) 0%, transparent 60%)
            `
                    }}
                />
            </div>

            {/* Floating Particles */}
            <Particles />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center pt-32 pb-16">
                <div className="max-w-3xl mx-auto -translate-y-3">
                    {/* Tag */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="flex justify-center mb-6"
                    >
                        <p className="section-tag inline-flex items-center justify-center gap-2 m-0 mt-8">
                            <span className="w-8 h-px bg-[#C0392B] inline-block" />
                            Building Trust Since 2018
                            <span className="w-8 h-px bg-[#C0392B] inline-block" />
                        </p>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-heading text-white leading-[1.2] mb-6 flex flex-col items-center text-center"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                    >
                        <span>Your Trusted</span>
                        <div className="mt-1 flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2">
                            <div className="relative inline-block">
                                <span className="italic font-bold text-[#4A6FA5]">
                                    Real Estate
                                </span>
                                <div className="absolute -bottom-1 left-[5%] w-[90%] h-1 bg-[#C0392B] rounded-full opacity-80" />
                            </div>
                            <span>Partner</span>
                        </div>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white/70 font-body mb-10 max-w-[640px] mx-auto leading-relaxed text-center"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
                    >
                        Comprehensive solutions for your property needs —<br className="hidden sm:block" />
                        from search and legal transactions to home loans and post-sale support.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://wa.me/9627088818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                        >
                            ENQUIRE NOW
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link
                            to="/properties"
                            className="btn-secondary !border-white !text-white hover:!bg-[#1E4D8F] hover:!border-[#1E4D8F] hover:!text-white inline-flex items-center justify-center gap-2 text-sm"
                        >
                            View Properties
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Bar — in flow, below buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="mt-10 max-w-2xl mx-auto"
                >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-2xl px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x divide-white/20">
                        {[
                            { num: '150+', label: 'Trusted Services' },
                            { num: '15+', label: 'Expert Team Members' },
                            { num: '2018', label: 'Est. Year' },
                        ].map((item) => (
                            <div key={item.label} className="flex-1 text-center sm:px-6">
                                <p className="font-heading text-2xl font-bold" style={{ color: '#4A6FA5' }}>
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
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 cursor-pointer group"
                onClick={() => {
                    const nextSectionOffset = window.innerHeight * 0.85
                    window.scrollTo({ top: nextSectionOffset, behavior: 'smooth' })
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-white/70 group-hover:text-white transition-colors duration-300 drop-shadow-lg"
                >
                    <BsChevronDoubleDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    )
}
