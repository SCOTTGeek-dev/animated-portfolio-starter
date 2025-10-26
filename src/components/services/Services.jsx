import "./services.scss";
import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";


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
            <h2>Cloud Architecture</h2>
            <p>Design and implement scalable cloud infrastructures using Azure, GCP, and AWS. 
            Expertise in microservices architecture, containerization with Docker and Kubernetes, 
            and serverless computing for optimal performance and cost efficiency.
            </p>
            <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Full-Stack Development</h2>
            <p>Build robust web applications using Spring Boot for backend development and 
            Angular/React for frontend. Proficient in Java enterprise applications, 
            RESTful APIs, database design, and modern JavaScript frameworks.
            </p>
            <button>View Projects</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>DevOps & CI/CD</h2>
            <p>Implement automated deployment pipelines, infrastructure as code, 
            monitoring and logging solutions. Experience with Jenkins, Azure DevOps, 
            Terraform, and container orchestration for seamless development workflows.
            </p>
            <button>Explore</button>
        </motion.div>
        </motion.div>
    </motion.div>
    );
};

export default Services;