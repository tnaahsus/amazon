import React from 'react';
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
    return (
        <div className='header'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className='logo' alt="" />
            <div className="search">
                <input className="searchInput" type="text" />
                <SearchIcon className="searchIcon" />
            </div>
            <div className="nav">
                <div className="option">
                    <span className="firstLine">Hello</span>
                    <span className="SecondLine">Sign in</span>
                </div>
                <div className="option">
                    <span className="firstLine">Returns</span>
                    <span className="SecondLine">& Orders</span>
                </div>
                <div className="option">
                    <span className="firstLine">Your</span>
                    <span className="SecondLine">Prime</span>
                </div>
                <div className="basket">
                    <ShoppingBasketIcon />
                    <span className="SecondLine basketCount">0</span>
                </div>
            </div>
        </div>
    )
};

export default Header;
