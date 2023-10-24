import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
const Services = () => {
  const ref = useRef();

  const useView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={useView && "animate"}
    >
      <motion.div
        className="sloganContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est
            reiciendis placeat necessitatibus, esse veniam odio deleniti. Quam
            mollitia nulla quae maxime, fuga illum, doloremque ab delectus
            reprehenderit fugiat nemo.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est
            reiciendis placeat necessitatibus, esse veniam odio deleniti. Quam
            mollitia nulla quae maxime, fuga illum, doloremque ab delectus
            reprehenderit fugiat nemo.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est
            reiciendis placeat necessitatibus, esse veniam odio deleniti. Quam
            mollitia nulla quae maxime, fuga illum, doloremque ab delectus
            reprehenderit fugiat nemo.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
