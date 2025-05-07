import './Projects.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectData = [
  {
    id: 1,
    title: "Web Based Conference Management System",
    description: "A Web-Based Conference Management System for organizing and managing conference schedules, speakers, and attendees efficiently.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Schedule Management (sessions, timings, venues)" ,
      " Speaker & Panel Management",
      " Attendee Registration & Tracking ",
      " Reminders & Notifications ",
      " Admin Dashboard for Management "
    ],
    githubLink: "https://github.com/SandunPahasara/Web-Based-Conference-Day-Management-System",
    liveLink: " https://sandunpahasara.github.io/Web-Based-Conference-Day-Management-System/"
  },
  {
    id: 2,
    title: "Library-Management-System",
    description: "A simple Python-based Library Management System for adding, borrowing, and returning books.",
    technologies: ["Python Datetime module"],
    features: [
      "Add new books ",
      " Borrow and return books with timestamps ",
      " View available and borrowed books ",
      " User-friendly menu interface "
    ],
    githubLink: "https://github.com/SandunPahasara/-Library-Management-System",
    liveLink: " https://sandunpahasara.github.io/-Library-Management-System/"
  },
  {
    id: 3,
    title: "Calculator",
    description: "A visually appealing console-based calculator in Java featuring: Colorful ANSI console output Clean, user-friendly interface Basic arithmetic operations Error handling and input validation Beautiful ASCII art formatting Features",
    technologies: ["Java"],
    features: [
      "Addition", 
      "Subtraction",
      " Multiplication",
      "Division"
    ],
    githubLink: "https://github.com/SandunPahasara/Calculator",
    liveLink: "https://github.com/SandunPahasara/Calculator"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my most significant work demonstrating technical capabilities</p>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiGithub /> Code
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;