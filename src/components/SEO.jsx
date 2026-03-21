import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Kashi Property Clinic'
const SITE_URL = 'https://www.kashipropertyclinic.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/logo/property_clinic_main_logo.png`
const DEFAULT_KEYWORDS = 'property in Kashipur, real estate Kashipur, buy property Kashipur, villas in Kashipur, plots in Kashipur, flats in Kashipur, Kashi Property Clinic, Kashipur Property Clinic, real estate agent Kashipur, property dealer Kashipur, Uttarakhand real estate'

// LocalBusiness + RealEstateAgent JSON-LD — injected on every page
const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: 'Kashipur Property Clinic',
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      image: DEFAULT_IMAGE,
      description: 'Trusted real estate agent in Kashipur offering premium villas, plots, flats and commercial properties in Kashipur, Uttarakhand.',
      telephone: '+91-9627088818',
      email: 'contact@kashipropertyclinic.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, Spectrum Mall, Cheema Chauraha',
        addressLocality: 'Kashipur',
        addressRegion: 'Uttarakhand',
        postalCode: '244713',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.2109,
        longitude: 78.9621,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      sameAs: ['https://www.kashipropertyclinic.com'],
      areaServed: {
        '@type': 'City',
        name: 'Kashipur',
        containedIn: { '@type': 'State', name: 'Uttarakhand', containedIn: 'India' },
      },
    },
  ],
}

// FAQ JSON-LD — hidden in head, surfaces as rich snippets in Google
const HOME_FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best properties in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashi Property Clinic offers premium villas, plots, and apartments in Kashipur including Jannat Villas, Vedanta Greens, Vedanta Heights, Vedanta Elite, and Vedanta Avenue — all with world-class amenities and prime locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to buy property in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact Kashi Property Clinic at +91-9627088818 or visit our office at 2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur. Our experts guide you through site visits, legal documentation, and home loan assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kashipur good for real estate investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Kashipur is one of the fastest-growing cities in Uttarakhand with excellent connectivity via NH-74, an expanding industrial base, and rising demand for residential properties — making it an excellent real estate investment destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of properties are available in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashi Property Clinic offers a wide range of properties in Kashipur: 2 BHK and 3 BHK villas, luxury apartments, premium residential plots, and commercial spaces across multiple Vedanta and Jannat projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to contact Kashi Property Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Kashi Property Clinic by calling +91-9627088818, WhatsApp at the same number, emailing contact@kashipropertyclinic.com, or visiting 2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur, Uttarakhand 244713.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of property in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Property prices in Kashipur vary by type and location. Kashi Property Clinic offers options across budget segments — from residential plots to premium villas. Contact us at +91-9627088818 for current pricing details.',
      },
    },
  ],
}

export default function SEO({
  title,
  description,
  name = SITE_NAME,
  type = 'website',
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  keywords = DEFAULT_KEYWORDS,
  jsonLd = null,         // extra JSON-LD (e.g. per-property Product schema)
  includeFaq = false,    // inject FAQPage schema (Home page only)
  noIndex = false,       // for any pages you don't want indexed
}) {
  const fullTitle = title
    ? `${title} | ${name}`
    : `${name} | Trusted Real Estate in Kashipur`

  const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Geo / Local ── */}
      <meta name="geo.region" content="IN-UT" />
      <meta name="geo.placename" content="Kashipur, Uttarakhand, India" />
      <meta name="geo.position" content="29.2109;78.9621" />
      <meta name="ICBM" content="29.2109, 78.9621" />

      {/* ── Open Graph ── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KashiPropertyClinic" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── LocalBusiness JSON-LD (every page) ── */}
      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_LD)}
      </script>

      {/* ── FAQ JSON-LD (Home page — invisible rich snippet) ── */}
      {includeFaq && (
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_LD)}
        </script>
      )}

      {/* ── Custom per-page JSON-LD ── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
