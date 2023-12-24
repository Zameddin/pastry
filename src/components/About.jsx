import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scroll = () => {
    if (window.scrollY > 20) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className='about'>
        <img src='https://alittlecake.com/wp-content/uploads/2022/04/Marble-Geode-Cake-.jpg'/>
         <p className='aboutText'>The Tatli Cake Shop specialises in exquisitely hand-crafted, premium celebration cakes for any occasion. We have a team of highly skilled cake designers
          and decorators who can create a truly personalised and memorable cake which is bound to delight at your special occasion.
          he Cake Shop sells a wide range of cake decorating accessories including edible goods, ribbons, sugarcraft materials, tools and equipment.
          To discuss your requirements in more detail with our team of designers.
        </p>
      </div>
      <br/>
      <hr/>
      <div className='about'>
      <p className='aboutText'>We have been trading since 2000 in the historic city of Baku, Our shop is regularly featured in both local and national media.

         The Tatli Cake Shop is located within the historic Covered Towns and is a focal point for many of the guided walking tours that pass through the city as well as providing locals and tourists with an opportunity to watch our skilled cake artists at work.

         Our cakes are made from the highest quality ingredients sourced fresh from the best UK producers, many of which we have been working in partnership with since the business began</p>
      <img  className='cakes' src='https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cake-decorated-with-fondant-marzipan-and-cherries-SQ.jpg'/>
      </div>
      <br/>
      <div className='about_2' >
      <img src='https://media.istockphoto.com/id/921788748/photo/portrait-of-confectioner-decorating-cake-in-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=SFVHFQz-gy2SOkS4rIlMObUtgk1bVPHZWPFKNBGtThg=' width={500}/>
      <p className='aboutText'>
       You can choose  and order any type of cake decoration in our cake shop . We are working professional , enthusiastic and energetic individuals team. 
       So, they are ready to decorate, learning new decorating skills alongside experienced decorators, learning how to write messages on cakes for customer orders
      </p>
      
      </div>
      
      <br/>
      <hr/>
      <div className='about_3'>
        <p s>Our shop is regularly featured in both local and national media.

The Tatli Cake Shop is located within the historic Covered Towns and is a focal point for many of the guided walking tours that pass through the city as well as providing locals and tourists with an opportunity to watch our skilled cake artists at work.

Our cakes are made from the highest quality ingredients sourced fresh from the best UK producers, many of which we have been working in partnership with since the business began</p>
        <img src='https://fastly.4sqi.net/img/general/600x600/6945493_vEwIbaRzpB408mEEeukDcbxlrcTmSCDGrXwHeOCe6Uo.jpg'/>
      </div>
      <button id='scrollToTop' onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
          </button>
      <br/>
    <Footer/>
    </div>
  )
}

export default About
