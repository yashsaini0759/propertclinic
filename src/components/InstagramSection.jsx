import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

// Use placeholder images from the project
const gridImages = [
    { src: '/images/project_jannat_villas.png', alt: 'Jannat Villas' },
    { src: '/images/about_property.png', alt: 'Property Clinic Office' },
    { src: '/images/service_property_mgmt.png', alt: 'Property Management' },
    { src: '/images/project_vedanta_heights.png', alt: 'Vedanta Heights' },
    { src: '/images/hero_property.png', alt: 'Luxury Property' },
    { src: '/images/project_vedanta_greens.png', alt: 'Vedanta Greens' },
    { src: '/images/service_legal.png', alt: 'Legal Services' },
    { src: '/images/service_homeloan.png', alt: 'Home Loan' },
    { src: '/images/project_jannat_villas.png', alt: 'Premium Villas' },
]

export default function InstagramSection() {
    return (
        <section className="py-24 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="section-tag mb-3">Social Media</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1A2A] mb-4">
                        Follow Us on{' '}
                        <span className="italic font-bold text-[#1E4D8F]">Instagram</span>
                    </h2>
                    <div className="accent-divider mx-auto mb-5" />
                    <a
                        href="https://www.instagram.com/property_clinic_kashipur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#4A6FA5] font-body font-semibold hover:text-[#1E4D8F] transition-colors"
                    >
                        <FaInstagram size={18} />
                        @property_clinic_kashipur
                    </a>
                </motion.div>

                {/* 3×3 Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {gridImages.map((img, i) => (
                        <motion.a
                            key={i}
                            href="https://www.instagram.com/property_clinic_kashipur/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="group relative aspect-square rounded-xl overflow-hidden img-zoom"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{ background: 'rgba(30,77,143,0.7)' }}>
                                <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                    <FaInstagram className="text-white text-3xl" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
