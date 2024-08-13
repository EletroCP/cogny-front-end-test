import React from 'react';
import shoes from '../icons/shoes.png'
import { useNavigate } from 'react-router-dom';
import '../style/Logo.css';

const Logo = ({url}) => {
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate(url)} id='header-logo-container'>
            <p id='header-logo-title'>COGNYSHOES</p>
            <img id='header-logo-image' alt='logo' src={shoes}/>
        </div>
    )
}

export default Logo;