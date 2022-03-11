import React from 'react';
import '../style/Cart.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider'
import CartProduct from './CartProduct'

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user, drawer }, dispatch] = useStateValue();
  let sum = basket.reduce(function (prev, current) {
    return prev + +current.price
  }, 0);
  return (
    <div className='cart'>
      <div className="cartLeft">
        <img className='cartAd' src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="" />
        <div>
          {user ? <h3>Hello {user.email}</h3> : null}
          <h2 className="cartTitle">Your Shopping Cart</h2>
          {basket.map(item => {
          return <CartProduct
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
          })}
        </div>
      </div>
      <div className="cartRight">
        <div className="subTotal">
          <CurrencyFormat
            renderText={() => (
              <>
                <p>
                  Subtotal ({basket.length} items): <strong>${sum}</strong>
                </p>
                <small className="subTotalGift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={sum}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />

          <button>Proceed to Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
