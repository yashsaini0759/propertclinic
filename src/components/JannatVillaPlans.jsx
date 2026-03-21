import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * JannatVillaPlans
 *
 * Navbar-style grouped tabs:
 *   Villa Type 1  →  Ground Floor | First Floor
 *   Villa Type 2  →  Ground Floor | First Floor
 *   Site Map      →  (single image, no sub-tabs)
 */

const PLANS = [
    {
        label: 'Villa Type 1',
        floors: [
            { label: 'Ground Floor', src: '/images/JANNAT VILA/VILLA TYPE 1 GROUND FLOOR .jpg' },
            { label: 'First Floor',  src: '/images/JANNAT VILA/VILLA TYPE 1 FIRST FLOOR.jpg'  },
        ],
    },
    {
        label: 'Villa Type 2',
        floors: [
            { label: 'Ground Floor', src: '/images/JANNAT VILA/VILLA TYPE 2 GROUND FLOOR.jpg' },
            { label: 'First Floor',  src: '/images/JANNAT VILA/VILLA TYPE 2 FIRST FLOOR.jpg'  },
        ],
    },
    {
        label: 'Site Map',
        floors: [
            { label: 'Site Map', src: '/images/JANNAT VILA/JANNAT VILLA SITE MAP.jpg' },
        ],
    },
]

export default function JannatVillaPlans() {
    const [activeGroup, setActiveGroup]   = useState(0)
    const [activeFloor, setActiveFloor]   = useState(0)

    // When switching the parent tab, reset the floor sub-tab to 0
    function selectGroup(idx) {
        setActiveGroup(idx)
        setActiveFloor(0)
    }

    const currentPlan  = PLANS[activeGroup]
    const currentImage = currentPlan.floors[activeFloor]
    const hasSubTabs   = currentPlan.floors.length > 1

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-white"
            style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}
        >
            {/* ── Header ── */}
            <div className="px-7 pt-7 pb-0">
                <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-1">
                    Floor Plans &amp; Maps
                </h2>
                <div className="gold-divider mb-5" />

                {/* ── Primary Navbar (Villa Type 1 / Villa Type 2 / Site Map) ── */}
                <div
                    className="flex gap-1 p-1 rounded-xl"
                    style={{ background: '#F1F5F9', width: 'fit-content', maxWidth: '100%' }}
                >
                    {PLANS.map((group, i) => (
                        <button
                            key={group.label}
                            onClick={() => selectGroup(i)}
                            className="relative px-4 py-2 rounded-lg text-sm font-body font-semibold transition-all duration-250 focus:outline-none whitespace-nowrap"
                            style={
                                activeGroup === i
                                    ? {
                                          background: '#0F1A2A',
                                          color: '#CBA135',
                                          boxShadow: '0 2px 8px rgba(15,26,42,0.18)',
                                      }
                                    : {
                                          background: 'transparent',
                                          color: '#64748B',
                                      }
                            }
                        >
                            {group.label}
                        </button>
                    ))}
                </div>

                {/* ── Sub-tabs (Ground Floor / First Floor) ── */}
                {hasSubTabs && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {currentPlan.floors.map((floor, j) => (
                            <button
                                key={floor.label}
                                onClick={() => setActiveFloor(j)}
                                className="px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-all duration-200 focus:outline-none"
                                style={
                                    activeFloor === j
                                        ? {
                                              background: '#EBF0FA',
                                              color: '#1E4D8F',
                                              border: '1.5px solid #1E4D8F',
                                          }
                                        : {
                                              background: '#F8F9FA',
                                              color: '#4B5563',
                                              border: '1.5px solid #e5e7eb',
                                          }
                                }
                            >
                                {floor.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Image Panel ── */}
            <div
                className="relative overflow-hidden mt-5"
                style={{ background: '#F0F1F3', minHeight: 340 }}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={`${activeGroup}-${activeFloor}`}
                        src={currentImage.src}
                        alt={`${currentPlan.label} — ${currentImage.label}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full object-contain"
                        style={{ maxHeight: 520 }}
                        loading="lazy"
                    />
                </AnimatePresence>
            </div>

            {/* ── Caption / View Full Size ── */}
            <div className="px-7 py-4 flex items-center justify-between">
                <span className="text-gray-400 font-body text-sm">
                    {currentPlan.label}
                    {hasSubTabs ? ` — ${currentImage.label}` : ''}
                </span>
                <a
                    href={currentImage.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-body font-semibold px-3 py-1.5 rounded-lg transition-all"
                    style={{ border: '1.5px solid #CBA135', color: '#CBA135' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#CBA135'
                        e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#CBA135'
                    }}
                >
                    View Full Size ↗
                </a>
            </div>
        </motion.div>
    )
}
