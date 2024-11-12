// Projects.js

import React from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCss3Alt, 
  FaHtml5 
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import muntexImage from './MUNTEX1.png';
import romarketplaceImage from './romarketplace1.png';
import tableTennisImage from './TT.jpg';
import portfolioImage from './portofolio1.png'; // Corrected spelling

// Define animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Mapping technology names to icons
const techIcons = {
  "React": <FaReact title="React" />,
  "Node.js": <FaNodeJs title="Node.js" />,
  "Express": <FaNodeJs title="Express" />,
  "SQLite": <FaDatabase title="SQLite" />,
  "MySQL": <SiMysql title="MySQL" />,
  "CSS": <FaCss3Alt title="CSS3" />,
  "HTML": <FaHtml5 title="HTML5" />,
  // Add more technologies as needed
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      className="project-card" 
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
    >
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={`${project.title} Screenshot`} 
          loading="lazy" 
          className="project-image"
        />
        <div className="overlay">
          <div className="overlay-content">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} Live Site`}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" aria-label={`${project.title} Source Code`}>
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, idx) => (
            techIcons[tech] ? (
              <span key={idx} className="tech-icon">
                {techIcons[tech]}
              </span>
            ) : (
              <span key={idx} className="tech-text">
                {tech}
              </span>
            )
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Muntex E-commerce Platform [Fullstack]',
      description: 'A full-stack e-commerce platform where users can register, login, add products to cart, place orders, pay with Stripe or cash on delivery, request refunds, and change passwords. The admin dashboard allows for managing products, stocks, orders, refund requests, employees, and providers.',
      technologies: ['React', 'SQLite', 'Express', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/MUNTEX/',
      code: 'https://github.com/Darius900/MUNTEX/tree/master',
      image: muntexImage
    },
    {
      id: 2,
      title: 'Table Tennis Shop [Frontend]',
      description: 'A frontend implementation for a table tennis shop, featuring a main page, header carousel, products page, and product categories.',
      technologies: ['React', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/TT/',
      code: 'https://github.com/Darius900/TT/tree/master',
      image: tableTennisImage
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'A personal portfolio website with a black and white theme, particles on the main page, cool scroll transitions, and a minimalist, clean design.',
      technologies: ['React', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/Portfolio/',
      code: 'https://github.com/Darius900/Portfolio/tree/master',
      image: portfolioImage
    },
    {
      id: 4,
      title: 'Marketplace [Fullstack] (In Progress)',
      description: 'A full-stack marketplace where users can register as sellers or buyers. Sellers can create and customize shops, add products, and manage orders and statistics.',
      technologies: ['React', 'Express', 'MySQL', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/ROMARKETPLACE/',
      code: 'https://github.com/Darius900/ROMARKETPLACE/tree/master',
      image: romarketplaceImage
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
