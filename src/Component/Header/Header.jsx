import React from 'react'
import "./Header.css"
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';





const Header = () => {
  return (
    <>
    <div>
      <div className='navbar'>
      <img src="src/assets/Logo.png" alt="Logo" className='logo' />
            <ul>
              <Link to="/">
                <li><a href="#">Home</a></li>
                </Link>
                <Link to="/Bedroom">
                <li><a href="#">bedroom</a></li>
                </Link>
                <Link to="/Dinning">
                <li><a href="#">dinning</a></li>
                </Link>
                <Link to="/Kitchen">
                <li><a href="#">kitchen</a></li>
                </Link>
                <Link to="/Backyard">
                <li><a href="#">backyard</a></li>
                </Link>
            </ul>
        </div>
    </div>
    </>
  );
};

export default Header;

