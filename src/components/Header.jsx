import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Header = () => {
  return (
    <div className='header'>
      <div className="header_container">
      <div className='header_logo'>
        <h1>Yuki Honda</h1>
      </div>

      <nav className='header_nav'>
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
      </div>
    </div>
  );
}


export default Header;
