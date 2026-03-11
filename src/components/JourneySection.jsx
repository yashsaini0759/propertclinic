import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { FiFlag, FiShield, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const milestones = [
    {
        id: 1,
        title: 'The Beginning',
        description: 'A vision to simplify real estate decisions and provide trusted guidance to buyers and investors.',
        icon: <FiFlag size={20} />,
        position: 'up', // for desktop alternating
    },
    {
        id: 2,
        title: 'Building Trust',
        description: 'Helping families and investors find the right properties with transparent and reliable advice.',
        icon: <FiShield size={20} />,
        position: 'down',
    },
    {
        id: 3,
        title: 'Growing Network',
        description: 'Expanding partnerships with premium developments and delivering better property opportunities.',
        icon: <FiTrendingUp size={20} />,
        position: 'up',
    },
    {
        id: 4,
        title: 'Your Trusted Partner',
        description: 'Today we continue helping clients discover homes, investments, and secure property futures.',
        icon: <FiCheckCircle size={20} />,
        position: 'down',
    },
]

export default function JourneySection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 75%", "center center"]
    })

    return (
        <section ref={containerRef} className="relative py-24 px-4 sm:px-6 overflow-hidden" style={{ background: '#F8F9FA' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <p className="section-tag mb-3">About & Journey</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1A2A] mb-4">
                        Our{' '}
                        <span className="italic font-bold text-[#1E4D8F] relative">
                            Journey
                            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#C0392B] rounded-full" />
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-xl mx-auto mt-6 text-lg">
                        From vision to trusted real estate guidance.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Desktop Curved SVG Line */}
                    <div
                        className="hidden md:block absolute pointer-events-none z-0"
                        style={{
                            top: '-28px', // matches dot center of highest card (-mt-10)
                            left: 'calc(12.5% - 9px)', // matches center of first column
                            right: 'calc(12.5% - 9px)', // matches center of last column
                            height: '104px', // vertical diff between highest & lowest dots
                        }}
                    >
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                            {/* Base track */}
                            <path
                                d="M 0,0 C 50,0 50,100 100,100 C 150,100 150,0 200,0 C 250,0 250,100 300,100"
                                fill="none"
                                stroke="#1E4D8F"
                                strokeWidth="2.5"
                                style={{ opacity: 0.15 }}
                            />
                            {/* Animated line */}
                            <motion.path
                                d="M 0,0 C 50,0 50,100 100,100 C 150,100 150,0 200,0 C 250,0 250,100 300,100"
                                fill="none"
                                stroke="#1E4D8F"
                                strokeWidth="2.5"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </div>

                    {/* Mobile Vertical SVG Line */}
                    <div className="block md:hidden absolute top-4 bottom-4 left-6 w-1 pointer-events-none">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 4 1000">
                            <motion.line
                                x1="2" y1="0" x2="2" y2="1000"
                                stroke="#1E4D8F"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                style={{ pathLength: scrollYProgress, opacity: 0.4 }}
                            />
                            <motion.line
                                x1="2" y1="0" x2="2" y2="1000"
                                stroke="#1E4D8F"
                                strokeWidth="2"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </div>

                    {/* Milestones Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                        {milestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                                className={`
                                    relative flex md:flex-col items-start md:items-center 
                                    gap-6 md:gap-4 group
                                    ${milestone.position === 'up' ? 'md:-mt-10' : 'md:mt-16'}
                                `}
                            >
                                {/* Milestone Dot (Mobile alignment vs Desktop) */}
                                <div className="hidden md:flex flex-shrink-0 w-6 h-6 rounded-full bg-[#1E4D8F] items-center justify-center border-[4px] border-[#F8F9FA] shadow-md z-20 relative transition-transform duration-300 group-hover:scale-125 mb-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#C0392B] animate-pulse" />
                                </div>

                                {/* Mobile Dot */}
                                <div className="flex md:hidden flex-shrink-0 w-5 h-5 rounded-full bg-[#1E4D8F] items-center justify-center border-[3px] border-[#F8F9FA] shadow-md z-20 relative mt-2 ml-3.5 transition-transform duration-300 group-hover:scale-125">
                                    <div className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse" />
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="relative flex-1 w-full md:text-center text-left bg-white/70 backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
                                    style={{
                                        border: '1px solid rgba(30,77,143,0.1)',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1E4D8F]/30 transition-all duration-500 shadow-[0_0_0_0_rgba(30,77,143,0)] group-hover:shadow-[0_0_20px_0_rgba(30,77,143,0.1)] pointer-events-none" />

                                    {/* Content */}
                                    <div className="w-12 h-12 md:mx-auto mb-4 rounded-xl flex items-center justify-center text-[#1E4D8F]"
                                        style={{ background: 'rgba(30,77,143,0.08)', border: '1px solid rgba(30,77,143,0.15)' }}
                                    >
                                        {milestone.icon}
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-[#0F1A2A] mb-2">
                                        <span className="text-[#C0392B] mr-1.5">{milestone.id}.</span>
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-500 font-body text-sm leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
