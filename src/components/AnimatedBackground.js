import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="background">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="bubble" style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}%`,
          width: `${Math.random() * 30 + 10}px`,
          height: `${Math.random() * 30 + 10}px`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.4 + 0.1
        }} />
      ))}
    </div>
  );
};

export default AnimatedBackground;