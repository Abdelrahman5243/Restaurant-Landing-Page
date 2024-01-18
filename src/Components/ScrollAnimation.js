import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children }) => {
  const sectionRef = useRef();

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.top >= -rect.height
    );
  }
  

  useEffect(() => {
    function handleScroll() {
      if (isElementInViewport(sectionRef.current)) {
        sectionRef.current.style.opacity = '1';
        sectionRef.current.style.transform = 'translateY(0)';
      } 
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="animated-section" ref={sectionRef}>{children}</div>;
};

export default ScrollAnimation;
