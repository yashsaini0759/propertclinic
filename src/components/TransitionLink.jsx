import { useNavigate, useLocation } from 'react-router-dom';
import nprogress from 'nprogress';
import { properties } from '../data/properties';

// Map of static banners
const staticBanners = {
    '/': '/images/jannat_vilas/jannat_vilas_hero_banner.png',
    '/services': '/images/Banner/Services_BANNER.png',
    '/properties': '/images/properties_page/properties_page_banner.png',
    '/contact': '/images/Banner/CONTACT_BANNER.png',
};

const getBannerForRoute = (path) => {
    // Exact match
    if (staticBanners[path]) return staticBanners[path];
    
    // Check if it's a property detail page
    if (path.startsWith('/property/')) {
        const slug = path.split('/')[2];
        const prop = properties.find((p) => p.slug === slug);
        if (prop && prop.bannerImage) {
            return prop.bannerImage;
        }
    }
    return null;
};

// Global store of loaded images
const loadedImages = new Set();

const preloadImage = (src) => {
    return new Promise((resolve) => {
        if (!src || loadedImages.has(src)) {
            resolve();
            return;
        }
        const img = new Image();
        img.onload = () => {
            loadedImages.add(src);
            resolve();
        };
        img.onerror = resolve; // Continue on error
        img.src = src;
    });
};

export default function TransitionLink({ to, children, className, onClick, ...props }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handlePreload = () => {
        const banner = getBannerForRoute(to);
        if (banner && !loadedImages.has(banner)) {
            const img = new Image();
            img.onload = () => loadedImages.add(banner);
            img.src = banner; // preload silently in background
        }
    };

    const handleClick = async (e) => {
        if (onClick) onClick(e);

        // Let browser handle middle-clicks or ctrl/cmd-clicks natively
        if (e.metaKey || e.ctrlKey || e.button !== 0 || props.target) {
            return;
        }

        e.preventDefault();

        if (location.pathname === to) return; // Prevent navigation if already there

        nprogress.start(); // Start visual loading right away

        // Identify banner & wait
        const bannerUrl = getBannerForRoute(to);
        if (bannerUrl) {
            await preloadImage(bannerUrl);
        } else {
            // Artificial delay if no banner just so nprogress has a moment
            await new Promise((r) => setTimeout(r, 100));
        }

        // Navigate when ready
        // nprogress.done() is gracefully handled by AnimatedRoutes when exit animation finishes
        navigate(to);
    };

    return (
        <a 
            href={to} 
            onClick={handleClick} 
            onMouseEnter={handlePreload} 
            className={className} 
            {...props}
        >
            {children}
        </a>
    );
}
