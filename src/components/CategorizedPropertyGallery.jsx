import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropertyGallery from './PropertyGallery'

export default function CategorizedPropertyGallery({ interiorImages = [], exteriorImages = [] }) {
    const [activeTab, setActiveTab] = useState('Interior')
    const [showAll, setShowAll] = useState(false)

    const activeImages = activeTab === 'Interior' ? interiorImages : exteriorImages
    
    // Fallback: If no images available for neither side, return null
    if ((!interiorImages || interiorImages.length === 0) && (!exteriorImages || exteriorImages.length === 0)) return null

    // Determine images to render in grid
    const visibleImages = showAll ? activeImages : activeImages.slice(0, 6)
    const hasMore = activeImages.length > 6

    const handleTabSwitch = (tab) => {
        setActiveTab(tab)
        setShowAll(false) // Reset view more when switching tabs
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white p-7"
            style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}
        >
            <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-3">Property Gallery</h2>
            <div className="gold-divider mb-5" />

            {/* Tab Navbar */}
            <div className="flex flex-wrap gap-2 mb-6">
                {['Interior', 'Exterior'].map((tab) => {
                    const isActive = activeTab === tab
                    return (
                        <button
                            key={tab}
                            onClick={() => handleTabSwitch(tab)}
                            className="relative px-5 py-2 rounded-lg text-sm font-body font-semibold transition-all duration-200 focus:outline-none"
                            style={
                                isActive
                                    ? {
                                        background: '#0F1A2A',
                                        color: '#CBA135',
                                        border: '1.5px solid #CBA135',
                                    }
                                    : {
                                        background: '#F8F9FA',
                                        color: '#4B5563',
                                        border: '1.5px solid #e5e7eb',
                                    }
                            }
                        >
                            {tab}
                            {isActive && (
                                <motion.span
                                    layoutId="gallery-pill"
                                    className="absolute inset-0 rounded-lg"
                                    style={{ border: '1.5px solid #CBA135', opacity: 0 }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Inner Property Gallery wrapper with animations */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeImages && activeImages.length > 0 ? (
                        <>
                            {/* Reusing existing PropertyGallery component but hiding its outer card style and text header */}
                            <PropertyGallery 
                                images={visibleImages} 
                                hideHeader={true} 
                                hideCard={true} 
                            />
                            
                            {/* Subtle View More / View Less Button */}
                            {hasMore && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 flex justify-center"
                                >
                                    <button
                                        onClick={() => setShowAll(!showAll)}
                                        className="text-[#4B5563] font-body text-sm font-semibold px-6 py-2 rounded-full border border-gray-200 hover:border-[#CBA135] hover:text-[#CBA135] transition-all duration-300 bg-[#F8F9FA] hover:bg-white flex items-center gap-2"
                                    >
                                        {showAll ? 'View Less Gallery' : 'View More Gallery'}
                                        <svg 
                                            className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        <p className="text-gray-500 font-body text-sm italic">No {activeTab.toLowerCase()} images available.</p>
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
