import { motion } from 'framer-motion'

export default function PropertyVideo({ 
  videoId, 
  heading = "Experience the Property", 
  slogan = "Take a virtual tour of your future home" 
}) {
  if (!videoId) return null

  return (
    <div className="w-full mt-16 mb-8 order-2 md:order-none">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="section-tag mb-2">{slogan}</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0F1A2A]">
          {heading}
        </h2>
        <div className="accent-divider mx-auto mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full overflow-hidden rounded-2xl shadow-luxury group"
        style={{ paddingTop: '56.25%', background: '#000' }} // 16:9 Aspect Ratio
      >
        <div className="absolute inset-0 w-full h-full border-[10px] border-white/5 rounded-2xl pointer-events-none z-10" />
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=0&controls=1`}
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Property Tour"
        ></iframe>
      </motion.div>
    </div>
  )
}
