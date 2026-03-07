import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function FloatingWhatsApp() {
    return (
        <>
            {/* Call Button — blue pulse, same size as WhatsApp */}
            <a
                href="tel:+919627088818"
                aria-label="Call us"
                title="Call +91 9627088818"
                className="call-btn"
            >
                <FaPhone size={24} />
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/9627088818"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
                title="Chat with us on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </a>
        </>
    )
}
