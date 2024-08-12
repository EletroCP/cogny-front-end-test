import React from 'react';
import shoes from '../icons/shoes.png'
import { useNavigate } from 'react-router-dom';
const Logo = ({url}) => {
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate(url)}>
            <h2>COGNYSHOES</h2>
            <img style={{width:'100px', height: '100px'}} alt='logo' src={shoes}/>
        </div>
    )
}

export default Logo;