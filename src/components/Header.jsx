import React from 'react';
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import{auth} from  '../firebase' 


const Header = () => {
    // eslint-disable-next-line no-unused-vars
    const [{ basket, user, drawer }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
          auth.signOut();
        }
      };
    return (
        <div className='header'>
            <Link to='/' >
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className='navlogo' alt="" />
            </Link>
            <div className="search">
                <input className="searchInput" type="text" />
                <SearchIcon className="searchIcon" />
            </div>
            <div className="nav">
                <Link to='/login'>
                    <div className="option"  onClick={handleAuthentication}>
                        <span className="firstLine">{user ? user.email : "Hello Guest"}</span>
                        <span className="SecondLine">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="option">
                    <span className="firstLine">Returns</span>
                    <span className="SecondLine">& Orders</span>
                </div>
                <div className="option">
                    <span className="firstLine">Your</span>
                    <span className="SecondLine">Prime</span>
                </div>
                <Link to='/cart'>
                    <div className="basket">
                        <ShoppingBasketIcon />
                        <span className="SecondLine basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Header;
