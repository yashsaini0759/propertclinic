import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const slides = [
    {
        id: 0,
        name: 'Jannat Villas',
        tagline: 'Luxury Living',
        slogan: 'Not just a house,\na place where dreams live.',
        description: 'Experience the finest in luxury villa living with world-class amenities in the heart of Kashipur.',
        location: 'Kashipur, Uttarakhand',
        image: '/images/jannat_vilas/jannat_vilas_hero_banner.png',
        slug: 'jannat-villas',
    },
    {
        id: 1,
        name: 'Vedanta Greens',
        tagline: 'Peace & Lifestyle',
        slogan: 'Peace and pride,\nall in one place.',
        description: 'Beautifully crafted 2BHK & 3BHK villas surrounded by lush greenery in a stellar location.',
        location: 'Kashipur, Uttarakhand',
        image: '/images/vedanta_greens/vedanta_greens_hero_banner.png',
        slug: 'vedanta-greens',
    },
    {
        id: 2,
        name: 'Vedanta Heights',
        tagline: 'Premium Residences',
        slogan: 'Live the life\nyou\'ve always imagined.',
        description: 'Elegantly crafted residences that set the highest standard for luxury living in Kashipur.',
        location: 'Kashipur, Uttarakhand',
        image: '/images/vedanta_heights/vedanta_heights_hero_banner.png',
        slug: 'vedanta-heights',
    },
]

// Staggered animation for each text line
const lineVariants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            delay: i * 0.13,
            duration: 0.65,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
    exit: {
        opacity: 0,
        y: -14,
        filter: 'blur(2px)',
        transition: { duration: 0.3 },
    },
}

const imageVariants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
    exit: {
        opacity: 0,
        transition: { duration: 1.2, ease: 'easeOut' },
    },
}

export default function HeroSection() {
    const [current, setCurrent] = useState(0)
    const timerRef = useRef(null)

    const goTo = useCallback((idx) => setCurrent(idx), [])

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % slides.length)
    }, [])

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + slides.length) % slides.length)
    }, [])

    const resetTimer = () => {
        clearInterval(timerRef.current)
        timerRef.current = setInterval(next, 5500)
    }

    useEffect(() => {
        timerRef.current = setInterval(next, 5500)
        return () => clearInterval(timerRef.current)
    }, [next])

    const slide = slides[current]

    return (
        <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 560 }}>

            {/* ── Full-width background image ── */}
            <AnimatePresence>
                <motion.div
                    key={`bg-${current}`}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />

                    {/* Bottom shadow for scroll indicator */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(10,20,40,0.5), transparent)' }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* ── Floating content card — left side ── */}
            <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`card-${current}`}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full max-w-[440px] md:rounded-2xl overflow-hidden mt-20 lg:mt-0 md:bg-white/5 md:backdrop-blur-[18px]"
                    >
                        {/* Red top accent strip — hidden on mobile */}
                        <div className="hidden md:block h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #C0392B, #E74C3C)' }} />

                        <div className="px-7 py-8 sm:px-9 sm:py-10">

                            {/* Tagline */}
                            <motion.div
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={0}
                                className="flex items-center gap-2 mb-6"
                            >
                                <span className="w-6 h-[1.5px] bg-[#C0392B]" />
                                <span className="section-tag text-white/70">{slide.tagline}</span>
                            </motion.div>

                            {/* Slogan — main headline */}
                            <div className="mb-5">
                                {slide.slogan.split('\n').map((line, i) => (
                                    <motion.p
                                        key={`${current}-line-${i}`}
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        custom={i + 1}
                                        className="font-heading font-bold text-white leading-tight"
                                        style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                            </div>

                            {/* Location */}
                            <motion.p
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={3}
                                className="text-white/50 font-body text-xs tracking-[0.18em] uppercase mb-4"
                            >
                                📍 {slide.location}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={4}
                                className="text-white/70 font-body text-[0.92rem] leading-relaxed mb-8"
                            >
                                {slide.description}
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={5}
                                className="flex flex-col sm:flex-row gap-3"
                            >
                                <a
                                    href="https://wa.me/9627088818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-red flex-1 justify-center"
                                >
                                    Enquire Now <FiArrowRight />
                                </a>
                                <Link
                                    to={`/property/${slide.slug}`}
                                    className="btn-outline flex-1 justify-center"
                                >
                                    View Details
                                </Link>
                            </motion.div>

                            {/* Project name */}
                            <motion.p
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={6}
                                className="mt-7 text-white/35 font-heading italic text-sm"
                            >
                                — {slide.name}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Bottom controls bar ── */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => { prev(); resetTimer() }}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        style={{
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        <BsChevronLeft size={15} />
                    </button>
                    <button
                        onClick={() => { next(); resetTimer() }}
                        aria-label="Next"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        style={{
                            background: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        <BsChevronRight size={15} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => { goTo(i); resetTimer() }}
                            aria-label={`Slide ${i + 1}`}
                            className={`banner-dot${i === current ? ' active' : ''}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <span className="text-white/45 font-body text-xs tracking-widest">
                    {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
            </div>
        </section>
    )
}
