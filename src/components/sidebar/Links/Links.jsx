import { motion } from "framer-motion";
const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a key={index} href={`#${item}`} variants={itemsVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
