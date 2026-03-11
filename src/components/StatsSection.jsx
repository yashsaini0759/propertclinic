import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
    { value: 150, suffix: '+', label: 'Trusted Services', icon: '🏠' },
    { value: 15, suffix: '+', label: 'Expert Team Members', icon: '👥' },
    { value: 8, suffix: '+', label: 'Years of Experience', icon: '📅' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
]

function useCountUp(target, duration = 2000, isActive = false) {
    const [count, setCount] = useState(0)
    const raf = useRef(null)

    useEffect(() => {
        if (!isActive) return
        const start = performance.now()
        const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
            setCount(Math.floor(eased * target))
            if (progress < 1) raf.current = requestAnimationFrame(animate)
            else setCount(target)
        }
        raf.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(raf.current)
    }, [isActive, target, duration])

    return count
}

function StatCard({ stat, index, isActive }) {
    const count = useCountUp(stat.value, 2200, isActive)
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: index * 0.14, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass rounded-2xl p-6 text-center group hover:border-[#4A6FA5]/40 transition-all duration-300 cursor-default"
            style={{
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
            }}
            whileHover={{ y: -6 }}
        >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="font-heading font-bold mb-1" style={{ fontSize: '2.8rem', color: '#4A6FA5', lineHeight: 1 }}>
                {count}{stat.suffix}
            </p>
            <p className="text-white/70 font-body text-sm tracking-wide">{stat.label}</p>
        </motion.div>
    )
}

export default function StatsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section
            className="relative py-28 px-4 sm:px-6 overflow-hidden"
            style={{ background: '#0F1A2A' }}
        >
            {/* Subtle light ray */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(74,111,165,0.4) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="section-tag mb-3">Our Achievement</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Numbers That{' '}
                        <span className="italic font-bold text-[#4A6FA5]">Speak</span>
                    </h2>
                    <div className="accent-divider mx-auto" />
                </motion.div>

                {/* Stat Cards */}
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} isActive={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}
