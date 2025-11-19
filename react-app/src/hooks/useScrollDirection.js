import { useEffect, useRef, useState } from 'react';

const useScrollDirection = ({ threshold = 10, enabled = true } = {}) => {
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return undefined;
    }

    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const diff = Math.abs(currentScrollY - lastScrollY);

      if (diff < threshold) {
        ticking = false;
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, threshold]);

  return hidden;
};

export default useScrollDirection;
