import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
      <nav className='footer-nav'>
        <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        </motion.div>
        <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <li>
        <Link to="/Profile">Profile</Link>
        </li>
        </motion.div>
        <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
        </motion.div>
      </nav>
      <p class="footer_copy">© Yuki Honda website portfolio 2023</p>
      </div>
    </div>
  )
}

export default Footer;