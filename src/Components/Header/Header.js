import React from 'react';
import logo from '../../Assets/logo.png';
import './Header.css';
 

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg">
        <div className="container">
            <nav className='d-flex navbar p-4'>
                 <div>
                 <Link to="/">
                         <img src={logo}  style={{ maxWidth: "150px" }} alt="logo dark"/>
                 </Link>
                 </div>
                 <div>
                     <input className="searchBox" type="search" name="" placeholder="Search your destination" id=""/>
                 </div>
                 <ul className="d-flex ul">
                     <li><Link to='/news'>News</Link></li>
                     <li><Link to='/blog'>Blog</Link></li>
                     <li><Link to='/gallery'>Gallery</Link></li>
                     <li><Link to='/contact'>Contact</Link></li>
                     <Link to="/login"> <button> Login</button></Link>
                 </ul>
            </nav>
        </div>
     </div>
    );
};

export default Header;