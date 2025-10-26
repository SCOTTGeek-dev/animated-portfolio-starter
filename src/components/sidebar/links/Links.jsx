import { motion } from "framer-motion";
import { useLanguage } from "../../../LanguageContext";

const variants={
    open:{
        transition:{
            staggerChildren: 0.1,
    },
},
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1,
    },
},
};

const itemVariants={
    open:{
        y: 0,
        opacity: 1,
},
    closed:{
        y: 50,
        opacity: 0,
},
};



const Links = () => {
    const { t } = useLanguage();

    const items= [
        { id: "Homepage", label: t.menu.homepage },
        { id: "Services", label: t.menu.services },
        { id: "Portfolio", label: t.menu.portfolio },
        { id: "Contact", label: t.menu.contact },
    ]
    return ( 
    <motion.div className="links" variants={variants}>
        {items.map((item) => (
         <motion.a 
            href={`#${item.id}`} 
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
         >
            {item.label}
         </motion.a>
        ))}
         </motion.div>
 );
};

export default Links
