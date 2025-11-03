import './Home.css';
import { useNavigate } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigate directly to the projects section
    navigate('/projects'); // This assumes you have a route for projects
    
    // OR if projects is a tab on your main page:
    // navigate('/#projects'); // For hash-based navigation
    
    // OR if using tab state:
    // navigate('/', { state: { activeTab: 'projects' } });
  };

  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h3 className="home-greeting">Hello, I'm</h3>
        <h1 className="home-title">Sandun Pahasara Weerasinghe</h1>
        <h2 className="home-subtitle">
          <span className="text-gradient">Full Stack Developer</span> & UI/UX Designer
        </h2>
        
        <p className="home-description">
          I craft exceptional digital experiences using modern web technologies.
          <br /><br />
          With a strong focus on performance, accessibility, and user-centric design, 
          I specialize in building scalable and maintainable applications using React, 
          Node.js, and responsive design principles. My expertise extends to TypeScript, 
          Next.js, Express.js, MongoDB, and RESTful APIs, ensuring full-stack proficiency.
          <br /><br />
          I have a keen eye for UI/UX, and I enjoy turning complex problems into simple, 
          elegant interfaces. My development workflow is driven by clean code, reusable 
          components, and best practices in version control (Git) and deployment 
          (Vercel, Netlify, or AWS).
          <br /><br />
          Whether it's a single-page app, an eCommerce platform, or a real-time dashboard, 
          I bring passion and precision to every line of code.
        </p>
        <br /><br />
        
        <div className="home-buttons">
          <button 
            onClick={handleExploreClick}
            className="btn-primary"
          >
            Explore My Work
          </button>
          <a
            href={`${process.env.PUBLIC_URL}/SandunPahasara-CV2.pdf`}
            download="SandunPahasara-CV2.pdf"
            className="btn-secondary"
            aria-label="Download Sandun Pahasara CV"
          >
            <FaFileDownload className="icon" /> Download CV
          </a>
        </div>
      </div>
      
      <div className="home-image">
        <div className="image-wrapper">
          <img 
            src='/images/Profile.jpg' 
            alt="Sandun Pahasara - Web Developer" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;