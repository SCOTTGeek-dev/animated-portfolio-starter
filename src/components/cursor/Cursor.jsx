import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.onclick != null ||
        target.classList.contains("clickable") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(isClickable);
    };

    const mouseLeave = () => {
      setIsHidden(true);
    };

    const mouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className={`custom-cursor ${isPointer ? "pointer" : ""} ${isHidden ? "hidden" : ""}`}
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear",
        }}
      />
      
      {/* Cercle extérieur (traînée) */}
      <motion.div
        className={`custom-cursor-trail ${isPointer ? "pointer" : ""} ${isHidden ? "hidden" : ""}`}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default Cursor;
