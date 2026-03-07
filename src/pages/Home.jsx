import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesCards from '../components/ServicesCards'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import ComprehensiveServices from '../components/ComprehensiveServices'
import TestimonialsSection from '../components/TestimonialsSection'
import InstagramSection from '../components/InstagramSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main>
            <HeroSection />
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
