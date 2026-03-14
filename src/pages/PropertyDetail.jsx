import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiMapPin, FiExternalLink, FiDownload, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { getPropertyBySlug } from '../data/properties'
import Footer from '../components/Footer'
import PropertyMap from '../components/PropertyMap'
import SEO from '../components/SEO'
import PropertyVideo from '../components/PropertyVideo'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug)

  if (!property) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: '#0B1F22' }}>
        <SEO title="Property Not Found" description="The requested property could not be found." />
        <p className="text-white text-xl font-body mb-6">Property not found.</p>
        <Link to="/properties" className="btn-gold">← Back to Properties</Link>
      </main>
    )
  }

  const waMsg = encodeURIComponent(`Hi! I'm interested in ${property.name}. Please share more details.`)

  return (
    <main>
      <SEO 
        title={property.name} 
        description={`Explore ${property.name} in ${property.location}. ${property.description}`}
        image={`https://kashipropertyclinic.com${property.image}`}
        url={`https://kashipropertyclinic.com/property/${slug}`}
      />
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{ background: '#0F1A2A' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={property.bannerImage || property.image} alt={property.name}
            className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11,31,34,0.35) 0%, rgba(11,31,34,0.92) 100%)' }} />
        </div>

        {/* Badge & Back button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-36 md:top-40 left-4 sm:left-8 flex items-center gap-3 z-50 pointer-events-auto"
        >
          <Link to="/properties"
            className="flex items-center gap-1.5 text-white/70 hover:text-[#CBA135] text-sm font-body transition-colors">
            <FiArrowLeft /> Back to Properties
          </Link>
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-12 pt-44">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider font-body text-white mb-4"
              style={{ background: property.type === 'Commercial' ? 'rgba(192,57,43,0.85)' : 'rgba(15,61,62,0.9)', border: '1px solid rgba(203,161,53,0.4)' }}>
              {property.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
              {property.name}
            </h1>
            <p className="text-[#CBA135] font-body italic text-lg mb-3">{property.tagline}</p>
            <div className="flex items-center gap-2 text-white/60 font-body text-sm">
              <FiMapPin size={14} />
              <span>{property.location}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/50">{property.status}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4 sm:px-6" style={{ background: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT — Description + Highlights + Map */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Description Card */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="rounded-2xl p-7 bg-white"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}>
                <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-3">About this Property</h2>
                <div className="gold-divider mb-5" />
                <p className="text-gray-500 font-body leading-relaxed">{property.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-7 bg-white"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}>
                <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-3">Key Highlights</h2>
                <div className="gold-divider mb-5" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <FiCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: '#CBA135' }} size={18} />
                      <span className="text-gray-600 font-body text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Integrated Map */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}>
                <div className="px-7 pt-7 pb-4">
                  <h2 className="font-heading text-2xl font-bold text-[#0B1F22] mb-1">Location</h2>
                  <div className="gold-divider mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 font-body text-sm">
                      <FiMapPin size={14} />
                      <span>{property.location}</span>
                    </div>
                    {/* Open in Maps button — top right of location header */}
                    {property.mapLink && (
                      <a
                        href={property.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                        style={{
                          background: '#fff',
                          border: '1.5px solid #CBA135',
                          color: '#CBA135',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#CBA135'
                          e.currentTarget.style.color = '#fff'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = '#fff'
                          e.currentTarget.style.color = '#CBA135'
                        }}
                      >
                        <FiExternalLink size={12} />
                        Open in Maps
                      </a>
                    )}
                  </div>
                </div>

                {/* Map Embed */}
                {property.lat && property.lng ? (
                  <PropertyMap 
                    lat={property.lat} 
                    lng={property.lng} 
                    name={property.name} 
                    location={property.location} 
                  />
                ) : (
                  <div className="relative" style={{ height: 340 }}>
                    <iframe
                      src={property.mapEmbed}
                      width="100%" height="100%"
                      style={{ border: 0 }}
                      allowFullScreen loading="lazy"
                      title={`${property.name} Location Map`}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}

                {/* Open in Google Maps — bottom link */}
                {property.mapLink && (
                  <div className="px-7 py-4">
                    <a href={property.mapLink} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#CBA135] font-body text-sm font-semibold hover:gap-3 transition-all">
                      <FiMapPin size={14} /> Open in Google Maps →
                    </a>
                  </div>
                )}
              </motion.div>

              {/* VIDEO COMPONENT */}
              <PropertyVideo 
                videoId={property.videoId} 
                heading="Experience the Property" 
                slogan="Take a virtual tour of your future home" 
              />

            </div>

            {/* RIGHT — Sticky CTA Sidebar */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 lg:sticky lg:top-28 self-start">

              {/* Info Card */}
              <div className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #1E4D8F, #0F1A2A)', border: '1px solid rgba(74,111,165,0.25)' }}>
                <p className="section-tag mb-1">Price</p>
                <p className="font-heading text-2xl font-bold text-white mb-4">{property.price}</p>
                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/50">Type</span>
                    <span className="text-white font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/50">Category</span>
                    <span className="text-white font-medium">{property.badge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Status</span>
                    <span className="font-semibold" style={{ color: '#CBA135' }}>{property.status}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Enquire */}
              <a href={`https://wa.me/9627088818?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 w-full text-sm">
                <FaWhatsapp size={18} /> Enquire on WhatsApp
              </a>

              {/* Call */}
              <a href="tel:+919627088818"
                className="flex items-center justify-center gap-2 w-full rounded py-3 text-sm font-body font-semibold transition-all"
                style={{ border: '1.5px solid #0F3D3E', color: '#0F3D3E', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0F3D3E'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0F3D3E' }}>
                📞 Call Us
              </a>

              {/* Brochure */}
              {property.brochure && (
                <a href={property.brochure} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded py-3 text-sm font-body font-semibold"
                  style={{ background: '#F8F9FA', border: '1.5px solid #e5e7eb', color: '#0B1F22' }}>
                  <FiDownload size={15} /> Download Brochure
                </a>
              )}

              {/* Back */}
              <Link to="/properties"
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#0F3D3E] text-sm font-body transition-colors mt-1">
                <FiArrowLeft size={14} /> All Properties
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}