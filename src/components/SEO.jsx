import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  name = "Kashi Property Clinic", 
  type = "website",
  image = "https://kashipropertyclinic.com/images/logo/property_clinic_main_logo.png",
  url = "https://kashipropertyclinic.com/" 
}) {
  const fullTitle = `${title} | ${name}`
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}
    </Helmet>
  )
}
