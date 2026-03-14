import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const projects = [
    {
        name: 'Jannat Villas',
        description:
            'Where luxury meets tranquility. Nestled in a serene environment, these premium villas are designed to provide an extraordinary living experience with world-class amenities.',
        image: '/images/project_jannat_villas.png',
        slug: 'jannat-villas',
        badge: 'Premium Villas',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Vedanta Heights',
        description:
            'Vedanta Heights is a residential development elegantly crafted to offer the highest level of luxury, both inside as well as outside.',
        image: '/images/project_vedanta_heights.png',
        slug: 'vedanta-heights',
        badge: 'Luxury Residences',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Vedanta Greens',
        description:
            'A residential development in a stellar location near the market area with well-crafted 2BHK and 3BHK villas surrounded by lush greenery.',
        image: '/images/vedanta_greens/hero_face.png',
        slug: 'vedanta-greens',
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
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1A2A] mb-4">
                        Our Premium{' '}
                        <span className="italic font-bold text-[#1E4D8F]">Projects</span>
                    </h2>
                    <div className="accent-divider mx-auto mb-5" />
                    <p className="text-gray-500 font-body max-w-xl mx-auto">
                        Discover our curated selection of luxury residential and commercial developments.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Target Image Half */}
                            <div className="relative h-64 overflow-hidden img-zoom flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Badge Overlay */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 rounded-full text-[11px] font-body font-semibold tracking-wider text-white bg-[#C0392B] shadow-md">
                                        {project.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Text Description Half */}
                            <div className="p-7 flex flex-col flex-1">
                                <p className="text-gray-400 text-xs font-body tracking-widest uppercase mb-2">
                                    📍 {project.location}
                                </p>
                                <h3 className="font-heading text-xl font-bold text-[#0F1A2A] mb-3 group-hover:text-[#1E4D8F] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* View Button */}
                                <Link
                                    to={`/property/${project.slug}`}
                                    className="btn-gold w-full text-center text-sm flex items-center justify-center gap-2 mt-auto"
                                >
                                    View Project <FiArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
