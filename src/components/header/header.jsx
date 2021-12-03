import React from "react";
import Index from './index.scss';
import nikeLogo from "../../img/nike-logo.svg";
import cart from "../../img/cart.svg";
import profile from "../../img/profile.svg";
import sneaker from "../../img/Air Edge 270.png";
import fonts from "../../fonts/fonts.scss";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";
import left from "../../img/left.svg";
import right from "../../img/right.svg";


function Header () {return (
    <body class="body">
        <header className="header">
        <img src={nikeLogo} alt="" className="logo"/>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">NEW RELEASES</li>
                <li className="nav__item">MEN</li>
                <li className="nav__item">WOMEN</li>
                <li className="nav__item">KIDS</li>
                <li className="nav__item">CUSTOMIZE</li>
            </ul>
        </nav>
        <div className="info">
            <img src={profile} alt="" className="profile"/>
            <img src={cart} alt="" className="cart"/>
        </div>
    </header>
    <div className="info">
    <section className="section item_section">
        <h2 className="item__classification">
            MEN'S SHOE
        </h2>
        <h1 className="item__name">NIKE AIR EDGE 270</h1>
        <p className="item__text">
        The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.
        </p>
        <div>
            <img src="" alt=""/>
            <span>PLAY VIDEO</span>
        </div>
    </section>
    <section>
    <img src={sneaker} alt="" className="item__photo"/>
    </section>
    <section className="section section_pick">
        <div className="section__size">
        <h2 className="item__classification">SELECT SIZE</h2>
        <div className="item__sizepick">
            <div className="item__size"><span className="item__size_number">8</span></div>
            <div className="item__size"><span className="item__size_number">8.5</span></div>
            <div className="item__size"><span className="item__size_number">9</span></div>
            <div className="item__size"><span className="item__size_number">9.5</span></div>
            <div className="item__size"><span className="item__size_number">10</span></div>
            <div className="item__size"><span className="item__size_number">10.5</span></div>
            <div className="item__size"><span className="item__size_number">11</span></div>
            <div className="item__size"><span className="item__size_number">11.5</span></div>
            <div className="item__size"><span className="item__size_number">12</span></div>
            <div className="item__size"><span className="item__size_number">12.5</span></div>
        </div>
        </div>
        <div className="section__color">
        <h2 className="item__classification">SELECT COLOR</h2>
        <div className="item__colorpick">
            <div className="item__color item__color_brown"></div>
            <div className="item__color item__color_black"></div>
            <div className="item__color item__color_blue"></div>
            <div className="item__color item__color_yellow"></div>
            <div className="item__color item__color_white"></div>
        </div>
        </div>
    </section>
    </div>
    <section className="section section_socials">
        <div className="scroll">
            <p className="scroll__vertical">SCROLL DOWN</p>
        </div>
        <div className="socials">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
        </div>
    </section>
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
            <span>ADD TO CART - </span>
            <div> $95.97</div>
        </div>
    </footer>
    </body>
)
}

export default Header;