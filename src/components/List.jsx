import React from 'react'
import {  useCart } from "react-use-cart";
import { useEffect } from 'react';
const List = () => {
    
        
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
      } = useCart();
      if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      <h1> The Number of Product({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash; {item.price} AZN each  
            &mdash;
            <button className='buttonList'
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button   className='buttonList'
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className='buttonList' onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>

      <p>Total Price: {cartTotal}AZN</p>
      
    </>
  )
}

export default List
