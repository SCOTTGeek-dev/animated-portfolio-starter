import { stagger } from "framer-motion";
import { motion } from "framer-motion";
import "./Hero.scss";
import { useLanguage } from "../../LanguageContext";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.1},
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },
};

const SliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 20,
            },
    },
};

const Hero = () => {
    const { t } = useLanguage();
    
    return (
        <div className="hero">
            <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>{t.hero.name}</motion.h2>
                  <motion.h1 variants={textVariants}>{t.hero.title}</motion.h1>
            <motion.div className="buttons">
                <motion.button variants={textVariants}>{t.hero.buttons.latestWorks}</motion.button>
                <motion.button variants={textVariants}>{t.hero.buttons.contact}</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
                {t.hero.title}
                </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="hero" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} />
            </div>
        </div>
        )
};

export default Hero;