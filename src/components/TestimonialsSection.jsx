import { motion } from 'framer-motion'

const reviews = [
    {
        name: 'Adeel Ahmad',
        location: 'Ramnagarh',
        review:
            'Kashi Property Clinic made my home buying journey effortless and enjoyable. The team was professional and guided me every step of the way. Highly recommended!',
        rating: 5,
        avatar: '👨‍💼',
    },
    {
        name: 'Mohd Anas Khan',
        location: 'Kashipur',
        review:
            'The service was exceptional! They guided me through every step of buying my property with ease and expertise. I felt supported and informed throughout the entire process.',
        rating: 5,
        avatar: '👨‍💻',
    },
    {
        name: 'Ravi Sharma',
        location: 'Moradabad',
        review:
            'Excellent guidance for home loans. The staff is knowledgeable and provided clear explanations. My loan was processed smoothly without any hassle.',
        rating: 5,
        avatar: '🧑',
    },
    {
        name: 'Priya Gupta',
        location: 'Haldwani',
        review:
            'Found my dream home through Property Clinic. Their property search assistance is top notch. Very professional team, transparent dealings throughout.',
        rating: 5,
        avatar: '👩',
    },
    {
        name: 'Suresh Verma',
        location: 'Kashipur',
        review:
            'Legal transaction support was flawless. They handled all the paperwork professionally. I had complete peace of mind throughout the property purchase.',
        rating: 5,
        avatar: '👴',
    },
    {
        name: 'Anjali Singh',
        location: 'Rudrapur',
        review:
            'Very trustworthy team. They not only helped me buy a property but also managed it efficiently. Their post-sales support is outstanding.',
        rating: 5,
        avatar: '👩‍💼',
    },
]

function ReviewCard({ review }) {
    return (
        <div
            className="rounded-2xl p-6 flex-shrink-0"
            style={{
                width: 340,
                background: '#FFFFFF',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.04)',
            }}
        >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[#C0392B] text-lg">★</span>
                ))}
            </div>
            {/* Review text */}
            <p className="text-gray-600 font-body text-sm leading-relaxed mb-5 italic relative pl-4">
                <span className="absolute -left-1 top-0 text-3xl font-serif text-[#1E4D8F] opacity-40 leading-none">"</span>
                {review.review}
            </p>
            {/* Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-50 border border-gray-200"
                >
                    {review.avatar}
                </div>
                <div>
                    <p className="text-[#0F1A2A] font-heading font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-500 font-body text-xs tracking-wide">📍 {review.location}</p>
                </div>
            </div>
        </div>
    )
}

// Duplicate reviews for seamless infinite loop
const allReviews = [...reviews, ...reviews, ...reviews]

export default function TestimonialsSection() {
    return (
        <section
            className="py-24 overflow-hidden"
            style={{ background: '#0F1A2A' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="section-tag mb-3">What Clients Say</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Customer{' '}
                        <span className="italic font-bold text-[#4A6FA5]">Feedback</span>
                    </h2>
                    <div className="accent-divider mx-auto mb-5" />
                    <p className="text-white/50 font-body max-w-xl mx-auto">
                        Hear from our satisfied clients and their experiences with us.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Marquee */}
            <div className="marquee-wrapper">
                <div className="marquee-track gap-6 px-6">
                    {allReviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
                style={{ background: 'linear-gradient(to right, #0F1A2A, transparent)' }} />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
                style={{ background: 'linear-gradient(to left, #0F1A2A, transparent)' }} />
        </section>
    )
}
