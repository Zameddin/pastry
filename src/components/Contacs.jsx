import React from 'react'
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 

  faInstagram,
  faTwitter,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Contacs = () => {
 
    
  return (
    <div>
      <h1>CONTACT US</h1>
      <div className='formContact'>
        
      <form>
      
        <ul>
        
       <li><input placeholder=' Name' className='inputContact' type='text' required/></li>
    
      
      
        <li><input placeholder=' Surname' className='inputContact' type='text'required/></li>
      
      
  
       <li><input placeholder=' Number' className='inputContact'type='number'required/></li> 
     
  
       <li><input placeholder='Email' className='inputContact'type='email'required/></li> 
      
      
      <li><input placeholder='Message' className=' topic' type='text'required/></li> 
     
     
     <li><input type="submit" value="Send Request" className='submit' /></li>
        </ul>
     
     </form>
     <div>
      <h3>CONTACT DETAILS</h3>
      
      <p className='contactDetail'>Gmail : tatliunmemulatlari@gmail.com</p>
      <p className='contactDetail'> Phone : +994 55 551 60 02</p>
      <Link to="https://www.instagram.com/tatliunmemulatlari?igshid=NGVhN2U2NjQ0Yg"> <FontAwesomeIcon icon={faInstagram} style={{color:'black',margin:10}} /></Link>
      <FontAwesomeIcon icon={faTwitter} style={{margin:10}} />
      <FontAwesomeIcon icon={faFacebook} style={{margin:10}} />
      <FontAwesomeIcon icon={faWhatsapp} style={{color:'black',margin:10}} />
     </div>
      </div>
   
  <Footer/>
    </div>
  )
}

export default Contacs
