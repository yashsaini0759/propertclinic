import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const reviews = [
    {
        name: 'Adeel Ahmad',
        location: 'Ramnagarh',
        review:
            'Kashi Property Clinic made my home buying journey effortless and enjoyable. The team was professional and guided me every step of the way. Highly recommended!',
        rating: 5,
        initials: 'AA',
    },
    {
        name: 'Mohd Anas Khan',
        location: 'Kashipur',
        review:
            'The service was exceptional! They guided me through every step of buying my property with ease and expertise. I felt supported and informed throughout the entire process.',
        rating: 5,
        initials: 'MK',
    },
    {
        name: 'Ravi Sharma',
        location: 'Moradabad',
        review:
            'Excellent guidance for home loans. The staff is knowledgeable and provided clear explanations. My loan was processed smoothly without any hassle.',
        rating: 5,
        initials: 'RS',
    },
    {
        name: 'Priya Gupta',
        location: 'Haldwani',
        review:
            'Found my dream home through Property Clinic. Their property search assistance is top notch. Very professional team, transparent dealings throughout.',
        rating: 5,
        initials: 'PG',
    },
    {
        name: 'Suresh Verma',
        location: 'Kashipur',
        review:
            'Legal transaction support was flawless. They handled all the paperwork professionally. I had complete peace of mind throughout the property purchase.',
        rating: 5,
        initials: 'SV',
    },
    {
        name: 'Anjali Singh',
        location: 'Rudrapur',
        review:
            'Very trustworthy team. They not only helped me buy a property but also managed it efficiently. Their post-sales support is outstanding.',
        rating: 5,
        initials: 'AS',
    },
]

function ReviewCard({ review }) {
    return (
        <div
            className="group rounded-[20px] p-6 flex-shrink-0 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            style={{
                width: 320,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.03)',
            }}
        >
            {/* Soft hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                     background: 'radial-gradient(circle at 50% 0%, rgba(203,161,53,0.12) 0%, transparent 70%)'
                 }} 
            />

            {/* Quote Icon */}
            <FaQuoteLeft className="text-[#CBA135] opacity-30 text-2xl absolute top-6 right-6 transition-opacity duration-500 group-hover:opacity-60" />

            {/* Stars */}
            <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: review.rating }).map((_, i) => (
                    <span 
                        key={i} 
                        className="text-lg leading-none"
                        style={{ color: '#CBA135', filter: 'drop-shadow(0 0 6px rgba(203,161,53,0.5))' }}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Review text */}
            <p className="text-white/85 font-body text-[0.9rem] leading-relaxed mb-6 relative z-10 min-h-[85px]">
                "{review.review}"
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-5 relative z-10 transition-colors duration-500 group-hover:bg-[#CBA135]/30" />

            {/* Footer */}
            <div className="flex items-center gap-3 relative z-10">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[0.8rem] tracking-wide font-bold text-white flex-shrink-0 transition-colors duration-500 group-hover:bg-[#CBA135]/20"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                    {review.initials}
                </div>
                <div>
                    <p className="text-white font-heading font-semibold text-[0.95rem]">{review.name}</p>
                    <p className="text-white/50 font-body text-[0.75rem] tracking-wide mt-0.5 flex items-center gap-1">
                        <span className="text-[#CBA135]/70 text-[0.65rem]">📍</span> {review.location}
                    </p>
                </div>
            </div>
        </div>
    )
}

const allReviews = [...reviews, ...reviews, ...reviews]

export default function TestimonialsSection() {
    return (
        <section className="py-20 overflow-hidden relative" style={{ background: '#0F1F3A' }}>
            {/* Enhanced premium background texture & glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(circle at 15% 50%, rgba(203,161,53,0.08) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(74,111,165,0.15) 0%, transparent 50%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="section-tag mb-4 text-[#CBA135] tracking-[0.2em] font-medium">What Clients Say</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                        Customer{' '}
                        <span className="italic font-light text-[#CBA135]/90">Feedback</span>
                    </h2>
                    <span className="w-12 h-[2px] bg-[#CBA135] rounded-full mx-auto block mb-6 shadow-[0_0_12px_rgba(203,161,53,0.4)]" />
                    <p className="text-white/60 font-body max-w-xl mx-auto text-[0.95rem] leading-relaxed">
                        Real stories from our valued clients. We pride ourselves on building trust, delivering excellence, and making property journeys seamless.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Marquee */}
            <div className="marquee-wrapper relative py-4">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
                    style={{ background: 'linear-gradient(to right, #0F1F3A 20%, transparent)' }} />
                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
                    style={{ background: 'linear-gradient(to left, #0F1F3A 20%, transparent)' }} />

                {/* Overriding the default gap-1.5rem for more luxury breathing room */}
                <div className="marquee-track px-4" style={{ gap: '2rem' }}>
                    {allReviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>
            </div>
        </section>
    )
}
