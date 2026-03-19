import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FloorPlansGallery
 *
 * Props:
 *   maps: Array<{ title: string, src: string }>
 *     e.g. [
 *       { title: '3 BHK', src: '/images/vedanta_greens/VEDANTA GREENS 3BHK.jpg' },
 *       { title: '4 BHK', src: '/images/vedanta_greens/VEDANTA GREENS 4 BHK.jpg' },
 *       { title: 'Street Map', src: '/images/vedanta_greens/VEDANTA GREENS Map.jpg' },
 *     ]
 *   heading: string  (optional, defaults to "Floor Plans & Maps")
 */
export default function FloorPlansGallery({ maps = [], heading = 'Floor Plans & Maps' }) {
  const [active, setActive] = useState(0)

  if (!maps || maps.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl overflow-hidden bg-white"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}
    >
      {/* Header */}
      <div className="px-7 pt-7 pb-4">
        <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-1">{heading}</h2>
        <div className="gold-divider mb-5" />

        {/* Tab Navbar */}
        <div className="flex flex-wrap gap-2">
          {maps.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative px-4 py-2 rounded-lg text-sm font-body font-semibold transition-all duration-200 focus:outline-none"
              style={
                active === i
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
              {item.title}
              {active === i && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ border: '1.5px solid #CBA135', opacity: 0 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image Panel */}
      <div className="relative overflow-hidden bg-[#F0F1F3]" style={{ minHeight: 340 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={maps[active].src}
            alt={maps[active].title}
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

      {/* Caption */}
      <div className="px-7 py-4 flex items-center justify-between">
        <span className="text-gray-400 font-body text-sm">{maps[active].title}</span>
        <a
          href={maps[active].src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-body font-semibold px-3 py-1.5 rounded-lg transition-all"
          style={{ border: '1.5px solid #CBA135', color: '#CBA135' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#CBA135'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#CBA135' }}
        >
          View Full Size ↗
        </a>
      </div>
    </motion.div>
  )
}
