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

export default function Home() {
    return (
        <main>
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
