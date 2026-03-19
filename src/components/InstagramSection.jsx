import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

const gridImages = [
    { src: '/images/instagram/Camera12__00139.jpg', alt: 'Exterior View' },
    { src: '/images/instagram/15.png', alt: 'Interior Design' },
    { src: '/images/instagram/Camera14__00360.jpg', alt: 'Lifestyle' },
    { src: '/images/instagram/front.jpg', alt: 'Property Exterior' },
    { src: '/images/instagram/20.png', alt: 'Luxury Interior' },
    { src: '/images/instagram/houses_view.jpg', alt: 'Client Experience' },
    { src: '/images/instagram/top.jpg', alt: 'Modern Architecture' },
    { src: '/images/instagram/lobby 2 copy.jpg', alt: 'Spacious Living' },
    { src: '/images/instagram/18.png', alt: 'Happy Clients' },
]

export default function InstagramSection() {
    return (
        <section className="py-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="section-tag mb-4">Social Media</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0F1F3A] mb-5 leading-tight">
                        Follow Us on{' '}
                        <span className="italic text-[#1E4D8F]">Instagram</span>
                    </h2>
                    <span className="luxury-divider mx-auto mb-5" />
                    <a
                        href="https://www.instagram.com/property_clinic_kashipur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1E4D8F] font-body font-semibold hover:text-[#4A6FA5] transition-colors text-sm tracking-wide"
                    >
                        <FaInstagram size={16} />
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
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.055, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                            style={{ boxShadow: '0 2px 12px rgba(15,31,58,0.07)' }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover img-zoom-target transition-transform duration-600 group-hover:scale-[1.08]"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{ background: 'rgba(15,31,58,0.65)', backdropFilter: 'blur(2px)' }}
                            >
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    className="group-hover:scale-100 group-hover:opacity-100 scale-75 opacity-0 transition-all duration-300"
                                >
                                    <FaInstagram className="text-white text-3xl" />
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
