import { Link } from 'react-router-dom'
import { MdOutlineRealEstateAgent, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

const footerLinks = {
    Support: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Properties', href: '/properties' },
        { label: 'Contact Us', href: '/contact' },
    ],
    Trust: [
        { label: 'Property Management', href: '/services' },
        { label: 'Legal Transactions', href: '/services' },
        { label: 'Home Loans', href: '/services' },
        { label: 'Property Search', href: '/services' },
    ],
}

export default function Footer() {
    const [email, setEmail] = useState('')

    return (
        <footer className="relative" style={{ background: '#0B1F22' }}>
            {/* Gold Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, #CBA135, #E5BE6A, #CBA135, transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, #CBA135, #E5BE6A)' }}>
                                <MdOutlineRealEstateAgent className="text-[#0B1F22] text-xl" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-white font-heading font-bold text-base">Property Clinic</span>
                                <span className="block text-[#CBA135] text-[9px] tracking-[0.2em] uppercase font-body">Kashipur</span>
                            </div>
                        </Link>
                        <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
                            Your trusted partner for comprehensive real estate solutions in Kashipur, Uttarakhand. Building trust since 2018.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/kashipropertyclinic', label: 'Facebook' },
                                { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/kashipropertyclinic', label: 'Instagram' },
                                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/9627088818', label: 'WhatsApp' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-[#CBA135] transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Links Columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="text-white font-heading font-bold text-lg mb-5">
                                {section}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-white/50 hover:text-[#CBA135] font-body text-sm transition-colors duration-200 hover:pl-1 inline-block transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact + Newsletter Column */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-lg mb-5">Contact</h4>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3 text-white/50 text-sm font-body">
                                <MdEmail className="text-[#CBA135] mt-0.5 flex-shrink-0" size={16} />
                                <a href="mailto:contact@kashipropertyclinic.com" className="hover:text-[#CBA135] transition-colors">
                                    contact@kashipropertyclinic.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-white/50 text-sm font-body">
                                <MdPhone className="text-[#CBA135] mt-0.5 flex-shrink-0" size={16} />
                                <a href="tel:+919627088818" className="hover:text-[#CBA135] transition-colors">
                                    +91 9627088818
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-white/50 text-sm font-body">
                                <MdLocationOn className="text-[#CBA135] mt-0.5 flex-shrink-0" size={16} />
                                <span>2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur, Uttarakhand 244713</span>
                            </div>
                            <div className="flex items-start gap-3 text-white/50 text-sm font-body">
                                <span className="text-[#CBA135] mt-0.5 flex-shrink-0">⏰</span>
                                <span>Mon – Sat: 9 AM – 5 PM</span>
                            </div>
                        </div>

                        {/* Email Subscription */}
                        <div>
                            <p className="text-white/70 text-xs font-body tracking-wide mb-3 uppercase">Newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email…"
                                    className="flex-1 px-3 py-2 rounded-lg text-sm font-body text-white placeholder-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-[#CBA135]/50 transition-colors"
                                />
                                <button
                                    className="px-4 py-2 rounded-lg text-sm font-body font-semibold transition-all hover:-translate-y-0.5"
                                    style={{ background: 'linear-gradient(135deg, #CBA135, #E5BE6A)', color: '#0B1F22' }}
                                    onClick={() => setEmail('')}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <p className="text-white/30 font-body text-sm">
                        All Rights Reserved © 2025 Kashi Property Clinic
                    </p>
                    <p className="text-white/20 font-body text-xs">
                        Designed with ❤️ in Kashipur
                    </p>
                </div>
            </div>
        </footer>
    )
}
