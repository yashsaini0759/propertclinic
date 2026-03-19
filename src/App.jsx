import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import PageTransition from './components/PageTransition'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.2 })
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import PropertyDetail from './pages/PropertyDetail'

function AnimatedRoutes() {
    const location = useLocation()
    const navType = useNavigationType()

    useEffect(() => {
        // Only trigger nprogress natively if the user hits the browser Back/Forward (POP) buttons.
        // For all standard clicks and programmatic intent, useGlobalNavigate governs the exact start.
        if (navType === 'POP') nprogress.start()
    }, [location.pathname, navType])

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/properties" element={<PageTransition><Properties /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/property/:slug" element={<PageTransition><PropertyDetail /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    )
}

function ScrollToTop() {
    const { pathname } = useLocation()
    const navType = useNavigationType()

    useEffect(() => {
        // POP = browser back/forward — let the browser restore scroll position
        // PUSH / REPLACE = link click — scroll to top
        if (navType !== 'POP') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [pathname, navType])

    return null
}

function App() {
    return (
        <HelmetProvider>
            <Router>
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />
            <AnimatedRoutes />
            <FloatingWhatsApp />
            <ScrollToTopButton />
        </Router>
        </HelmetProvider>
    )
}

export default App
