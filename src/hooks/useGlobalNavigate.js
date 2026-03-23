import { useNavigate, useLocation } from 'react-router-dom';
import nprogress from 'nprogress';
import { getBannerForRoute, preloadImage } from '../utils/navigation';

export function useGlobalNavigate() {
    const navigate = useNavigate();
    const location = useLocation();

    return async (to, options) => {
        const targetPath = typeof to === 'string' ? to : to.pathname;
        const startPath = window.location.pathname;
        
        // Prevent redundant navigations
        if (location.pathname === targetPath) return;

        nprogress.start(); // Immediately show loading bar

        try {
            const bannerUrl = getBannerForRoute(targetPath);
            if (bannerUrl) {
                await preloadImage(bannerUrl); // Wait strictly for banner
            } else {
                // Provide a tiny artificial delay to ensure progress bar has a moment to render
                await new Promise((r) => setTimeout(r, 100));
            }

            // Important fix: If user hits browser 'Back' while preloading finishes, gracefully abort.
            if (window.location.pathname === startPath) {
                navigate(to, options);
            } else {
                // User navigated somewhere else during the delay. Drop it.
                nprogress.done(true);
            }
        } catch (error) {
            console.error("Navigation error:", error);
            nprogress.done(true);
        }
    };
}
