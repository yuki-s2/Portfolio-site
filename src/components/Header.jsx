import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>Yuki Honda</h3>
      </div>

      <nav className='headerNav'>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header;