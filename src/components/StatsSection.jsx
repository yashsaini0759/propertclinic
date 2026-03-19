import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
    { value: 150, suffix: '+', label: 'Trusted Services' },
    { value: 15, suffix: '+', label: 'Expert Team Members' },
    { value: 8, suffix: '+', label: 'Years of Experience' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

// Alternating color pattern: dark, blue, dark, blue
const numberColors = ['#0F1F3A', '#1E4D8F', '#0F1F3A', '#1E4D8F']

function useCountUp(target, duration = 2000, isActive = false) {
    const [count, setCount] = useState(0)
    const raf = useRef(null)

    useEffect(() => {
        if (!isActive) return
        const start = performance.now()
        const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) raf.current = requestAnimationFrame(animate)
            else setCount(target)
        }
        raf.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(raf.current)
    }, [isActive, target, duration])

    return count
}

function StatItem({ stat, index, isActive }) {
    const count = useCountUp(stat.value, 2200, isActive)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center text-center px-6"
        >
            {/* Large number */}
            <span
                className="font-body font-light leading-none mb-3"
                style={{
                    fontSize: 'clamp(3rem, 6vw, 4.2rem)',
                    color: numberColors[index],
                    letterSpacing: '-0.02em',
                }}
            >
                {count.toLocaleString()}{stat.suffix}
            </span>

            {/* Label */}
            <span
                className="font-body font-semibold tracking-[0.18em] uppercase text-[0.7rem]"
                style={{ color: '#5A6A80' }}
            >
                {stat.label}
            </span>
        </motion.div>
    )
}

export default function StatsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section className="py-16 px-4 sm:px-6" style={{ background: 'rgba(194, 240, 255, 0.15)' }}>
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-10"
                >
                    <h2
                        className="font-heading font-bold text-[#0F1F3A] mb-4 leading-tight"
                        style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
                    >
                        Numbers That{' '}
                        <span className="italic text-[#1E4D8F]">Speak</span>
                    </h2>
                    <p className="text-[#5A6A80] font-body text-[0.95rem] max-w-lg mx-auto leading-relaxed">
                        A testament to our unwavering commitment to quality and client satisfaction.
                    </p>
                </motion.div>

                {/* Stats row */}
                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4"
                >
                    {stats.map((stat, i) => (
                        <StatItem key={stat.label} stat={stat} index={i} isActive={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}
