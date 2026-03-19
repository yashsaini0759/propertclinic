import { Link } from 'react-router-dom'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const footerLinks = {
    Navigate: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Properties', href: '/properties' },
        { label: 'Contact Us', href: '/contact' },
    ],
    Services: [
        { label: 'Property Management', href: '/services' },
        { label: 'Legal Transactions', href: '/services' },
        { label: 'Home Loans', href: '/services' },
        { label: 'Property Search', href: '/services' },
    ],
}

export default function Footer() {
    return (
        <footer className="relative" style={{ background: '#0F1F3A' }}>
            {/* Blue top accent strip */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, #1E4D8F, #4A6FA5, #1E4D8F, transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center mb-5 w-fit">
                            <img
                                src="/images/logo/property_clinic_main_logo.png"
                                alt="Kashi Property Clinic"
                                className="h-20 w-auto object-contain"
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
                            Your trusted partner for comprehensive real estate solutions in Kashipur, Uttarakhand. Building trust since 2018.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebook size={16} />, href: 'https://www.facebook.com/PropertyClinicKashipur/', label: 'Facebook' },
                                { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/property_clinic_kashipur/', label: 'Instagram' },
                                { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/9627088818', label: 'WhatsApp' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(30,77,143,0.4)'
                                        e.currentTarget.style.borderColor = 'rgba(30,77,143,0.5)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Link Columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <div className="flex items-center gap-2 mb-6">
                                <h4 className="text-white font-heading font-bold text-base">{section}</h4>
                                <span className="flex-1 h-px bg-white/10 max-w-[32px]" />
                            </div>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-white/45 hover:text-[#4A6FA5] font-body text-sm transition-all duration-200 hover:pl-1.5 inline-block"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <h4 className="text-white font-heading font-bold text-base">Contact</h4>
                            <span className="flex-1 h-px bg-white/10 max-w-[32px]" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-white/45 text-sm font-body">
                                <MdEmail className="text-[#4A6FA5] mt-0.5 flex-shrink-0" size={16} />
                                <a href="mailto:contact@kashipropertyclinic.com" className="hover:text-[#4A6FA5] transition-colors break-all">
                                    contact@kashipropertyclinic.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-white/45 text-sm font-body">
                                <MdPhone className="text-[#4A6FA5] mt-0.5 flex-shrink-0" size={16} />
                                <a href="tel:+919627088818" className="hover:text-[#4A6FA5] transition-colors">
                                    +91 9627088818
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-white/45 text-sm font-body">
                                <MdLocationOn className="text-[#4A6FA5] mt-0.5 flex-shrink-0" size={16} />
                                <span>2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur, Uttarakhand 244713</span>
                            </div>
                            <div className="flex items-start gap-3 text-white/45 text-sm font-body">
                                <span className="text-[#4A6FA5] mt-0.5 flex-shrink-0 text-base">⏰</span>
                                <span>Mon – Sat: 9 AM – 5 PM</span>
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
