"use client";

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubble parameters on the client to avoid hydration mismatch
    const generatedBubbles = [...Array(15)].map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 100}%`,
        width: `${Math.random() * 40 + 20}px`,
        height: `${Math.random() * 40 + 20}px`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="background">
      {bubbles.map((bubble) => (
        <div 
          key={bubble.id} 
          className="bubble" 
          style={bubble.style} 
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;