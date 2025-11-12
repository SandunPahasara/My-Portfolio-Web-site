import './Projects.css';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const projectData = [
  {
    id: 1,
    title: "Smart Garment Production Tracking & Optimization System (SGPTOS)",
    description: "A comprehensive Final Year Project for the garment manufacturing industry that integrates RFID-based tracking, IoT-enabled machine monitoring, real-time analytics, and automated quality control to streamline production workflows, improve efficiency, and reduce operational costs.",
    technologies: ["React", "PHP", "MySQL", "RFID Technology", "IoT Sensors", "Cloud Analytics"],
    features: [
      "RFID-based real-time garment tracking from cutting to packaging",
      "Workforce monitoring with labor efficiency tracking",
      "IoT-enabled predictive machine maintenance alerts",
      "Centralized analytics dashboard for KPIs and defect analysis",
      "Quality control and defect tracking system",
      "Role-specific interfaces for managers, supervisors, and workers"
    ],
    githubLink: "https://github.com/SasinduV0/SGPTOS-FinalProject",
    badge: "Group Project • Final Year"
  },
  {
    id: 2,
    title: "Partz – Party Item E-Commerce Website",
    description: "A full-stack e-commerce web application for party planning, allowing users to browse and purchase party items from birthday decorations to wedding essentials. Built following the Software Development Life Cycle (SDLC) as part of the Enterprise Software Development module.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JWT"],
    features: [
      "User registration & login with JWT authentication",
      "Add to cart & secure checkout functionality",
      "Order & inventory management system",
      "Admin dashboard for item & category management",
      "Product search and filter capabilities",
      "Responsive design for all devices"
    ],
    githubLink: "https://github.com/SandunPahasara/Party-Items-Web-Application",
    badge: "Group Project"
  },
  {
    id: 3,
    title: "Sweet Treats Bakery",
    description: "A lightweight and accessible bakery landing page built from fundamentals using semantic HTML, handcrafted CSS, and vanilla JavaScript. Features a clean, responsive design with no frameworks or build tools — perfect for demonstrating core web development skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Clean semantic HTML structure",
      "Fully responsive layout for mobile and desktop",
      "Lightweight with no dependencies or frameworks",
      "Accessible and user-friendly interface",
      "Simple vanilla JavaScript interactivity"
    ],
    githubLink: "https://github.com/SandunPahasara/Sweet-Treats-bakery",
    liveLink: "https://sweet-treats-bakery.vercel.app/"
  },
  {
    id: 4,
    title: "To-Do App with Calendar & Dark Mode",
    description: "A sleek and modern React + TypeScript To-Do application with task filtering, editing, completion tracking, and calendar integration. Features persistent Local Storage and Dark Mode toggle for enhanced user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Crypto API"],
    features: [
      "Add, edit, delete, and mark tasks as completed",
      "Filter tasks (All / Active / Completed)",
      "Calendar view to visualize task deadlines",
      "Dark/Light mode toggle for better UX",
      "Persistent storage using Local Storage",
      "Custom hooks (useLocalStorage) for data management"
    ],
    githubLink: "https://github.com/SandunPahasara/ToDo-App",

  },
  {
    id: 5,
    title: "Real-Time Weather Alerts App",
    description: "A React-based Weather Alerts App that provides real-time weather alerts for your location using the OpenWeatherMap API. Stay informed about severe weather, warnings, and other weather events instantly with smooth animated notifications.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenWeatherMap API"],
    features: [
      "Real-time weather alerts with automatic updates",
      "Dismissible alerts with smooth animation",
      "Modern responsive UI built with Tailwind CSS",
      "Animated notifications using Framer Motion",
      "Customizable locations (latitude/longitude)",
      "Type-safe code with TypeScript"
    ],
    githubLink: "https://github.com/SandunPahasara/Weather-Alerts-App",
    liveLink: "https://github.com/SandunPahasara/Weather-Alerts-App"
  },
  {
    id: 6,
    title: "Beautiful Counter",
    description: "A modern, interactive counter application built with React and Ant Design, demonstrating state management, UI theming, and user experience best practices with a clean, customizable interface.",
    technologies: ["React", "Ant Design", "JavaScript (ES6+)", "CSS"],
    features: [
      "Increment/Decrement with customizable step (1-5)",
      "Step selection and instant reset functionality",
      "History tracking of last five counter values",
      "Dark/Light mode theme toggle",
      "Value limits between -10 and 10",
      "Modern UI with Ant Design components"
    ],
    githubLink: "https://github.com/SandunPahasara/Counter",
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
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
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my most significant work demonstrating technical capabilities</p>
      </div>

      <div className="projects-grid">
        {currentProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              {project.badge && <span className="project-badge">{project.badge}</span>}
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
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft /> Previous
        </button>

        <div className="pagination-numbers">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;