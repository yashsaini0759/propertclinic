import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import Footer from '../components/Footer'

const properties = [
    {
        name: 'Jannat Villas',
        tagline: 'Luxury Redefined',
        description: 'Where luxury meets tranquility. Nestled in a serene environment, these premium villas offer an extraordinary living experience with world-class amenities.',
        image: '/images/project_jannat_villas.png',
        badge: 'Premium Villas',
        brochure: 'https://assets.zyrosite.com/mP42OG07MzUooVkq/jannat-by-vedanta-mxBMw393Q7cp16QE.pdf',
        link: 'https://kashipropertyclinic.com/jannat-villas',
        type: 'Residential',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Vedanta Heights',
        tagline: 'Elevate Your Living',
        description: 'A residential development elegantly crafted to offer the highest level of luxury, both inside as well as outside.',
        image: '/images/project_vedanta_heights.png',
        badge: 'Luxury Residences',
        brochure: 'https://assets.zyrosite.com/mP42OG07MzUooVkq/vedanta-brochure-rgb-A3QOGNkBn7iwkzW7.pdf',
        link: 'https://kashipropertyclinic.com/vedanta-heights',
        type: 'Residential',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Vedanta Greens',
        tagline: 'Lush Living',
        description: 'A residential development in a stellar location near the market area with well-crafted 2BHK and 3BHK villas surrounded by lush greenery.',
        image: '/images/project_vedanta_greens.png',
        badge: '2 & 3 BHK',
        brochure: 'https://assets.zyrosite.com/mP42OG07MzUooVkq/vedanta-greens-3-m2Wa9E47PetrvxOM.pdf',
        link: 'https://kashipropertyclinic.com/vedanta-greens',
        type: 'Residential',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Aaradhyam Green',
        tagline: 'Nature Meets Convenience',
        description: 'Where tranquility meets contemporary living, offering you the perfect blend of nature and convenience for a serene lifestyle.',
        image: '/images/about_property.png',
        badge: 'New Launch',
        brochure: 'https://assets.zyrosite.com/mP42OG07MzUooVkq/aaradhyam-A1aBpk1B9BcVQOGD.pdf',
        link: '/properties',
        type: 'Residential',
        location: 'Kashipur, Uttarakhand',
    },
    {
        name: 'Spectrum Mall',
        tagline: 'Prime Commercial Hub',
        description: 'A prime commercial hub offering retail spaces and unmatched business opportunities in a thriving, strategic location.',
        image: '/images/service_property_mgmt.png',
        badge: 'Commercial',
        brochure: null,
        link: '/properties',
        type: 'Commercial',
        location: 'Cheema Chauraha, Kashipur',
    },
    {
        name: 'High Street By Vedanta',
        tagline: "Kashipur's Future",
        description: "Kashipur's upcoming premium commercial hub for smart investors and growing businesses looking for a strategic foothold.",
        image: '/images/service_homeloan.png',
        badge: 'Commercial',
        brochure: null,
        link: '/properties',
        type: 'Commercial',
        location: 'Kashipur, Uttarakhand',
    },
]

export default function Properties() {
    return (
        <main>
            {/* Hero */}
            <section
                className="relative pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center min-h-[50vh] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F3D3E, #0B1F22)' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, #CBA135 0%, transparent 50%)',
                    }}
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
                        Discover diverse properties and expert services for seamless real estate transactions and informed decisions.
                    </p>
                </motion.div>
            </section>

            {/* Properties Grid */}
            <section className="py-20 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop, i) => (
                            <motion.div
                                key={prop.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                className="group rounded-2xl overflow-hidden shadow-luxury card-hover bg-white"
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
                                        style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,31,34,0.7) 100%)' }}
                                    />
                                    {/* Badge */}
                                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider font-body"
                                        style={{
                                            background: prop.type === 'Commercial' ? 'rgba(74,111,165,0.85)' : 'rgba(203,161,53,0.9)',
                                            color: prop.type === 'Commercial' ? '#fff' : '#0B1F22',
                                        }}>
                                        {prop.badge}
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
                                        <a
                                            href={prop.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-gold text-xs flex-1 text-center flex items-center justify-center gap-1.5"
                                        >
                                            View <FiExternalLink size={12} />
                                        </a>
                                        {prop.brochure && (
                                            <a
                                                href={prop.brochure}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline-gold text-xs flex-1 text-center"
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
