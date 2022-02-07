import React from 'react';
import '../style/Product.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();
  const addtoCart =()=> {
    dispatch({
      type: "AddCart",
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
      },
    })
  }
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
              <p key={i}><StarRateIcon className='icon' /></p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addtoCart}>Add to Basket</button>
    </div>
  );
};

export default Product;
