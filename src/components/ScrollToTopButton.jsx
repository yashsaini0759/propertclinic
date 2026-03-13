import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setVisible(docHeight > 0 && scrolled / docHeight >= 0.30)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    title="Back to top"
                    style={{
                        position: 'fixed',
                        bottom: 28,
                        left: 24,
                        zIndex: 1000,
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1E4D8F, #4A6FA5)',
                        border: '1.5px solid rgba(74,111,165,0.6)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(30,77,143,0.45)',
                    }}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 20px rgba(74,111,165,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                >
                    <FiArrowUp size={20} strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
