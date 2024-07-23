import React from 'react'
import useFetchProducts from '../Hooks/useFetchProducts';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import formatCurrency from '../UI/formatCurrency';

const CartItem = ({id, quantity}) => {

    const { products } =useFetchProducts()
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = products.find(i => i.id === id)
    if (item == null) return null

  return (
    <div className='cart-stack'>

        <img src={item.photos[0]} alt={item.name} style={{width: "7rem"}}/>



        <div className='item-quantity-btn'>
          <div className='item-btn'>
            <p>{item.name}</p>
            <p>{formatCurrency(item.price)}</p>
          </div>

          <div className='quantity-btn'>

          <div className='cart-item'>
            <button onClick={() => decreaseCartQuantity(id)} aria-label="Decrease quantity"> 
            <AiOutlineMinus /> </button>
            <span> {quantity} </span>
            <button onClick={() => increaseCartQuantity(id)} aria-label="Increase quantity">
            <AiOutlinePlus /> </button>
          </div>  

            <button onClick={() => removeFromCart(id)} className='remove-item-btn'>Remove</button>
          </div>

        </div>
      

    </div>
  )
}

export default CartItem
