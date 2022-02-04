import React from 'react';
import '../style/Home.css'
import Product from './Product';


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <img
                    className="image"
                    src="https://m.media-amazon.com/images/I/61rKFdQBcWL._SX3000_.jpg"
                    alt=""
                />

                <div className="homeRow">
                    <Product
                        id="90829332"
                        title="Apple iPhone 12 Pro Max, 128GB, Pacific Blue"
                        price={969.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="90829345"
                        title="ASUS ROG Strix G15 (2021) Gaming Laptop"
                        price={2028.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81hH5vK-MCL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>

                <div className="homeRow">
                <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
                </div>

                <div className="homeRow">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

            </div>
        </div>
    );
};

export default Home;
