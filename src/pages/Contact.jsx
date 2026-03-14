import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import Footer from '../components/Footer'

const contactCards = [
    {
        icon: <MdPhone size={28} />,
        label: 'Call Us',
        value: '+91 9627088818',
        href: 'tel:+919627088818',
        color: '#1E4D8F',
    },
    {
        icon: <FaWhatsapp size={28} />,
        label: 'WhatsApp',
        value: '+91 9627088818',
        href: 'https://wa.me/9627088818',
        color: '#25D366',
    },
    {
        icon: <MdEmail size={28} />,
        label: 'Email Us',
        value: 'contact@kashipropertyclinic.com',
        href: 'mailto:contact@kashipropertyclinic.com',
        color: '#1E4D8F',
    },
    {
        icon: <MdAccessTime size={28} />,
        label: 'Working Hours',
        value: 'Mon – Sat: 9 AM – 5 PM',
        href: null,
        color: '#C0392B',
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = encodeURIComponent(
            `Hi, I'm ${form.name}! Email: ${form.email}. Phone: ${form.phone}. ${form.message}`
        )
        window.open(`https://wa.me/9627088818?text=${msg}`, '_blank')
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <main>
            {/* Hero */}
            <section
                className="relative pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center min-h-[50vh] overflow-hidden"
                style={{ background: '#0F1A2A' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 60% 50%, #1E4D8F 0%, transparent 50%)' }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center relative z-10 max-w-3xl"
                >
                    <p className="section-tag mb-4">Get In Touch</p>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5">
                        Contact{' '}
                        <span className="italic font-bold text-[#4A6FA5]">Us Today</span>
                    </h1>
                    <div className="accent-divider mx-auto mb-6" />
                    <p className="text-white/60 font-body max-w-xl mx-auto text-lg">
                        Reach out for seamless real estate solutions and expert guidance tailored to your needs.
                    </p>
                </motion.div>
            </section>

            {/* Contact Sections */}
            <section className="py-20 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
                <div className="max-w-7xl mx-auto">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactCards.map((card, i) => (
                            <motion.div
                                key={card.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="card-hover"
                            >
                                {card.href ? (
                                    <a
                                        href={card.href}
                                        target={card.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="block rounded-2xl p-7 text-center h-full"
                                        style={{
                                            background: 'white',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                            border: '1px solid rgba(0,0,0,0.06)',
                                        }}
                                    >
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                                            style={{ background: `${card.color}15`, color: card.color }}
                                        >
                                            {card.icon}
                                        </div>
                                        <p className="text-gray-400 text-xs font-body tracking-widest uppercase mb-2">{card.label}</p>
                                        <p className="text-[#0F1A2A] font-body font-semibold text-sm leading-relaxed hover:text-[#1E4D8F] transition-colors">{card.value}</p>
                                    </a>
                                ) : (
                                    <div
                                        className="rounded-2xl p-7 text-center h-full"
                                        style={{
                                            background: 'white',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                            border: '1px solid rgba(0,0,0,0.06)',
                                        }}
                                    >
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                                            style={{ background: `${card.color}15`, color: card.color }}
                                        >
                                            {card.icon}
                                        </div>
                                        <p className="text-gray-400 text-xs font-body tracking-widest uppercase mb-2">{card.label}</p>
                                        <p className="text-[#0F1A2A] font-body font-semibold text-sm leading-relaxed">{card.value}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Form + Map Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-3xl p-8"
                            style={{ background: 'white', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
                        >
                            <h2 className="font-heading text-3xl font-bold text-[#0F1A2A] mb-2">Send a Message</h2>
                            <p className="text-gray-400 font-body text-sm mb-7">Your message will be sent to our WhatsApp</p>
                            <div className="accent-divider mb-7" />

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <p className="font-heading text-xl text-[#0F3D3E] font-bold">Message Sent!</p>
                                    <p className="text-gray-500 font-body mt-2">We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {[
                                        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Ravi Sharma' },
                                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'ravi@example.com' },
                                        { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                                    ].map((field) => (
                                        <div key={field.name}>
                                            <label className="block text-xs font-body font-semibold tracking-widest uppercase text-gray-500 mb-2">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                required
                                                placeholder={field.placeholder}
                                                value={form[field.name]}
                                                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl font-body text-sm text-[#0F1A2A] placeholder-gray-300 transition-all outline-none"
                                                style={{
                                                    background: '#F8F9FA',
                                                    border: '1.5px solid #e5e7eb',
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = '#1E4D8F'}
                                                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block text-xs font-body font-semibold tracking-widest uppercase text-gray-500 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="I'm interested in..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl font-body text-sm text-[#0F1A2A] placeholder-gray-300 transition-all outline-none resize-none"
                                            style={{
                                                background: '#F8F9FA',
                                                border: '1.5px solid #e5e7eb',
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#1E4D8F'}
                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary w-full text-sm">
                                        Send via WhatsApp 💬
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map + Address */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col gap-6"
                        >
                            {/* Google Map Embed */}
                            <div className="rounded-3xl overflow-hidden shadow-luxury flex-1" style={{ minHeight: 320 }}>
                                <iframe
                                    src="https://maps.google.com/maps?q=Spectrum+Shopping+Complex+Kashipur&z=17&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: 320 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Kashi Property Clinic Location"
                                />
                            </div>

                            {/* Address Card */}
                            <div
                                className="rounded-2xl p-6"
                                style={{
                                    background: '#0F1A2A',
                                    border: '1px solid rgba(74,111,165,0.2)',
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'rgba(74,111,165,0.15)', color: '#4A6FA5' }}
                                    >
                                        <MdLocationOn size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-white mb-1">Our Location</h3>
                                        <p className="text-white/60 font-body text-sm leading-relaxed">
                                            2nd Floor, Spectrum Mall, Cheema Chauraha,<br />
                                            Kashipur, Uttarakhand 244713
                                        </p>
                                        <a
                                            href="https://maps.app.goo.gl/huJKyojhN63wyXBa8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-3 text-[#4A6FA5] text-sm font-body font-semibold hover:gap-2.5 transition-all"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
