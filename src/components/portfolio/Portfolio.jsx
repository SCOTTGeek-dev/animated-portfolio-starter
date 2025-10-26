import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items= [
  {
    id:1,
    title:"Spring Boot",
    img:"/springboot.png", // path corrigé
    desc:"Enterprise Java framework for building production-ready applications. Used for creating RESTful web services, microservices architecture, and scalable backend systems with built-in security and data persistence.",
  },
  {
    id:2,
    title:"Java",
    img:"/java.png", // path corrigé
    desc:"Object-oriented programming language used for enterprise applications. Expertise in Java 8+ features, multithreading, collections framework, and building robust, maintainable code following best practices.",
  },
  {
    id:3,
    title:"Angular",
    img:"/angular.png", // path corrigé
    desc:"Modern TypeScript-based web framework for building dynamic single-page applications. Experience with Angular CLI, reactive forms, services, routing, and creating responsive user interfaces with Material Design.",
  },
  {
    id:4,
    title:"Cloud Computing (GCP-Azure)",
    img:"/azure-gcp.png", // path corrigé
    desc:"Cloud platforms expertise including Azure App Services, Google Cloud Platform, containerization, serverless functions, and cloud-native application development with focus on scalability and security.",
  },
  {
    id:5,
    title:"React",
    img:"/react.png", // path corrigé
    desc:"JavaScript library for building interactive user interfaces. Proficient in React hooks, state management, component lifecycle, and modern development patterns for creating efficient web applications.",
  },
];

const Single = ({item}) => {
  const ref= useRef();
  const imageRef = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], /* Centrer le déclenchement */
    });

  const y = useTransform(scrollYProgress, [0,1],[-150, 150]); /* Réduit l'amplitude */

  // Animation pour les logos
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
            <motion.div 
              className="imageContainer"
              ref={imageRef}
              style={{ 
                scale: imageScale,
                rotateY: imageRotate 
              }}
              whileHover={{ 
                scale: 1.3,
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.6, ease: "easeOut" }
              }}
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

  const ref= useRef();

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
        <h1>Technologies</h1>
        <motion.div style={{ scaleX }} className="progressBarFill"></motion.div>
      </div>
      {items.map(item => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;