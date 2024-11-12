import React, { useEffect, useRef, useCallback } from 'react';
import { scroller } from 'react-scroll';
import './Intro.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaArrowRight } from 'react-icons/fa';

const Intro = () => {
  const typingRef = useRef(null);
  const roles = ['Web Developer', 'Problem Solver', 'Creative Thinker'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      const typingElement = typingRef.current;

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type();
  }, []);

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="intro-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="content-wrapper">
        <div className="intro-text">
          <h1 className="intro-title">Hello, I'm <span className="highlight">Darius 👋 </span></h1>
          <h2 className="intro-subtitle">
            A passionate <span className="typing" ref={typingRef}></span>
          </h2>
          <p className="intro-description">Transforming ideas into exceptional digital experiences</p>
          <button className="cta-button" onClick={scrollToAbout}>
  Explore My Work <FaArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Darius939" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:dariuscojocaru123@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Intro;