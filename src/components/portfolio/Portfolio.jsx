import React, { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../../LanguageContext";

const Single = ({item, t}) => {
  const ref= useRef();
  const imageRef = useRef();
  const [isUnlocked, setIsUnlocked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
    });

  const y = useTransform(scrollYProgress, [0,1],[-150, 150]);

  // Animation pour les logos
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Animations spécifiques selon la catégorie
  const getCategoryAnimation = () => {
    if (item.category === "language") {
      return {
        whileInView: {
          opacity: [0, 1],
          y: [50, 0],
          rotateY: [0, 360],
          transition: { 
            duration: 1.2, 
            ease: "easeInOut",
            rotateY: { duration: 1.5, ease: "easeInOut" }
          }
        },
        whileHover: {
          scale: 1.4,
          rotateZ: [0, -10, 10, 0],
          transition: { 
            duration: 0.6,
            rotateZ: { repeat: Infinity, duration: 0.5 }
          }
        }
      };
    } else if (item.category === "cloud") {
      return {
        whileInView: {
          opacity: [0, 1],
          y: [50, 0],
          scale: [0.5, 1.2, 1],
          transition: { 
            duration: 1.5, 
            ease: "easeOut",
            scale: { duration: 1.5 }
          }
        },
        whileHover: {
          scale: 1.4,
          y: [-5, 5],
          filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
          transition: { 
            duration: 0.8,
            y: { repeat: Infinity, duration: 1, ease: "easeInOut" }
          }
        }
      };
    } else if (item.category === "framework") {
      return {
        whileInView: {
          opacity: [0, 1],
          y: [50, 0],
          scale: [0.8, 1.1, 1],
          rotateX: [0, 180, 360],
          transition: { 
            duration: 1.4, 
            ease: "easeInOut",
            rotateX: { duration: 1.5 }
          }
        },
        whileHover: {
          scale: 1.35,
          rotate: [0, 360],
          transition: { 
            duration: 0.8,
            rotate: { duration: 1.2, ease: "linear" }
          }
        }
      };
    } else {
      return {
        whileInView: {
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.6, ease: "easeOut" }
        },
        whileHover: {
          scale: 1.3,
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    }
  };

  const categoryAnimation = getCategoryAnimation();

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={{y}}>
            <h2>
              {item.title}
              {item.category === "language" && (
                <span className="badge language-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="orange" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {t.portfolio.badges.language}
                </span>
              )}
              {item.category === "cloud" && (
                <span className="badge cloud-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.portfolio.badges.cloud}
                </span>
              )}
              {item.category === "framework" && (
                <span className="badge framework-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" stroke="#9b59b6" strokeWidth="2" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" stroke="#9b59b6" strokeWidth="2" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" stroke="#9b59b6" strokeWidth="2" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" stroke="#9b59b6" strokeWidth="2" rx="1"/>
                  </svg>
                  {t.portfolio.badges.framework}
                </span>
              )}
            </h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              <motion.button 
                className={`demoButton ${isUnlocked ? 'unlocked' : 'locked'}`}
                onClick={() => setIsUnlocked(!isUnlocked)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: isUnlocked ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isUnlocked ? (
                    // Cadenas ouvert
                    <>
                      <path d="M7 11V7a5 5 0 0 1 9.9-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    </>
                  ) : (
                    // Cadenas fermé
                    <>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    </>
                  )}
                </motion.svg>
                <span>{isUnlocked ? t.portfolio.seeDemo : 'Unlock Demo'}</span>
              </motion.button>
              
              {isUnlocked && (
                <motion.a
                  href="https://github.com/SCOTTGeek-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubButton"
                  initial={{ opacity: 0, x: -50, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                  <motion.div 
                    className="shine"
                    animate={{ x: [-200, 200] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />
                </motion.a>
              )}
            </div>
            <motion.div 
              className={`imageContainer ${item.category}`}
              ref={imageRef}
              style={{ 
                scale: imageScale,
                rotateY: imageRotate 
              }}
              {...categoryAnimation}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();
  const ref= useRef();

  // Items avec images statiques mais descriptions traduites
  const items = [
    {
      id: 1,
      title: t.portfolio.items[0].title,
      img: "/springboot.png",
      desc: t.portfolio.items[0].description,
      category: "framework",
    },
    {
      id: 2,
      title: t.portfolio.items[1].title,
      img: "/java.png",
      desc: t.portfolio.items[1].description,
      category: "language",
    },
    {
      id: 3,
      title: t.portfolio.items[2].title,
      img: "/angular.png",
      desc: t.portfolio.items[2].description,
      category: "framework",
    },
    {
      id: 4,
      title: t.portfolio.items[3].title,
      img: "/azure-gcp.png",
      desc: t.portfolio.items[3].description,
      category: "cloud",
    },
    {
      id: 5,
      title: t.portfolio.items[4].title,
      img: "/react.png",
      desc: t.portfolio.items[4].description,
      category: "language",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });


  return (
    <div className="portfolio" ref={ref}>
      <div className="progressBar">
        <h1>{t.portfolio.title}</h1>
        <motion.div style={{ scaleX }} className="progressBarFill"></motion.div>
      </div>
      {items.map(item => (
        <Single key={item.id} item={item} t={t} />
      ))}
    </div>
  );
};

export default Portfolio;