    import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { CartProvider, useCart } from "react-use-cart";
    import 'swiper/css';
    import "./CakeSlider.css";
    import '../App.css'
    const FruityCake = () => {
      const { addItem } = useCart();
    
      const data = [
        {id: 1,
          name: 'Fruity Cake 1',
          img: 'https://www.bakinglikeachef.com/wp-content/uploads/fresh-fruit-cake.jpg',
          price: 43,
        },
        {id: 2,
          name: 'Fruity Cake 2',
          img: 'https://cakedecoratingtutorials.com/wp-content/uploads/2021/01/0c26a51b71bb9394d9e34df17bc0b9fa.jpg',
          price: 43,
        },
        { id: 3,
          name: 'Fruity Cake 3',
          img: 'https://i.pinimg.com/736x/ba/4d/e7/ba4de78e057f7a7126286cd97a804857.jpg',
          price: 43,
        },
        {
          id: 4,
          name: 'Fruity Cake 4',
          img: 'https://dt0ob8rsv74x6.cloudfront.net/products_images/large/watermelon-fruit-cake-delivery-london-5d82656d79133.jpeg',
          price: 43,
        },
        { id: 5,
          name: 'Fruity Cake 5',
          img: 'https://i.pinimg.com/1200x/01/82/09/01820929a0850a41321bb3baab53943b.jpg',
          price: 43,
        },
        {
          id: 6,
          name: 'Fruity Cake 6',
          img: 'https://i.pinimg.com/564x/56/60/e1/5660e1bcbb648354474cc297f3f1f30e.jpg',
          price: 43,
        },
        {
          id: 7,
          name: 'Fruity Cake 7',
          img: 'https://www.giftmyemotions.com/image/cache/floralnation/amazone/0127-800x800.jpg',
          price: 43,
        },
        {
          id: 8,
          name: 'Fruity Cake 8',
          img: 'https://thefirstyearblog.com/wp-content/uploads/2015/06/Vanilla-and-Fresh-Berry-Naked-Cake-2.jpg',
          price: 43,
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
    

export default FruityCake
