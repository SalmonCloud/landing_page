import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();
  const scrollPositions = useRef({});

  useLayoutEffect(() => {
    const { pathname } = location;
    const savedPosition = scrollPositions.current[pathname];
    const shouldRestoreHomeScroll = pathname === '/' && typeof savedPosition === 'number';

    if (shouldRestoreHomeScroll) {
      window.scrollTo(0, savedPosition);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [location]);

  return null;
};

export default ScrollManager;
