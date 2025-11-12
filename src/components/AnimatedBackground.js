import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="background">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="bubble" style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}%`,
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}
    </div>
  );
};

export default AnimatedBackground;