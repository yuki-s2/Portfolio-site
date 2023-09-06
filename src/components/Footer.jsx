import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <nav className="footer_nav">
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
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a className="footer_FontAwesome" href="https://github.com/yuki-s2">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </motion.div>
      </div>
      <p className="footer_copy">© Yuki Honda website portfolio 2023</p>
    </div>
  );
};

export default Footer;
