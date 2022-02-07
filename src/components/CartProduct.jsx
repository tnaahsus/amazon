import React from 'react';
import '../style/CartProduct.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../StateProvider'

const CartProduct = ({ id, image, title, price, rating }) => {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'RemoveCart',
            id: id,
        })
    }
    return (
        <div className='cartProduct'>
            <img className='cartProductImage' src={image} alt='img' />

            <div className='cartProductInfo'>
                <p className='cartProductTitle'>{title}</p>
                <p className="cartProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartProductRating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><StarRateIcon className='icon' /></p>
                        ))}
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    );
};

export default CartProduct;
