import { useGlobalNavigate } from '../hooks/useGlobalNavigate';
import { getBannerForRoute, preloadImage } from '../utils/navigation';

export default function TransitionLink({ to, children, className, onClick, ...props }) {
    const globalNavigate = useGlobalNavigate();

    const handlePreload = () => {
        const targetPath = typeof to === 'string' ? to : to.pathname;
        const banner = getBannerForRoute(targetPath);
        if (banner) {
            preloadImage(banner); // Starts background download instantly on hover
        }
    };

    const handleClick = async (e) => {
        if (onClick) onClick(e);

        // Allow standard browser behaviors like "Open in new tab" (Ctrl/Meta click)
        if (e.metaKey || e.ctrlKey || e.button !== 0 || props.target) {
            return;
        }

        e.preventDefault();
        await globalNavigate(to);
    };

    return (
        <a 
            href={typeof to === 'string' ? to : to.pathname}
            onClick={handleClick} 
            onMouseEnter={handlePreload} 
            className={className} 
            {...props}
        >
            {children}
        </a>
    );
}
