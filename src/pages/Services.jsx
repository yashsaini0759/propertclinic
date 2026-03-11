import { motion } from 'framer-motion'
import { MdApartment, MdGavel, MdAccountBalance, MdSearch } from 'react-icons/md'
import ComprehensiveServices from '../components/ComprehensiveServices'
import Footer from '../components/Footer'
import { FiArrowRight } from 'react-icons/fi'

const serviceDetails = [
    {
        icon: <MdSearch size={36} />,
        title: 'Property Search Assistance',
        description: 'Our expert team helps you navigate the property market with ease. We provide detailed insights, neighborhood analysis, and curated property options tailored to your budget and preferences.',
        features: ['Personalized property matching', 'Neighborhood analysis', 'Market pricing guidance', 'Virtual & physical tours'],
    },
    {
        icon: <MdGavel size={36} />,
        title: 'Legal Transaction Support',
        description: 'Ensuring secure and transparent legal processes for all your real estate dealings. Our legal experts handle all documentation and due diligence to give you complete peace of mind.',
        features: ['Title deed verification', 'Agreement drafting', 'Registration assistance', 'Dispute resolution'],
    },
    {
        icon: <MdAccountBalance size={36} />,
        title: 'Home Loan Services',
        description: 'We facilitate easy access to home loans with competitive rates across multiple banks and NBFCs. Our finance experts work to get you the best loan terms with minimal hassle.',
        features: ['Multi-bank comparisons', 'Loan eligibility check', 'Document preparation', 'Fast disbursement support'],
    },
    {
        icon: <MdApartment size={36} />,
        title: 'Property Management',
        description: 'Efficient management services ensuring your property is well-maintained and generates maximum value. We handle everything from tenant management to maintenance coordination.',
        features: ['Tenant screening', 'Rent collection', 'Maintenance coordination', 'Property reporting'],
    },
]

export default function Services() {
    return (
        <main>
            {/* Hero */}
            <section
                className="relative pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center min-h-[50vh] overflow-hidden"
                style={{ background: '#0F1A2A' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 30% 50%, #1E4D8F 0%, transparent 50%), radial-gradient(circle at 70% 50%, #C0392B 0%, transparent 50%)',
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center relative z-10 max-w-3xl mx-auto"
                >
                    <p className="section-tag mb-4">Our Services</p>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                        Your Real Estate{' '}
                        <span className="italic font-bold text-[#4A6FA5]">Partner</span>
                    </h1>
                    <div className="accent-divider mx-auto mb-6" />
                    <p className="text-white/60 font-body max-w-xl mx-auto text-lg leading-relaxed">
                        Comprehensive solutions for property search, legal transactions, home loans, and management services tailored for you.
                    </p>
                </motion.div>
            </section>

            {/* Detailed Services */}
            <section className="py-20 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
                <div className="max-w-7xl mx-auto space-y-16">
                    {serviceDetails.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                        >
                            {/* Icon Side */}
                            <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div
                                    className="rounded-3xl p-12 flex flex-col items-center justify-center text-center"
                                    style={{
                                        background: '#0F1A2A',
                                        minHeight: 280,
                                    }}
                                >
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-[#4A6FA5]"
                                        style={{ background: 'rgba(74,111,165,0.15)', border: '1px solid rgba(74,111,165,0.3)' }}>
                                        {svc.icon}
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-white">{svc.title}</h3>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div>
                                <div className="accent-divider mb-5" />
                                <p className="text-gray-600 font-body leading-relaxed mb-7">{svc.description}</p>
                                <ul className="space-y-3 mb-7">
                                    {svc.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-gray-700 font-body">
                                            <span className="w-2 h-2 rounded-full bg-[#1E4D8F] flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://wa.me/9627088818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2 text-sm"
                                >
                                    Get Consultation <FiArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ComprehensiveServices />
            <Footer />
        </main>
    )
}
