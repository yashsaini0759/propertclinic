import { motion } from 'framer-motion'
import Link from './TransitionLink'
import { MdApartment, MdGavel, MdAccountBalance, MdSearch } from 'react-icons/md'

const services = [
    {
        icon: <MdApartment size={26} />,
        title: 'Property Management',
        description: 'Expert support for seamless property management services, ensuring your asset generates',
        highlight: 'maximum value.',
        link: '/services',
    },
    {
        icon: <MdSearch size={26} />,
        title: 'Property Search',
        description: 'End-to-end property search assistance to help you find the perfect home or investment with',
        highlight: 'expert guidance.',
        link: '/services',
    },
    {
        icon: <MdGavel size={26} />,
        title: 'Legal Transactions',
        description: 'Secure and transparent legal processes for all your real estate dealings with',
        highlight: 'professional expertise.',
        link: '/services',
    },
    {
        icon: <MdAccountBalance size={26} />,
        title: 'Home Loans',
        description: 'Easy access to home loans with competitive rates and personalized financial assistance for a',
        highlight: 'smooth experience.',
        link: '/services',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

export default function ServicesCards() {
    return (
        <section className="py-16 px-4 sm:px-6" style={{ background: '#FFFFFF' }}>
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-14"
                >
                    <h2
                        className="font-heading font-bold text-[#0F1F3A] mb-4 leading-tight"
                        style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
                    >
                        What{' '}
                        <span className="italic text-[#1E4D8F]">We Offer</span>
                    </h2>
                    <p className="text-[#5A6A80] font-body text-[0.95rem] max-w-lg mx-auto leading-relaxed">
                        Comprehensive real estate solutions tailored to provide you with the best property experience in Kashipur.
                    </p>
                </motion.div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="flex items-start gap-5 p-6 rounded-2xl bg-white group cursor-default transition-all duration-300"
                            style={{
                                border: '1px solid rgba(15,31,58,0.09)',
                                boxShadow: '0 2px 16px rgba(15,31,58,0.05)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,77,143,0.1)'
                                e.currentTarget.style.borderColor = 'rgba(30,77,143,0.2)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 2px 16px rgba(15,31,58,0.05)'
                                e.currentTarget.style.borderColor = 'rgba(15,31,58,0.09)'
                            }}
                        >
                            {/* Icon box */}
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#1E4D8F] transition-colors duration-300 group-hover:bg-[#EBF0FA]"
                                style={{ background: '#F0F4FA' }}
                            >
                                {svc.icon}
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-heading font-bold text-[#0F1F3A] text-[1.05rem] mb-2 leading-snug">
                                    {svc.title}
                                </h3>
                                <p className="text-[#5A6A80] font-body text-sm leading-relaxed">
                                    {svc.description}{' '}
                                    <span className="text-[#1E4D8F] font-medium">{svc.highlight}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mt-10"
                >
                    <Link to="/services" className="btn-outline-navy">
                        View All Services
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
