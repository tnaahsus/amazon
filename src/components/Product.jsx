import React from 'react';
import '../style/Product.css'
import StarRateIcon from '@mui/icons-material/StarRate';

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}><StarRateIcon className='icon'/></p>
                ))}
            </div>
          </div>
    
          <img src={image} alt="" />
    
          <button>Add to Basket</button>
        </div>
      );
};

export default Product;
