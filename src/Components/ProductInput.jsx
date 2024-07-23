import React from "react"
import formatCurrency from "../UI/formatCurrency"
import '../Styles/cart.css'
import { useProductNavigation } from "../Hooks/useProductNavigation";



const ProductInput = ({ value }) => {
  const onProductClick = useProductNavigation();
  const handleClick = () => onProductClick(value);

    return (
        <div className='cart-stack' onClick={handleClick}>

        <img src={value.photos[0]} alt={value.name} style={{width: "7rem"}}/>



        <div className='item-quantity-btn'>
          <div className='item-btn'>
            <p>{value.name}</p>
            <p>{formatCurrency(value.price)}</p>
          </div>

         

        </div>
      

    </div>
    )
  }
  
  export default ProductInput