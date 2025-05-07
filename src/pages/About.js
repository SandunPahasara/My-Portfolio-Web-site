import './About.css';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiGraphql, SiFirebase } from 'react-icons/si';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <h2 className="section-title">Professional Profile</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <div className="about-intro">
            <h3>Hello, I'm Sandun Pahasara Weerasinghe</h3>
            <p className="professional-tagline">
              Full Stack Developer with 2+ years of experience building scalable web applications
            </p>
            <p>
            I'm <strong>Sandun Pahasara Weerasinghe</strong>, a <strong>24-year-old</strong> Full Stack Developer 
            from Sri Lanka with <strong>2+ years</strong> of professional experience.
          </p>
          <p>
            I specialize in creating high-performance, responsive web applications using modern JavaScript frameworks.
            With expertise across the full development stack, I bridge the gap between elegant frontend design and
            robust backend functionality.
          </p>
          <p>
             I'm an enthusiastic junior developer with:
              </p>
              <ul className="achievements-list">
                <li>✅ 1 year of hands-on coding experience</li>
                <li>✅ Proficiency in React, Node.js, and MongoDB</li>
                <li>✅ Built 5+ full stack applications</li>
                <li>✅ Strong problem-solving skills</li>
                <li>✅ Continuous learner (2+ hours daily coding practice)</li>
              </ul>
          </div>

          <div className="professional-details">
            <div className="experience-section">
              <h4>Professional Experience</h4>
              <ul className="experience-list">
                <li>
                  <strong>IT Support & Operations</strong> Pan Asia Bank, Sri Lanka (2022-2024)
                  <p>Provided frontline IT support, troubleshooting hardware/software issues for 20+ users. Assisted with OS installations, updates, and basic network setups. Supported Microsoft 365 applications and AV equipment. Maintained IT inventory and documented processes. Escalated complex issues while ensuring user communication. Created troubleshooting guides reducing repeat queries by 25%. Earned positive feedback for responsive technical assistance.</p>
                </li>
              </ul>
            </div>
            <h4>Education</h4>
            <div className="education-section">
              <ul>
            <li>
              <strong>Institute Of Technology University of Moratuwa (NDT) </strong> (2023-Present)
              <p>Diploma in Information Technologys</p>
              <p>Currently pursuing my Diploma in IT with coursework in programming, database management, and network administration. Gaining hands-on experience in software development and cybersecurity through labs and projects. Developing strong problem-solving skills applicable to IT support and operations. Actively building industry-relevant technical expertise to transition into professional IT roles upon completion.</p>
            </li>
            <li>
              <strong>Open University of Sri Lanka </strong> (2023-Present)
              <p>Degree in Software Enginneering</p>
              <p>Currently pursuing a degree in Software Engineering, gaining expertise in OOP, full-stack development (React, Node.js), databases (SQL/NoSQL), and cloud computing. Actively developing projects in web/mobile applications while mastering Agile methodologies. Passionate about problem-solving and eager to apply theoretical knowledge in real-world tech challenges.</p>
            </li>
            <li>
              <strong>Prince Of Wales College, Moratuwa</strong> (2007-2023)
              <p>Advanced Level: 3C's in Physical Science Stream</p>
              <p>Ordinary Level: 8A's 1B </p>
            </li>
            <li>
              <strong>Esoft Metro Campus </strong> (2021-2023)
              <p>Pearson Assured Diploma in English & Information   
              Technology</p>
              <p>Pearson Assured Diploma in Software Engineering  </p>
            </li>
          </ul>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Expertise</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li><FaReact /> React.js (Hooks, Context API)</li>
                <li><SiJavascript /> JavaScript (ES6+)</li>
                <li><SiTypescript /> TypeScript</li>
                <li><SiRedux /> Redux/Redux Toolkit</li>
                <li>Next.js</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li><FaNodeJs /> Node.js</li>
                <li>Express.js</li>
                <li><SiGraphql /> GraphQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Database</h4>
              <ul>
                <li><FaDatabase /> MongoDB</li>
                <li>PostgreSQL</li>
                <li><SiFirebase /> Firebase</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Other</h4>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS Basics</li>
                <li><FaMobile /> Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="professional-philosophy">
        <h4>Development Philosophy</h4>
        <p>
          I believe in writing clean, maintainable code with thorough documentation.
          My approach combines technical excellence with user-centered design principles
          to deliver solutions that are both powerful and intuitive.
        </p>
        <p>
          When not coding, I contribute to open-source projects and stay updated with
          the latest web technologies through continuous learning.
        </p>
      </div>
    </section>
  );
};

export default About;