import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MdApartment, MdGavel, MdAccountBalance } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

const services = [
    {
        icon: <MdApartment size={32} />,
        title: 'Property Management',
        description: 'Expert support for seamless property management services, ensuring your asset generates maximum value.',
        image: '/images/service_property_mgmt.png',
        link: '/services',
    },
    {
        icon: <MdGavel size={32} />,
        title: 'Legal Transactions',
        description: 'Secure and transparent legal processes for all your real estate dealings with expert guidance.',
        image: '/images/service_legal.png',
        link: '/services',
    },
    {
        icon: <MdAccountBalance size={32} />,
        title: 'Home Loans',
        description: 'Easy access to home loans with competitive rates and personalized financial assistance.',
        image: '/images/service_homeloan.png',
        link: '/services',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.94 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function ServicesCards() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section className="py-24 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="section-tag mb-3">What We Offer</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1A2A] mb-4">
                        Our Core Services
                    </h2>
                    <div className="accent-divider mx-auto mb-5" />
                    <p className="text-gray-500 font-body max-w-xl mx-auto">
                        Comprehensive real estate solutions tailored to provide you with the best property experience in Kashipur.
                    </p>
                </motion.div>

                {/* Services Slider */}
                <motion.div
                    ref={ref}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    custom={0}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={28}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        grabCursor
                        loop
                        touchStartPreventDefault={false}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 pt-4 px-2"
                    >
                        {services.map((svc) => (
                            <SwiperSlide key={svc.title}>
                                <div
                                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
                                    style={{ minHeight: 400 }}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 img-zoom group-hover:scale-110 transition-transform duration-700 ease-in-out">
                                        <img
                                            src={svc.image}
                                            alt={svc.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(11,31,34,0.1) 0%, rgba(11,31,34,0.6) 50%, #0F1A2A 100%)'
                                        }}
                                    />

                                    {/* Glow border on hover */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1E4D8F] transition-all duration-500 pointer-events-none" />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full justify-end p-7">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-[#1E4D8F]"
                                            style={{
                                                background: 'rgba(30,77,143,0.15)',
                                                border: '1px solid rgba(30,77,143,0.3)',
                                                backdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            {svc.icon}
                                        </div>
                                        <h3 className="font-heading text-2xl font-bold text-white mb-3">
                                            {svc.title}
                                        </h3>
                                        <p className="text-white/70 font-body text-sm leading-relaxed mb-5">
                                            {svc.description}
                                        </p>
                                        <Link
                                            to={svc.link}
                                            className="inline-flex items-center gap-2 text-[#C0392B] font-body font-semibold text-sm group-hover:gap-3 transition-all hover-underline-animation max-w-max"
                                        >
                                            Learn More <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
