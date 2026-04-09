import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Kashi Property Clinic'
const SITE_URL = 'https://www.kashipropertyclinic.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/logo/property_clinic_main_logo.png`

const DEFAULT_KEYWORDS = [
  // Business name variations
  'Kashi Property Clinic', 'Kashipur Property Clinic', 'property clinic Kashipur',
  'Kashi Property Clinic Kashipur', 'best property dealer Kashipur',
  // House/home
  'house in Kashipur', 'house for sale in Kashipur', 'buy house Kashipur',
  'home in Kashipur', 'new house Kashipur', 'ready to move house Kashipur',
  // Villa
  'villa in Kashipur', 'luxury villa Kashipur', 'villas for sale Kashipur',
  '2BHK villa Kashipur', '3BHK villa Kashipur', '4BHK villa Kashipur',
  // Flat / Apartment
  'flat in Kashipur', 'flats in Kashipur', 'apartment in Kashipur',
  '2BHK flat Kashipur', '3BHK flat Kashipur', '4BHK flat Kashipur',
  '2BHK house Kashipur', '3BHK house Kashipur',
  // Plot / Land
  'plot in Kashipur', 'residential plot Kashipur', 'land for sale Kashipur',
  'plot for sale Kashipur', 'cheap plot Kashipur',
  // Commercial
  'commercial property Kashipur', 'shop in Kashipur', 'office space Kashipur',
  'commercial space Kashipur', 'showroom Kashipur',
  // General property
  'property in Kashipur', 'real estate Kashipur', 'buy property Kashipur',
  'property for sale Kashipur', 'residential property Kashipur',
  'real estate Kashipur Uttarakhand', 'property investment Kashipur',
  // Luxury
  'luxury property Kashipur', 'luxury homes Kashipur', 'premium villas Kashipur',
  'luxury real estate Kashipur', 'gated community Kashipur',
  // Specific properties — Google associates these with the site
  'Vedanta Greens Kashipur', 'Jannat Villas Kashipur', 'Vedanta Heights Kashipur',
  'Vedanta Elite Kashipur', 'Vedanta Avenue Kashipur', 'Vedanta Residency Kashipur',
  'Urban Bazar Kashipur', 'Highstreet Vedanta Kashipur', 'Walkway Kashipur',
  'City Center Kashipur', 'Noor Kashipur',
  // Agent searches
  'real estate agent Kashipur', 'property dealer Kashipur',
  'property consultant Kashipur', 'best property dealer Kashipur',
  // Broader
  'Uttarakhand real estate', 'property in Uttarakhand', 'Kashipur real estate investment',
].join(', ')

// ─── LocalBusiness Schema ────────────────────────────────────────────────────
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
      description:
        'Kashi Property Clinic is the trusted #1 real estate agent in Kashipur, Uttarakhand offering premium villas, plots, flats and commercial properties.',
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
      geo: { '@type': 'GeoCoordinates', latitude: 29.2109, longitude: 78.9621 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/PropertyClinicKashipur/',
        'https://www.instagram.com/property_clinic_kashipur/',
        'https://www.kashipropertyclinic.com',
      ],
      areaServed: {
        '@type': 'City',
        name: 'Kashipur',
        containedIn: { '@type': 'State', name: 'Uttarakhand', containedIn: 'India' },
      },
    },
  ],
}

// ─── FAQ Schema (Home page) ──────────────────────────────────────────────────
const HOME_FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best properties in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashi Property Clinic offers the best properties in Kashipur including Vedanta Greens (3 & 4 BHK villas), Jannat Villas (luxury villas), Vedanta Heights (luxury residences), Vedanta Elite, Vedanta Avenue (premium plots), Vedanta Residency, and commercial projects like Urban Bazar, Highstreet, Walkway, City Center, and Noor.',
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
        text: 'Kashi Property Clinic offers villas (2BHK, 3BHK, 4BHK), luxury apartments, premium residential plots, and commercial spaces like shops, offices and showrooms across multiple projects in Kashipur.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to contact Kashi Property Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or WhatsApp: +91-9627088818. Email: contact@kashipropertyclinic.com. Visit: 2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur, Uttarakhand 244713.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of property in Kashipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Property prices in Kashipur vary by type and location. Kashi Property Clinic offers options from budget residential plots to premium luxury villas. Contact us at +91-9627088818 for current pricing and site visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Kashi Property Clinic located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kashi Property Clinic is located at 2nd Floor, Spectrum Mall, Cheema Chauraha, Kashipur, Uttarakhand 244713. We are open Monday to Saturday, 9 AM to 7 PM.',
      },
    },
  ],
}

// ─── Breadcrumb generator ────────────────────────────────────────────────────
function buildBreadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export default function SEO({
  title,
  description,
  name = SITE_NAME,
  type = 'website',
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  keywords = DEFAULT_KEYWORDS,
  jsonLd = null,       // extra JSON-LD (e.g. per-property Product schema)
  includeFaq = false,  // inject FAQPage schema (Home page only)
  breadcrumbs = null,  // array of {name, url} for BreadcrumbList
  noIndex = false,
}) {
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | #1 Real Estate in Kashipur, Uttarakhand`

  const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

  const breadcrumbLd = breadcrumbs ? buildBreadcrumb(breadcrumbs) : null

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KashiPropertyClinic" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── LocalBusiness JSON-LD (every page) ── */}
      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_LD)}
      </script>

      {/* ── BreadcrumbList JSON-LD ── */}
      {breadcrumbLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      )}

      {/* ── FAQ JSON-LD (Home page) ── */}
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
