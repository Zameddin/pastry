import React from 'react'


    import { Swiper, SwiperSlide } from 'swiper/react';
    import { CartProvider, useCart } from "react-use-cart";
    import 'swiper/css';
    import "./CakeSlider.css";
    import '../App.css'
    const Chocolate = () => {
      const { addItem } = useCart();
    
      const data = [
        {id: 1,
          name: 'Chocolate Cake 1',
          img: 'https://inbloombakery.com/wp-content/uploads/2022/04/chocolate-drip-cake-featured-image.jpg',
          price: 56,
        },
        {id: 2,
          name: 'Chocolate Cake 2',
          img: 'https://stephaniessweets.com/wp-content/uploads/2020/05/IMG_0243.jpg',
          price: 56,
        },
        { id: 3,
          name: 'Chocolate Cake 3',
          img: 'https://domesticgothess.com/wp-content/uploads/2020/12/vegan-mulled-wine-chocolate-cake-500x375.jpg',
          price: 56,
        },
        {
          id: 4,
          name: 'Chocolate Cake 4',
          img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg',
          price: 56,
        },
        { id: 5,
          name: 'Chocolate Cake 5',
          img: 'https://feedingboys.co.uk/wp-content/uploads/2017/05/ultimate-chocolate-cake-landscape-1-1-of-1-683x1024.jpg',
          price: 56,
        },
        {
          id: 6,
          name: 'Chocolate Cake 6',
          img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/1/6/0/fnd_naked-chocolate-cake-i-am-baker.jpg.rend.hgtvcom.1280.1280.suffix/1420561463141.jpeg',
          price: 56,
        },
        {
          id: 7,
          name: 'Chocolate Cake 7',
          img: 'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/04/12844-Chocolate_Fudge_Cake.jpg?v=1-0',
          price: '56AZN',
        },
        {
          id: 8,
          name: 'Chocolate Cake 8',
          img: 'https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/TRIPLE-CHOCOLATE-CAKE.jpg',
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
    

export default Chocolate
