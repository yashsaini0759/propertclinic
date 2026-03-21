import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import FamilyBannerSection from '../components/FamilyBannerSection'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
// import ComprehensiveServices from '../components/ComprehensiveServices'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import InstagramSection from '../components/InstagramSection'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Home() {
    return (
        <main>
        <SEO
            title="Kashi Property Clinic | Trusted Real Estate in Kashipur"
            description="Find premium villas, plots, flats and commercial properties in Kashipur with Kashi Property Clinic. Trusted real estate agents in Kashipur since 2018. Call +91-9627088818."
            url="https://www.kashipropertyclinic.com/"
            includeFaq={true}
        />
            <HeroSection />
            <JourneySection />
            <ProjectsSection />
            <FamilyBannerSection />
            <AboutSection />
            <StatsSection />
            {/* <ComprehensiveServices /> */}
            <TestimonialsSection />
            <InstagramSection />
            <Footer />
        </main>
    )
}
