import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
import { FaCheckCircle, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaBook, FaBriefcase, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="section-title-about">About Me</h1>
        <p className="about-description">
          As a recent graduate in Economic Informatics from Romania, I'm passionate about leveraging technology to solve real-world problems and create impactful digital solutions. My determination and interest in innovation fuel my readiness for new challenges and opportunities in the ever-evolving tech landscape.
        </p>

        <div className="about-content">
          <div className="about-subsection">
            <h2 className="subsection-title"><FaCheckCircle className="icon" /> Core Values</h2>
            <ul className="values-list">
              <li>Integrity in all interactions</li>
              <li>Continuous learning and growth</li>
              <li>Innovation-driven problem solving</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>

          <div className="about-subsection">
            <h2 className="subsection-title"><FaReact className="icon" /> Tech Stack</h2>
            <div className="tech-stack">
              <span><FaReact /> React</span>
              <span><FaJsSquare /> JavaScript</span>
              <span><FaHtml5 /> HTML5</span>
              <span><FaCss3Alt /> CSS3</span>
              <span><FaNodeJs /> Node.js</span>
              <span><FaGitAlt /> Git</span>
            </div>
          </div>

          <div className="about-subsection">
            <h2 className="subsection-title"><FaBook className="icon" /> Education</h2>
            <p>
              Graduated in Economic Informatics, currently pursuing a Master's degree in the same field.
            </p>
          </div>

          <div className="about-subsection">
            <h2 className="subsection-title"><FaBriefcase className="icon" /> Experience</h2>
            <p>
              Developed a full-stack e-commerce platform using React and Express, focusing on efficient and innovative solutions.
            </p>
          </div>

          <div className="about-subsection">
            <h2 className="subsection-title"><FaHeart className="icon" /> Interests</h2>
            <p>
              Sports enthusiast with a love for table tennis, gym workouts, gaming, and mountain activities.
            </p>
          </div>
        </div>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="explore-button"
        >
          Explore My Projects
        </Link>
      </div>
    </section>
  );
};

export default About;
