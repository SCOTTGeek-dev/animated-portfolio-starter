import { useRef } from "react";   
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../LanguageContext";

const Parallax = ({ type }) => {
    const { t } = useLanguage();
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    
    const yText= useTransform(scrollYProgress, [0,1],["0%","500%"]); 
    const yBg= useTransform(scrollYProgress, [0,1],["0%","100%"]); 

    return (
        <div 
        className="parallax" 
        ref={ref}
        style={{ 
            background: 
            type === "services" 
            ? "linear-gradient(180deg, #111132, #0c0c1d)" 
            : "linear-gradient(180deg, #0c0c1d, #111132)",
             }}
             >
            <motion.h1 style={{ y: yText }}>
                {type==="services" ? t.parallax.services : t.parallax.portfolio}
            </motion.h1>
            {type === "services" && (
                <>
                    <motion.div className="mountains"></motion.div>
                    <motion.div className="planets" style={{
                        y: yBg,
                        backgroundImage: "url(/planets.png)",
                    }}></motion.div>
                </>
            )}
            <motion.div style={{ y: yBg }} className="stars"></motion.div>
        </div>
       
    );
};

export default Parallax;