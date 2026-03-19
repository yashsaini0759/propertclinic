import { motion } from 'framer-motion';
import { useEffect } from 'react';
import nprogress from 'nprogress';

export default function PageTransition({ children }) {
    useEffect(() => {
        // Guaranteed to stop the progress bar the absolute microsecond the new page visibly renders
        nprogress.done();
        
        return () => {
            nprogress.done();
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
        >
            {children}
        </motion.div>
    );
}
