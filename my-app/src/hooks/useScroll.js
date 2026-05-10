import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    let scrollTimeout;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      
      // Update direction
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Update position
      setScrollPosition(scrollY);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);
      
      // Set scrolling state
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Initial calculation
    updateScrollDirection();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return {
    scrollPosition,
    scrollDirection,
    isScrolling,
    scrollProgress,
    isAtTop: scrollPosition === 0,
    isAtBottom: Math.ceil(scrollPosition + window.innerHeight) >= document.documentElement.scrollHeight
  };
};

export default useScroll;