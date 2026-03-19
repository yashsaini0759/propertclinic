import { properties } from '../data/properties';

const staticBanners = {
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

export const preloadImage = (src) => {
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
        img.onerror = resolve; // Continue smoothly even if image error
        img.src = src;
    });
};
