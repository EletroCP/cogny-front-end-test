import React from 'react';
import shoes from '../icons/shoes.png'
import { useNavigate } from 'react-router-dom';
import '../style/Logo.css';

const Logo = ({url}) => {
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate(url)} id='header-container'>
            <h2 id='header-title'>COGNYSHOES</h2>
            <img id='header-logo' alt='logo' src={shoes}/>
        </div>
    )
}

export default Logo;