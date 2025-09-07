import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
    return(
        <motion.div className="services">
         <motion.div className="textContainer">
            <p>
                I focus on developîng modern cloud solutions that are scalable, secure, and efficient
                <br /> having experience in various technologies and frameworks
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <b>Unique</b>
                Ideas
                </h1>
        </div>
         <div className="title">
            <h1>
                <b>For Your </b>
                Business maybe !
            </h1>
            <button>WHAT I DO?</button>
        </div>
        </motion.div>
        <motion.div className="listContainer">
        <div className="box">
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil corrupti fugiat unde! Mollitia cupiditate vel deleniti
            ut nam adipisci est id reprehenderit nostrum voluptatum aperiam qui repellat, porro rerum unde?
            </p>
            <button>Go</button>
        </div>
          <div className="box">
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil corrupti fugiat unde! Mollitia cupiditate vel deleniti
            ut nam adipisci est id reprehenderit nostrum voluptatum aperiam qui repellat, porro rerum unde?
            </p>
            <button>Go</button>
        </div>
          <div className="box">
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil corrupti fugiat unde! Mollitia cupiditate vel deleniti
            ut nam adipisci est id reprehenderit nostrum voluptatum aperiam qui repellat, porro rerum unde?
            </p>
            <button>Go</button>
        </div>
        </motion.div>
    </motion.div>
    );
};

export default Services;