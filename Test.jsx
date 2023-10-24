import "../../app.scss";
import { motion } from "framer-motion";
const Test = () => {
  const variants = {
    visible: {
      x: 100,
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      {/*
      <motion.div
        className="box"
        initial={{ opacity: 0.5, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 2 }}
        drag
        transition={{type: 'spring', stiffness: 200 }}
      />
      */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, index) => (
          <motion.li key={index} variants={variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
