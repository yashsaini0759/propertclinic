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
            title="Kashi Property Clinic | #1 Real Estate Agent in Kashipur, Uttarakhand"
            description="Kashi Property Clinic – trusted real estate in Kashipur. Buy luxury villas (Jannat Villas, Vedanta Greens), premium flats (Vedanta Heights), plots (Vedanta Avenue, Noor) & commercial spaces (Urban Bazar, Walkway, City Center). Call +91-9627088818."
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
