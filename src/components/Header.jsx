import React from 'react'
import '../App.css';
import { Link  } from 'react-router-dom';
import tatli from  "./images/tatli.jpg";
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
  return (
    <div>
        <div className='header'>
        <img className='tatli' src={tatli} />
      <nav>
        <p class="navButton"> <Link to="/" >Home </Link> </p>
        <p class="navButton"> <Link to="/about">About</Link></p>
        <p class="navButton"><Link to="/vacancies">Vacancies</Link></p>
        <p class="navButton"> <Link to="/contacts">Contact us</Link></p>
        <p class="navButton"> <Link to="/list"> <FaShoppingCart /></Link></p>
      </nav>
      
      
        </div>
       
    </div>
  )
}

export default Header
