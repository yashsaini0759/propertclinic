import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const bannerImage = '/images/Banner/LANDING PAGE BANNER 1.png'

export default function FamilyBannerSection() {
    const navigate = useNavigate()

    return (
        <section
            style={{
                background: '#FFFFFF',
                padding: '4rem 0',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 1.5rem',
                }}
            >
                {/* Split card */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(15,31,58,0.10)',
                        minHeight: '460px',
                    }}
                    className="family-banner-card"
                >
                    {/* ── LEFT: Image ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.04 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            flex: '1 1 50%',
                            position: 'relative',
                            minHeight: '360px',
                            overflow: 'hidden',
                        }}
                        className="family-banner-image-wrap"
                    >
                        <img
                            src={bannerImage}
                            alt="A happy Indian family finding their dream home"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block',
                                transition: 'transform 8s ease',
                            }}
                            className="family-banner-img"
                        />
                        {/* Subtle right-edge gradient to blend into right panel */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to right, transparent 70%, rgba(255,255,255,0.18) 100%)',
                                pointerEvents: 'none',
                            }}
                        />
                    </motion.div>

                    {/* ── RIGHT: Text ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            flex: '1 1 50%',
                            background: '#FAFBFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '3.5rem 3rem',
                            gap: '1.4rem',
                        }}
                        className="family-banner-text"
                    >
                        {/* Eyebrow tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                width: 'fit-content',
                            }}
                        >
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '28px',
                                    height: '3px',
                                    borderRadius: '2px',
                                    background: '#C0392B',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#C0392B',
                                    fontFamily: 'var(--font-body, sans-serif)',
                                }}
                            >
                                Your Trusted Real Estate Partner
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.3 }}
                            style={{
                                fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                                fontWeight: 700,
                                fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)',
                                lineHeight: 1.25,
                                color: '#0F1F3A',
                                margin: 0,
                            }}
                        >
                            Let's find the home your{' '}
                            <span style={{ color: '#1E4D8F' }}>family</span>{' '}
                            truly{' '}
                            deserves.
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.38 }}
                            style={{
                                fontFamily: 'var(--font-body, sans-serif)',
                                fontSize: '0.97rem',
                                lineHeight: 1.75,
                                color: '#4A5A72',
                                margin: 0,
                                maxWidth: '420px',
                            }}
                        >
                            At Property Clinic Kashipur, we don't just sell properties — we help
                            families build memories. With trusted guidance, transparent dealings,
                            and a deep understanding of your needs, your dream home is closer
                            than you think.
                        </motion.p>

                        {/* Trust signals */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.46 }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                            }}
                        >
                            {['Trusted Since 2018', '500+ Happy Families', 'Kashipur\'s #1 Clinic'].map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontSize: '0.78rem',
                                        fontWeight: 600,
                                        color: '#1E4D8F',
                                        background: '#EBF0FA',
                                        borderRadius: '100px',
                                        padding: '4px 14px',
                                        letterSpacing: '0.02em',
                                        fontFamily: 'var(--font-body, sans-serif)',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.52 }}
                            style={{ marginTop: '0.5rem' }}
                        >
                            <button
                                onClick={() => navigate('/properties')}
                                className="family-banner-cta"
                                style={{
                                    background: 'linear-gradient(135deg, #1E4D8F 0%, #2563EB 100%)',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '0.8rem 2rem',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-body, sans-serif)',
                                    letterSpacing: '0.03em',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 20px rgba(30,77,143,0.32)',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,77,143,0.42)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,77,143,0.32)'
                                }}
                            >
                                Explore Properties →
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Responsive styles ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

                .family-banner-card {
                    flex-direction: row !important;
                }

                .family-banner-img:hover {
                    transform: scale(1.03);
                }

                @media (max-width: 768px) {
                    .family-banner-card {
                        flex-direction: column !important;
                    }
                    .family-banner-image-wrap {
                        flex: unset !important;
                        height: 280px !important;
                        min-height: unset !important;
                    }
                    .family-banner-text {
                        flex: unset !important;
                        padding: 2.2rem 1.6rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .family-banner-text {
                        padding: 1.8rem 1.2rem !important;
                    }
                    .family-banner-image-wrap {
                        height: 240px !important;
                    }
                }
            `}</style>
        </section>
    )
}
