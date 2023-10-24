import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleBtn from "./toggleButton/ToggleBtn";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        delay: 0.2,
        damping: 40,
        stiffness: 400,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBtn isOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
