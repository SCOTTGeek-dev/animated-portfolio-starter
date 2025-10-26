import { useEffect, useRef } from "react";
import "./stars.scss";

const Stars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div");
      star.className = "star";
      
      // Position aléatoire
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      // Taille aléatoire
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Durée d'animation aléatoire
      const duration = Math.random() * 3 + 2;
      star.style.animationDuration = `${duration}s`;
      
      // Délai aléatoire
      const delay = Math.random() * 2;
      star.style.animationDelay = `${delay}s`;
      
      if (starsRef.current) {
        starsRef.current.appendChild(star);
      }
    };

    // Créer 100 étoiles
    for (let i = 0; i < 100; i++) {
      createStar();
    }

    // Cleanup
    return () => {
      if (starsRef.current) {
        starsRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div className="stars-container" ref={starsRef}></div>;
};

export default Stars;
