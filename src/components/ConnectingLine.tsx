import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const routeMappings: Record<string, { index: number; pageType: 'real' | 'standard' }> = {
  '/about': { index: 1, pageType: 'real' },
  '/research': { index: 2, pageType: 'real' },
  '/tools': { index: 3, pageType: 'real' },
  '/events': { index: 4, pageType: 'real' },
  '/library': { index: 5, pageType: 'real' },
  '/team': { index: 6, pageType: 'real' },
};

export default function ConnectingLine() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [titleRect, setTitleRect] = useState<{ left: number; top: number; height: number } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateRect = () => {
      const titleEl = document.querySelector('.halftone-title');
      if (titleEl) {
        const rect = titleEl.getBoundingClientRect();
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
          const appRect = appContainer.getBoundingClientRect();
          setTitleRect({
            left: rect.left - appRect.left,
            top: rect.top - appRect.top,
            height: rect.height,
          });
        }
      }
    };

    // Run immediately and after a short render delay
    updateRect();
    const timer = setTimeout(updateRect, 100);

    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
      clearTimeout(timer);
    };
  }, [location.pathname, windowWidth, windowHeight]);

  if (windowWidth < 768) return null;
  const routeData = routeMappings[location.pathname];
  if (!routeData) return null;

  const { index, pageType } = routeData;

  // Calculate vertical positions
  // yBottom maps to the vertical center of the active sidebar item of index `index` (margin-top 35vh + index * 84px + 30px)
  const yBottom = (windowHeight * 0.35) + index * 84 + 30;
  
  const xStart = 40;
  const xMid = 320; // Positioned safely to the right of all sidebar links to prevent overlap (widest BS Library link is 300px)

  const yTop = titleRect 
    ? titleRect.top + titleRect.height / 2 
    : (pageType === 'real' ? 195 : 225);

  const xEnd = titleRect 
    ? titleRect.left - 15 
    : 450;

  const pathD = `M ${xStart} ${yBottom} L ${xMid} ${yBottom} L ${xMid} ${yTop} L ${xEnd} ${yTop}`;

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    >
      <path
        d={pathD}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
