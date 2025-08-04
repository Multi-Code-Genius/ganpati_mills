"use client";

import { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCounter();
        }
      },
      {
        threshold: 0.5, // Start animation when 50% of element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = parseInt(end.toString().replace(/[^0-9]/g, ''));

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue * easeOutQuart));

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formatNumber = (num) => {
    // Add commas for thousands
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const displayValue = () => {
    const originalEnd = end.toString();
    let formattedCount = formatNumber(count);
    
    // Handle special suffixes like 'K', 'M', '+', etc.
    if (originalEnd.includes('K') || originalEnd.includes('k')) {
      return `${formattedCount}K`;
    } else if (originalEnd.includes('M') || originalEnd.includes('m')) {
      return `${formattedCount}M`;
    } else if (originalEnd.includes('+')) {
      return `${formattedCount}+`;
    } else if (originalEnd.includes('%')) {
      return `${formattedCount}%`;
    }
    
    return `${prefix}${formattedCount}${suffix}`;
  };

  return (
    <span ref={counterRef} className="counter-number">
      {displayValue()}
    </span>
  );
};

export default Counter;
