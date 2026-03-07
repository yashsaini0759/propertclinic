import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Properties from './pages/Properties'
import Contact from './pages/Contact'

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
        <Router>
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <FloatingWhatsApp />
            <ScrollToTopButton />
        </Router>
    )
}

export default App
