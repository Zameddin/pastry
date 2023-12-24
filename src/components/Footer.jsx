import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 

  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <ul>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/vacancies">Vacancies</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
      
        <p className='phoneNUm'><span>Govsan : +994 55 551 60 01</span>    <span>Garacukhur : +994 55 551 60 02</span></p>
       
        <p className='phoneNUm'> <span>Yeni Guneshli : +994 55 551 60 03</span>     <span>  Bakikhanov : +994 55 551 60 04</span>   </p>
        
        </div>
       
      </div>
      <div className='gmail'> 
      <FontAwesomeIcon icon={faEnvelope} className='gmail' />
      
        e-mail : tatliunmemulatlari@gmail.com
      </div>
      <hr/>
      <div className='footer2'>
      <Link to="https://www.instagram.com/tatliunmemulatlari?igshid=NGVhN2U2NjQ0Yg"> <FontAwesomeIcon icon={faInstagram} className="insta-icon"  /></Link>
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
      <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
      <FontAwesomeIcon icon={faWhatsapp} className="wp-icon" />
      </div>
    </div>
  )
}

export default Footer
