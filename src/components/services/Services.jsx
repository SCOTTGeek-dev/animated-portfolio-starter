import "./services.scss";
import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../LanguageContext";


const variants = {
    initial: {
        x:-500,
        y:100,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
             duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const { t } = useLanguage();
    const ref= useRef();
    const isInView= useInView(ref, { margin: "-100px" });


    return(
        <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        ref={ref} 
        animate={isInView && "animate"}
        style={{ paddingTop: 0, marginTop: 0 }}
        >
         <motion.div className="textContainer" variants={variants} style={{ paddingTop: 0, marginTop: 0 }}>
            <p>
                I focus on developing modern cloud solutions that are scalable, secure, and efficient
                <br /> having experience in various technologies and frameworks
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{ color: "orange" }}>Innovative </motion.b>
                Solutions
                </h1>
        </div>
         <div className="title">
            <h1>
                <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
                Business !
            </h1>
            <button>WHAT I DO?</button>
        </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>{t.services.items[0].title}</h2>
            <p>{t.services.items[0].description}</p>
            <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>{t.services.items[1].title}</h2>
            <p>{t.services.items[1].description}</p>
            <button>View Projects</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>{t.services.items[2].title}</h2>
            <p>{t.services.items[2].description}</p>
            <button>Explore</button>
        </motion.div>
        </motion.div>
    </motion.div>
    );
};

export default Services;