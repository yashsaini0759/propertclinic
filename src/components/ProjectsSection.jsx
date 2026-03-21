import { useState, useEffect } from 'react'
import Link from './TransitionLink'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { properties } from '../data/properties'

const topRowSlugs = ['vedanta-greens', 'vedanta-avenue']
const bottomRowSlugs = ['vedanta-elite', 'vedanta-residency', 'vedanta-heights']

const ProjectCard = ({ project, index, isMobile, fromDirection }) => {
    return (
        <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ 
                y: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 },
                opacity: { duration: 0.85, ease: "linear", delay: index * 0.1 }
            }}
            className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(15,31,58,0.12)]"
            style={{
                boxShadow: '0 4px 24px rgba(15,31,58,0.07)',
                border: '1px solid rgba(15,31,58,0.06)',
            }}
        >
            {/* Image */}
            <div className="relative h-60 overflow-hidden flex-shrink-0">
                <img
                    src={project.image}
                    alt={`${project.name} – ${project.badge} ${project.type} property in Kashipur, Uttarakhand by Kashi Property Clinic`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span
                        className="px-3 py-1.5 rounded-full text-[11px] font-body font-semibold tracking-wider text-white"
                        style={{ background: '#0F1F3A', boxShadow: '0 2px 10px rgba(15,31,58,0.3)' }}
                    >
                        {project.badge}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1 bg-white relative z-10 cursor-pointer" onClick={() => window.location.href = `/property/${project.slug}`}>
                <h3
                    className="font-heading text-xl font-bold text-[#0F1F3A] mb-2 transition-colors duration-300 group-hover:text-[#1E4D8F] uppercase tracking-wide"
                >
                    {project.name}
                </h3>

                <div className="flex items-center justify-between mb-5">
                    <p className="text-[#A07050] text-xs font-body tracking-[0.1em] uppercase block">
                        📍 {project.location}
                    </p>
                    
                    <Link
                        to={`/property/${project.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D9C4B5] text-[#A07050] transition-colors duration-300 group-hover:bg-[#1E4D8F] group-hover:border-[#1E4D8F] group-hover:text-white shrink-0 relative"
                    >
                        {/* Accent line pointing to circle */}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#D9C4B5] group-hover:bg-[#1E4D8F] transition-colors duration-300" />
                        <FiArrowRight size={15} className="-mr-0.5" />
                    </Link>
                </div>

                <p className="text-[#5A6A80] font-body text-[0.95rem] leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ProjectsSection() {
    const topRowProjects = topRowSlugs.map(slug => properties.find(p => p.slug === slug)).filter(Boolean)
    const bottomRowProjects = bottomRowSlugs.map(slug => properties.find(p => p.slug === slug)).filter(Boolean)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile() // Initial check
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="py-16 px-4 sm:px-6 overflow-x-hidden" style={{ background: 'rgba(194, 240, 255, 0.15)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        y: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
                        opacity: { duration: 0.85, ease: "linear" }
                    }}
                    className="text-center mb-16"
                >
                    <p className="section-tag mb-4">Featured Developments</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1F3A] mb-5 leading-tight">
                        Our Premium{' '}
                        <span className="italic text-[#1E4D8F]">Projects</span>
                    </h2>
                    <span className="luxury-divider mx-auto mb-6" />
                    <p className="text-[#5A6A80] font-body max-w-xl mx-auto text-[0.95rem] leading-relaxed">
                        Discover our curated selection of luxury residential and commercial developments.
                    </p>
                </motion.div>

                {/* Projects Grid Container */}
                <div className="flex flex-col gap-8">
                    {/* Top Row Grid (2 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {topRowProjects.map((project, i) => (
                            <ProjectCard 
                                key={project.slug} 
                                project={project} 
                                index={i} 
                                isMobile={isMobile} 
                                fromDirection="left" 
                            />
                        ))}
                    </div>

                    {/* Bottom Row Grid (3 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bottomRowProjects.map((project, i) => (
                            <ProjectCard 
                                key={project.slug} 
                                project={project} 
                                index={i} 
                                isMobile={isMobile} 
                                fromDirection="right" 
                            />
                        ))}
                    </div>
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/properties"
                        className="inline-flex items-center gap-2 font-body font-medium rounded-xl px-7 py-3"
                        style={{
                            background: 'transparent',
                            border: '1.5px solid rgba(30,77,143,0.3)',
                            color: '#1E4D8F',
                            fontSize: '0.9rem',
                            letterSpacing: '0.02em',
                            transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease, transform 0.22s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(30,77,143,0.06)'
                            e.currentTarget.style.borderColor = 'rgba(30,77,143,0.55)'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.borderColor = 'rgba(30,77,143,0.3)'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        View All Properties <FiArrowRight size={15} />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
