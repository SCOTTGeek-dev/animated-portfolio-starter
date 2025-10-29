import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Terminal from "../terminal/Terminal";
import "./terminalSection.scss";

const variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
};

const TerminalSection = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px", once: true });

    return (
        <motion.section
            className="terminal-section"
            ref={ref}
            variants={variants}
            initial="initial"
            animate={isInView && "animate"}
        >
            <motion.div className="terminal-section-content" variants={variants}>
                <motion.h2 variants={variants} className="terminal-section-title">
                    <span className="title-accent">{'>'}</span> Interactive CLI
                </motion.h2>
                <motion.p variants={variants} className="terminal-section-description">
                    Explore my profile through an interactive command-line interface
                </motion.p>
                <motion.div variants={variants} className="terminal-wrapper">
                    <Terminal />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default TerminalSection;
