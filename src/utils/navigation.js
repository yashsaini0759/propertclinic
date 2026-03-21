import { properties } from '../data/properties';

const staticBanners = {
    // Home page hero slider's first slide — preloads to avoid blank flash on arrival
    '/': '/images/jannat_vilas/jannat_vilas_hero_banner.png',
    '/services': '/images/Banner/Services_BANNER.png',
    '/properties': '/images/properties_page/properties_page_banner.png',
    '/contact': '/images/Banner/CONTACT_BANNER.png',
};

export const getBannerForRoute = (path) => {
    if (staticBanners[path]) return staticBanners[path];
    
    if (path.startsWith('/property/')) {
        const slug = path.split('/')[2];
        const prop = properties.find((p) => p.slug === slug);
        if (prop && prop.bannerImage) {
            return prop.bannerImage;
        }
    }
    return null;
};

const loadedImages = new Set();
const PRELOAD_TIMEOUT_MS = 5000; // Never block navigation longer than 5 seconds

export const preloadImage = (src) => {
    return new Promise((resolve) => {
        if (!src || loadedImages.has(src)) {
            resolve();
            return;
        }

        // Timeout fallback — navigate even if image is very slow
        const timeout = setTimeout(() => {
            resolve();
        }, PRELOAD_TIMEOUT_MS);

        const img = new Image();
        img.onload = () => {
            clearTimeout(timeout);
            loadedImages.add(src);
            resolve();
        };
        img.onerror = () => {
            clearTimeout(timeout);
            resolve(); // Continue smoothly even on image error
        };
        img.src = src;
    });
};
