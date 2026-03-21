import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'

export default function PropertyGallery({ images = [] }) {
    const [lightboxIndex, setLightboxIndex] = useState(null)

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxIndex(null)
            if (e.key === 'ArrowRight' && lightboxIndex !== null) {
                setLightboxIndex((prev) => (prev + 1) % images.length)
            }
            if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
                setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [lightboxIndex, images.length])

    if (!images || images.length === 0) return null

    const openLightbox = (index) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)
    const nextImage = (e) => {
        e.stopPropagation()
        setLightboxIndex((prev) => (prev + 1) % images.length)
    }
    const prevImage = (e) => {
        e.stopPropagation()
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-7 bg-white"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}
            >
                <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-3">Property Gallery</h2>
                <div className="gold-divider mb-5" />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div 
                            key={index} 
                            className="aspect-square rounded-xl overflow-hidden cursor-pointer relative group bg-[#F0F1F3]"
                            onClick={() => openLightbox(index)}
                        >
                            <img 
                                src={src} 
                                alt={`Gallery view ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[#0F1A2A]/0 group-hover:bg-[#0F1A2A]/40 transition-colors duration-300 flex items-center justify-center">
                                <span className="bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                    <FiMaximize2 className="text-white" size={20} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-[#0B1F22]/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[1010] p-2 bg-white/5 hover:bg-white/10 rounded-full"
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Prev button */}
                        <button 
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[1010] p-3 bg-white/5 hover:bg-white/10 rounded-full"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            <FiChevronLeft size={32} />
                        </button>

                        {/* Next button */}
                        <button 
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[1010] p-3 bg-white/5 hover:bg-white/10 rounded-full"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <FiChevronRight size={32} />
                        </button>

                        {/* Image */}
                        <motion.img 
                            key={lightboxIndex}
                            src={images[lightboxIndex]} 
                            alt={`Fullscreen gallery view ${lightboxIndex + 1}`}
                            className="max-w-[85vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#CBA135] font-body text-sm font-semibold tracking-widest bg-[#0B1F22]/80 px-4 py-1.5 rounded-full border border-[#CBA135]/30">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
