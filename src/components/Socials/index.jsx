import React from 'react';
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";

import './index.scss'

export const Socials = () => {
    return (
        <section className="section section_socials">
                <div className="scroll">
                    <p className="scroll__vertical">SCROLL DOWN</p>
                </div>
                <div className="socials">
                    <a href="instagram.com/nike/" >
                        <img src={instagram} alt="" />
                    </a>
                    <a href="">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="">
                        <img src={facebook} alt="" />
                    </a>
                </div>
        </section>
    )
}
