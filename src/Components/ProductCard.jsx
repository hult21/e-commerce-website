import React, { useState } from 'react'
import formatCurrency from '../UI/formatCurrency';

const ProductCard = ({ product, onClick }) => {

    const defaultThumbnail = product.photos && product.photos.length > 0 ? product.photos[0] : '';
    const [thumbnail, setThumbnail] = useState(defaultThumbnail);
  
    const handleMouseOver = () => {
      if (product.photos && product.photos.length > 1) {
        setThumbnail(product.photos[1]);
      }
    };
  
    const handleMouseOut = () => {
      setThumbnail(defaultThumbnail);
    };
  
    return (
      <div className='card' onClick={() => onClick(product)} aria-label={`View details for ${product.name}`} role="button" tabIndex="0">
        <div 
          className='thumbnail'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleMouseOver}
          onBlur={handleMouseOut}
        >
          <img src={thumbnail} alt={product.name}/>
        </div>
        <div className='card-name-price'>
          <h4>{product.name}</h4>
          <p>{formatCurrency(product.price)}</p>
        </div>
      </div>
    );
  };

export default ProductCard
