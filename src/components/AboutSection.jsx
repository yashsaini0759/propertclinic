import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

const highlights = [
    'End-to-end property solutions',
    'Transparent legal transactions',
    'Expert home loan assistance',
    'Dedicated post-sale support',
]

export default function AboutSection() {
    return (
        <section className="py-24 px-4 sm:px-6 overflow-hidden" style={{ background: '#F8F9FA' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left – Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="section-tag mb-4">About Us</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1A2A] leading-tight mb-5">
                        Your Trusted{' '}
                        <span className="italic font-bold text-[#1E4D8F]">Real Estate</span>
                        <br />
                        Partner
                    </h2>
                    <div className="accent-divider mb-6" />
                    <p className="text-gray-600 font-body leading-relaxed mb-6">
                        Kashi Property Clinic offers comprehensive real estate solutions, ensuring secure
                        transactions and expert guidance for all your property needs — from search to
                        post-sales support.
                    </p>
                    <p className="text-gray-600 font-body leading-relaxed mb-8">
                        Based in Kashipur, Uttarakhand, we have been building trust with our clients since 2018,
                        delivering premium real estate experiences with integrity and professionalism.
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-10">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-center gap-3 text-gray-700 font-body">
                                <HiCheckCircle className="text-[#1E4D8F] text-xl flex-shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    <Link to="/properties" className="btn-primary inline-flex items-center gap-2 text-sm">
                        Discover Properties
                        <FiArrowRight />
                    </Link>
                </motion.div>

                {/* Right – Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative"
                >
                    {/* Main image */}
                    <div className="rounded-3xl overflow-hidden shadow-luxury img-zoom">
                        <img
                            src="/images/about_property.png"
                            alt="Kashi Property Clinic"
                            className="w-full h-[480px] object-cover"
                            loading="lazy"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 rounded-3xl"
                            style={{ background: 'linear-gradient(135deg, rgba(15,61,62,0.15), transparent)' }}
                        />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-5 py-4 text-center shadow-primary"
                        style={{ minWidth: 140 }}
                    >
                        <p className="font-heading text-3xl font-bold text-[#4A6FA5]">8+</p>
                        <p className="text-white/70 text-xs font-body tracking-wide mt-1">Years of<br />Excellence</p>
                    </motion.div>

                    {/* Decorative Ring */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-[#1E4D8F]/20 pointer-events-none" />
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-[#1E4D8F]/30 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}
