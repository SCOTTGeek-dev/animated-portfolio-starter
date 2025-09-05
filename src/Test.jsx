import {motion} from "framer-motion";
import { useState } from "react";
import ToggleButton from "./components/sidebar/toggleButton/toggleButton.jsx";

const Test = () => {

const [open,setOpen] = useState(false)

  const variants = {
    visible: {opacity: 1, x:800, transition: {type: "spring", stiffness: 200, damping: 100}},
    hidden: {opacity: 0},
  }

  return (
    <div className="course">
  <motion.div
   className="box"
    variants={variants}
    //initial="hidden"
    //animate={}
     transition={{duration: 2}}
     animate={open ? "visible" : "hidden"}
    ></motion.div>
    <ToggleButton setOpen={setOpen} />
  </div>
  );
};

export default Test;
