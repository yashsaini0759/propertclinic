import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        name: 'JANNAT VILLAS',
        description:
            'Welcome to Jannat Villas, where luxury meets tranquility. Nestled in a serene environment, these premium villas are designed to provide an extraordinary living experience.',
        image: '/images/project_jannat_villas.png',
        link: 'https://kashipropertyclinic.com/jannat-villas',
        badge: 'Premium Villas',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'VEDANTA HEIGHTS',
        description:
            'Vedanta Heights is a residential development elegantly crafted to offer the highest level of luxury, both inside as well as outside.',
        image: '/images/project_vedanta_heights.png',
        link: 'https://kashipropertyclinic.com/vedanta-heights',
        badge: 'Luxury Residences',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'VEDANTA GREENS',
        description:
            'Being modeled into perfection, Vedanta Greens is a residential development in a stellar location near the market area with 2BHK and 3BHK villas.',
        image: '/images/project_vedanta_greens.png',
        link: 'https://kashipropertyclinic.com/vedanta-greens',
        badge: '2 & 3 BHK Villas',
        location: 'Kashipur, Uttarakhand',
    },
]

export default function ProjectsSection() {
    return (
        <section className="py-24 px-4 sm:px-6 overflow-hidden" style={{ background: '#F8F9FA' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="section-tag mb-3">Featured Developments</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0B1F22] mb-4">
                        Our Premium{' '}
                        <span className="italic" style={{ color: '#0F3D3E' }}>Projects</span>
                    </h2>
                    <div className="gold-divider mx-auto mb-5" />
                    <p className="text-gray-500 font-body max-w-xl mx-auto">
                        Discover our curated selection of luxury residential and commercial developments.
                    </p>
                </motion.div>

                {/* Swiper Slider */}
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
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        grabCursor
                        loop
                        breakpoints={{
                            640: { slidesPerView: 1.3 },
                            900: { slidesPerView: 2 },
                            1200: { slidesPerView: 2.5 },
                        }}
                        className="pb-14"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.name}>
                                <div className="group relative rounded-2xl overflow-hidden shadow-luxury cursor-pointer"
                                    style={{ height: 460 }}>
                                    {/* Image */}
                                    <div className="img-zoom absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Gradient */}
                                    <div className="absolute inset-0"
                                        style={{
                                            background:
                                                'linear-gradient(180deg, rgba(11,31,34,0) 30%, rgba(11,31,34,0.75) 65%, rgba(11,31,34,0.97) 100%)',
                                        }}
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-5 left-5">
                                        <span className="px-3 py-1.5 rounded-full text-[11px] font-body font-semibold tracking-wider"
                                            style={{
                                                background: 'rgba(203,161,53,0.15)',
                                                border: '1px solid rgba(203,161,53,0.4)',
                                                color: '#CBA135',
                                                backdropFilter: 'blur(10px)',
                                            }}>
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-7">
                                        <p className="text-white/50 text-xs font-body tracking-widest uppercase mb-1">
                                            📍 {project.location}
                                        </p>
                                        <h3 className="font-heading text-2xl font-bold text-white mb-2 tracking-wide">
                                            {project.name}
                                        </h3>
                                        <p className="text-white/65 font-body text-sm leading-relaxed mb-5 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#CBA135] hover:gap-3 transition-all"
                                        >
                                            View Project <FiExternalLink size={14} />
                                        </a>
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
