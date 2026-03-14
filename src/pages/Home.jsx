import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import ServicesCards from '../components/ServicesCards'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import ComprehensiveServices from '../components/ComprehensiveServices'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import InstagramSection from '../components/InstagramSection'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Home() {
    return (
        <main>
            <SEO 
                title="Premium Real Estate Solutions in Kashipur" 
                description="Your trusted partner for premium real estate in Kashipur. Providing comprehensive solutions for property search, legal transactions, home loans, and management services since 2018."
                url="https://kashipropertyclinic.com/" 
            />
            <HeroSection />
            <JourneySection />
            <ProjectsSection />
            <ServicesCards />
            <StatsSection />
            <AboutSection />
            <ComprehensiveServices />
            <TestimonialsSection />
            <InstagramSection />
            <Footer />
        </main>
    )
}
