import React from "react";
import { useContext } from "react";
import '../style/SpamBuy.css';
import { GlobalStateContext } from "../context/context";

const SpamBuy = () => {
    const {setFinishPurchase, setCart } = useContext(GlobalStateContext);
    return(
    <div id='spam-main-container'>
        <p id='spam-main-text'>Sua compra foi finalizada</p>
        <input
            id='spam-main-button'
            type='button'
            value='Fechar'
            onClick={() =>{ setFinishPurchase(false); setCart([]); }}/>
    </div>
    );
}
    export default SpamBuy;