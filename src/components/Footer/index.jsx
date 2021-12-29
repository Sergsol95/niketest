import React from 'react'
import left from "../../img/left.svg";
import right from "../../img/right.svg";

import './index.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__changer">
                <div className="footer__item">
                    <span className="footer__item__name">PREV</span>
                    <img src={left} alt="" />
                </div>
                <div className="footer__item">
                    <span className="footer__item__name">NEXT</span>
                    <img src={right} alt="" />
                </div>
            </div>
            <div className="footer__cart">
                <button className="button button_cart">ADD TO CART - </button>
                <div> $95.97</div>
            </div>
        </footer>
    )
}
