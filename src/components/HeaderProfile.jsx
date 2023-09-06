import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateOpacity from "../motion/AnimateOpacity";

const HeaderProfile = () => {
  return (
    <header className="header_profile">
      <div className="header_profile_container">
      <AnimateOpacity>
        <div className="header_profile_logo">
          <h1>Yuki Honda</h1>
        </div>
        </AnimateOpacity>
        <AnimateOpacity>
        <nav className="header_nav header_profile_nav">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </motion.div>
        </nav>
        </AnimateOpacity>
      </div>
    </header>
  );
};

export default HeaderProfile;
