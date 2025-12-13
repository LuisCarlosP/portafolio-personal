import { useEffect, useState } from 'react';

const useVisualViewport = () => {
    const [viewportHeight, setViewportHeight] = useState(window.visualViewport ? window.visualViewport.height : window.innerHeight);

    useEffect(() => {
        const handler = () => {
            if (window.visualViewport) {
                setViewportHeight(window.visualViewport.height);
                document.documentElement.style.setProperty('--app-height', `${window.visualViewport.height}px`);
                window.scrollTo(0, 0);
            }
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handler);
            window.visualViewport.addEventListener('scroll', handler);
            handler();
        } else {
            window.addEventListener('resize', () => {
                setViewportHeight(window.innerHeight);
                document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
            });
        }

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', handler);
                window.visualViewport.removeEventListener('scroll', handler);
            }
        };
    }, []);

    return viewportHeight;
};

export default useVisualViewport;
