import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MdApartment, MdGavel, MdAccountBalance, MdSearch } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const services = [
    {
        icon: <MdSearch size={28} />,
        title: 'Property Search Assistance',
        description: 'Expert guidance in finding your ideal property with detailed insights and tailored options for every budget.',
        accent: '#CBA135',
    },
    {
        icon: <MdGavel size={28} />,
        title: 'Legal Transaction Support',
        description: 'Ensuring secure and transparent legal processes for all your real estate dealings with peace of mind.',
        accent: '#4A6FA5',
    },
    {
        icon: <MdAccountBalance size={28} />,
        title: 'Home Loan Services',
        description: 'Facilitating easy access to home loans with competitive rates and personalized financial assistance.',
        accent: '#CBA135',
    },
    {
        icon: <MdApartment size={28} />,
        title: 'Property Management',
        description: 'Efficient management services ensuring your property is well-maintained and generates maximum value.',
        accent: '#4A6FA5',
    },
]

export default function ComprehensiveServices() {
    return (
        <section
            className="py-24 px-4 sm:px-6 overflow-hidden relative z-10"
            style={{ background: 'linear-gradient(180deg, #0B1F22 0%, #0F3D3E 100%)' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="section-tag mb-3">What We Do</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Comprehensive{' '}
                        <span className="italic" style={{ color: '#CBA135' }}>Real Estate</span>
                    </h2>
                    <div className="gold-divider mx-auto mb-5" />
                    <p className="text-white/50 font-body max-w-xl mx-auto">
                        Explore our diverse services for seamless property transactions, management, and expert guidance tailored for you.
                    </p>
                </motion.div>

                {/* Swiper Slider (Replaces Grid) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        grabCursor
                        loop
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-14"
                    >
                        {services.map((svc) => (
                            <SwiperSlide key={svc.title} className="h-auto">
                                <div
                                    className="rounded-2xl p-8 group cursor-pointer h-full border transition-all duration-300 hover:-translate-y-2 flex flex-col"
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                                        style={{
                                            background: `${svc.accent}15`,
                                            border: `1px solid ${svc.accent}30`,
                                            color: svc.accent,
                                        }}
                                    >
                                        {svc.icon}
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-4 leading-tight">
                                        {svc.title}
                                    </h3>
                                    <p className="text-white/55 font-body text-sm leading-relaxed mb-8 flex-grow">
                                        {svc.description}
                                    </p>
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-2 text-sm font-semibold font-body tracking-wide transition-all group-hover:gap-3 mt-auto"
                                        style={{ color: svc.accent }}
                                    >
                                        Learn More <FiArrowRight size={16} />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
