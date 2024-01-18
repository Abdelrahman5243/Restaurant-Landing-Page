import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children }) => {
  const sectionRef = useRef();

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    function handleScroll() {
      if (isElementInViewport(sectionRef.current)) {
        sectionRef.current.style.opacity = '1';
        sectionRef.current.style.transform = 'translateY(0)';
      } else {
        sectionRef.current.style.opacity = '0';
        sectionRef.current.style.transform = 'translateY(20px)';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="animated-section" ref={sectionRef}>{children}</div>;
};

export default ScrollAnimation;
