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
        <section className="py-16 px-4 sm:px-6 overflow-hidden" style={{ background: '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left – Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="section-tag mb-5">About Us</p>
                    <h2
                        className="font-heading font-bold text-[#0F1F3A] leading-tight mb-5"
                        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
                    >
                        Your Trusted{' '}
                        <span className="italic text-[#1E4D8F] relative inline-block">
                            Real Estate
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C0392B] rounded-full" />
                        </span>
                        <br />Partner
                    </h2>
                    <span className="luxury-divider mb-7 block" />

                    <p className="text-[#5A6A80] font-body leading-relaxed mb-5 text-[0.97rem]">
                        Kashi Property Clinic offers comprehensive real estate solutions, ensuring secure
                        transactions and expert guidance for all your property needs — from search to
                        post-sales support.
                    </p>
                    <p className="text-[#5A6A80] font-body leading-relaxed mb-10 text-[0.97rem]">
                        Based in Kashipur, Uttarakhand, we have been building trust with our clients since 2018,
                        delivering premium real estate experiences with integrity and professionalism.
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3.5 mb-10">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-center gap-3 text-[#0F1F3A] font-body text-[0.95rem]">
                                <HiCheckCircle className="text-[#1E4D8F] text-xl flex-shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    <Link to="/properties" className="btn-primary">
                        Discover Properties
                        <FiArrowRight />
                    </Link>
                </motion.div>

                {/* Right – Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative"
                >
                    {/* Main image */}
                    <div className="rounded-2xl overflow-hidden img-zoom" style={{ boxShadow: '0 20px 60px rgba(15,31,58,0.15)' }}>
                        <img
                            src="/images/about_property.png"
                            alt="Kashi Property Clinic"
                            className="w-full h-[480px] object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-2xl"
                            style={{ background: 'linear-gradient(160deg, transparent 60%, rgba(15,31,58,0.15))' }}
                        />
                    </div>

                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 text-center"
                        style={{ boxShadow: '0 8px 32px rgba(15,31,58,0.12)', minWidth: 140, border: '1px solid rgba(30,77,143,0.1)' }}
                    >
                        <p className="font-heading text-3xl font-bold text-[#1E4D8F]">8+</p>
                        <p className="text-[#5A6A80] text-xs font-body tracking-wide mt-1">Years of<br />Excellence</p>
                    </motion.div>

                    {/* Decorative rings — blue tone */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                        style={{ border: '1.5px solid rgba(30,77,143,0.18)' }} />
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none"
                        style={{ border: '1.5px solid rgba(30,77,143,0.28)' }} />
                </motion.div>
            </div>
        </section>
    )
}
