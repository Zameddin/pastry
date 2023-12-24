import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartProvider, useCart } from "react-use-cart";
import 'swiper/css';
import "./CakeSlider.css";
import '../App.css'
const CakeChristmas = () => {
  const { addItem } = useCart();

  const data = [
    {id: 1,
      name: 'Christmas Cake 1',
      img: 'https://stylesweet.com/wp-content/uploads/2018/12/3DChristmasTreeCake_Featured-1-500x500.jpg',
      price: 47,
    },
    {id: 2,
      name: 'Christmas Cake 2',
      img: 'https://preppykitchen.com/wp-content/uploads/2018/12/Christmas-trees-cake-feature.jpg',
      price: 47,
    },
    { id: 3,
      name: 'Christmas Cake 3',
      img: 'https://curlygirlkitchen.com/wp-content/uploads/2021/12/How-To-Make-Snowman-Christmas-Cake-Buttercream-001-500x500.jpg',
      price: 47,
    },
    {
      id: 4,
      name: 'Christmas Cake 4',
      img: 'https://i.pinimg.com/736x/74/d9/13/74d9137df3de5e78d8f3334364573d6a.jpg',
      price: 47,
    },
    { id: 5,
      name: 'Christmas Cake 5',
      img: 'https://s3.amazonaws.com/cdn.elecakeco.com/images/uploads/category_640_5947.jpg',
      price: 47,
    },
    {
      id: 6,
      name: 'Christmas Cake 6',
      img: 'https://www.kitchensanctuary.com/wp-content/uploads/2023/10/Christmas-Cake-Decoration-tall-FS.jpg',
      price: 47,
    },
    {
      id: 7,
      name: 'Christmas Cake 7',
      img: 'https://domesticgothess.com/wp-content/uploads/2016/12/gingerbread-topped-christmas-cake.jpg',
      price: 47,
    },
    {
      id: 8,
      name: 'Christmas Cake 8',
      img: 'https://i.pinimg.com/736x/5f/3b/7c/5f3b7ca80c382b43793948df78ca59d0.jpg',
      price: 47,
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
     <SwiperSlide>{<div>
         
         <div className='card' key={data}>
        <img src={data[7].img} alt="cake"  className='imgArray' />
        <p>{data[7].name}</p>
        <p>{data[7].price}AZN</p>
        <button className='basketButton' onClick={() => addItem(data[5])}>Add basket</button>
      </div>
          
      </div>
    }</SwiperSlide>
     
    
  </Swiper>
  );
};


export default CakeChristmas;
