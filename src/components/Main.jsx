import React, { useEffect } from 'react';
import '../App.css';
import Footer from './Footer';
import { useState } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import CakeSlider from './CakeSlider';
import CakeChristmas from './CakeChristmas';
import Chocolate from './Chocolate';
import FruityCake from './FruityCake';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
  
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
  
  const { addItem } = useCart();

  const cakesArray = [
    {id:1,
      Poster: 'data:image/jpeg;base64,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',
      name: 'Winter cake',
      price: 59,
    },
    {id:2,
    
      Poster: 'https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg',
      name: 'Chocolate cake',
      price: 45.50,
    },
    {id:3,
    
      Poster: 'data:image/jpeg;base64,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',
      name: 'Penguins Cake',
      price: 65
    },
   {
    id:4,    
    Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaI5jWV-AIu8knK6FJCdpaFYppcDw3L2EVQ&usqp=CAU',
    name: 'Fruity Cake',
    price: 25
   }
   
  ];

  return (
    
    <div className='parentdiv'>
      <main>
      <div className="divmain">
          
      </div>
      <ul id='sections'>
          <h4>Sections</h4>
         
          <li><a href='#birthday'>Birhtday Cakes</a> </li>
          <li><a href='#chrismas'>Chrismas Cakes</a>  </li>
          <li><a href='#fruit'> Fruity Cake</a></li>
          <li><a href='#chocolate'> Chocolate Cakes</a></li>
          
        </ul>
      </main>
     
      <div className='divslogan'> 
        <hr/> 
        <div className='slogan'>Let's eat sweet, let's talk sweet</div> 
        <hr/>
      </div>
      <div className='cards'>
      
      {cakesArray.map((item, index) => (
        
          <div className='card'>
            <img src={item.Poster} alt="cake" className='imgArray' data-aos="fade-right" />
            <p>{item.name}</p>
            <p>{item.price}AZN</p>
            <button className='basketButton' onClick={() => addItem(item)}>Add basket</button>
          </div>
     
      ))}
    
         
      </div>
      <br/>

      <div className='container'>
        <div className='container_'> 
        <h2 className='guest'>Be Our Guest</h2>
            <p>The Cake Shop is glad to play host to your sweet tooth in our
               charming storefront. Grab a bite, take a seat, and enjoy all we have to offer. From our delectable baked goods
                to our wide array of gourmet-inspired gifts, we pride ourselves in satisfying your hunger for all things baked.</p>
          <a href='#birthday'><button id='containerButton'>VIEW ALL</button></a> 
        </div>
           
       </div>
       
      <div className='slogan'>More than just cakes</div> 
       <div id='birthday'>
        <h1 className='cakeHeader'> Birthday Cake</h1>
         <CakeSlider/>
         </div>
      <div id='chrismas'>
      <h1 className='cakeHeader'> Christmas Cake</h1>
       <CakeChristmas/>
      </div>
      <div id='fruit'> 
      <h1 className='cakeHeader'> Fruity Cakes</h1>
      <FruityCake/>
      </div>
     
      <div id='chocolate'>
      <h1 className='cakeHeader'> Chocolate Cakes</h1>
      <Chocolate/>
      </div>
      <div id='croissants'>

      </div>
      <button id='scrollToTopMain' onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
          </button>
      <br/>
      <Footer />
    </div>
  );
}

export default Main;
