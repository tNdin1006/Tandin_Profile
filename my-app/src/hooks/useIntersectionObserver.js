import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = true,
    freezeOnceVisible = true
  } = options;

  useEffect(() => {
    const element = ref.current;
    
    if (!element || (freezeOnceVisible && hasBeenVisible)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);

        if (entry.isIntersecting) {
          setHasBeenVisible(true);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, root, rootMargin, triggerOnce, freezeOnceVisible, hasBeenVisible]);

  return [ref, isIntersecting, hasBeenVisible, entry];
};

export default useIntersectionObserver;