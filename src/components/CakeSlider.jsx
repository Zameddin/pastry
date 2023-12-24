import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartProvider, useCart } from "react-use-cart";
import 'swiper/css';
import "./CakeSlider.css";
import '../App.css'
const CakeSlider = () => {
  const { addItem } = useCart();

  const data = [
    {id: 1,
      name: 'Birthday Cake 1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryGknVv9ZibEdeUHbQiQDaDzSXpOlZcZhMA&usqp=CAU',
      price: 56,
    },
    {id: 2,
      name: 'Birthday Cake 2',
      img: 'https://www.angesdesucre.com/cdn/shop/articles/Best_Birthday_Cakes_London_1600x.jpg?v=1584471456',
      price: 56,
    },
    { id: 3,
      name: 'Birthday Cake 3',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVzoaYTLx-6UVoHOyPWzj-g4L19Q40W9hu3Z4h1BC59o8YYMgwfQQ3-lf0H47oZ4rqKc&usqp=CAU',
      price: 56,
    },
    {
      id: 4,
      name: 'Birthday Cake 4',
      img: 'https://europatisserie.com.au/files/2018/04/Birthday-Cake-3-768x1024.jpg',
      price: 56,
    },
    { id: 5,
      name: 'Birthday Cake 5',
      img: 'https://i.etsystatic.com/18418140/r/il/32b9c8/3134099557/il_570xN.3134099557_bcyu.jpg',
      price: 56,
    },
    {
      id: 6,
      name: 'Birthday Cake 6',
      img: 'data:image/jpeg;base64,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',
      price: 56,
    },
    {
      id: 7,
      name: 'Birthday Cake 7',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_O3KRT3T1UFVeWMlAUK1QJA-gJX3vF_oWg&usqp=CAU',
      price: '56AZN',
    },
    {
      id: 8,
      name: 'Birthday Cake 8',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqexSeEwaFP_MeD_MeZkK2MZ9vPh2r0AkHw&usqp=CAU',
      price: 56,
    }
  ];
  
  
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      {
        <div>
         
           <div className='card' key={data}>
          <img src={data[0].img} alt="cake"  className='imgArray' />
          <p>{data[0].name}</p>
          <p>{data[0].price}AZN</p>
       
          <button className='basketButton'onClick={() => addItem(data[0])}>Add basket</button>
        </div>
            
        </div>
      }
    </SwiperSlide>
    <SwiperSlide>
      {<div>
         
         <div className='card' key={data}>
        <img src={data[1].img} alt="cake"  className='imgArray' />
        <p>{data[1].name}</p>
        <p>{data[1].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[1])}>Add basket</button>
      </div>
          
      </div>
    }
    </SwiperSlide>
    <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[2].img} alt="cake"  className='imgArray' />
        <p>{data[2].name}</p>
        <p>{data[2].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[2])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
    <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[3].img} alt="cake"  className='imgArray' />
        <p>{data[3].name}</p>
        <p>{data[3].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[3])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
    ...
    <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[4].img} alt="cake"  className='imgArray' />
        <p>{data[4].name}</p>
        <p>{data[4].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[4])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
     <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[7].img} alt="cake"  className='imgArray' />
        <p>{data[7].name}</p>
        <p>{data[7].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[5])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
     <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[5].img} alt="cake"  className='imgArray' />
        <p>{data[5].name}</p>
        <p>{data[5].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[6])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
     
     <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[6].img} alt="cake"  className='imgArray' />
        <p>{data[6].name}</p>
        <p>{data[6].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[7])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
    
  </Swiper>
  );
};

export default CakeSlider;
