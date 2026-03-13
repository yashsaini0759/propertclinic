import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { properties } from '../data/properties'
import Footer from '../components/Footer'

export default function Properties() {
    return (
        <main>
            {/* Hero */}
            <section
                className="relative pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center min-h-[50vh] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F3D3E, #0B1F22)' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #CBA135 0%, transparent 50%)' }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center relative z-10 max-w-3xl"
                >
                    <p className="section-tag mb-4">Our Portfolio</p>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5">
                        Premium{' '}
                        <span className="italic" style={{ color: '#CBA135' }}>Properties</span>
                    </h1>
                    <div className="gold-divider mx-auto mb-6" />
                    <p className="text-white/60 font-body max-w-xl mx-auto text-lg">
                        Discover our diverse portfolio of residential and commercial properties across Kashipur.
                    </p>
                </motion.div>
            </section>

            {/* Properties Grid */}
            <section className="py-20 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop, i) => (
                            <motion.div
                                key={prop.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                className="group rounded-2xl overflow-hidden card-hover bg-white"
                                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}
                            >
                                {/* Image */}
                                <div className="relative img-zoom h-56">
                                    <img
                                        src={prop.image}
                                        alt={prop.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0"
                                        style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,31,34,0.65) 100%)' }}
                                    />
                                    <span
                                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider font-body text-white"
                                        style={{ background: prop.type === 'Commercial' ? 'rgba(192,57,43,0.85)' : 'rgba(15,61,62,0.9)' }}
                                    >
                                        {prop.badge}
                                    </span>
                                    {/* Status chip */}
                                    <span
                                        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold font-body"
                                        style={{ background: 'rgba(203,161,53,0.9)', color: '#0B1F22' }}
                                    >
                                        {prop.status}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-400 text-xs font-body tracking-widest uppercase mb-1">
                                        📍 {prop.location}
                                    </p>
                                    <h3 className="font-heading text-xl font-bold text-[#0B1F22] mb-1">{prop.name}</h3>
                                    <p className="text-[#CBA135] text-sm font-body font-medium mb-3 italic">{prop.tagline}</p>
                                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5 line-clamp-2">
                                        {prop.description}
                                    </p>
                                    <div className="flex gap-3">
                                        {/* Internal View link → detail page */}
                                        <Link
                                            to={`/property/${prop.slug}`}
                                            className="btn-gold flex-1 text-xs text-center flex items-center justify-center gap-1.5"
                                        >
                                            View Details <FiArrowRight size={12} />
                                        </Link>
                                        {prop.brochure && (
                                            <a
                                                href={prop.brochure}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-xs text-center py-2.5 px-4 rounded font-body font-semibold transition-all"
                                                style={{ border: '1.5px solid #0F3D3E', color: '#0F3D3E' }}
                                            >
                                                Brochure
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

