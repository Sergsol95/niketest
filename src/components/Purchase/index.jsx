import React from 'react';
import cart from "../../img/cart.svg";
import profile from "../../img/profile.svg";


import './index.scss';

export const Purchase = () => {
    return (
            <div className="purchase">
                    <a href="" className="pusrchase__link">
                        <img src={profile} alt="" className="profile" />
                    </a>
                    <a href="" className="pusrchase__link">
                        <img src={cart} alt="" className="cart" />
                    </a>
                    <div className="cart__shell">
                        <span className="cart__counter">0</span>
                    </div>
                    <div className="button__burger">
                        <span className="button__burger_mid" />
                    </div>
                </div>
    )
}
