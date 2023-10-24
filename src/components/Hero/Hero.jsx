import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },

    scrollAnimation: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };
  const slideVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-500%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Muhammad Arham Khan</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollAnimation"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        MERN Python React-Native NEXT-JS
      </motion.div>
      <div className="imgContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
