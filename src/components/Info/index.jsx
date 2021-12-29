import React from 'react';
import sneaker from "../../img/Air Edge 270.png";

import './index.scss';

export const Info = () => {
    return (
        <div className="info">
                <section className="section section_item">
                    <h2 className="item__classification">
                        MEN'S SHOE
                    </h2>
                    <h1 className="item__name">NIKE AIR EDGE 270</h1>
                    <p className="item__text">
                        The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.
                    </p>
                </section>
                <section className="section section_photo">
                    <img src={sneaker} alt="" className="item__photo" />
                </section>
                <section className="section section_pick">
                    <div className="section__size">
                        <h2 className="item__classification">SELECT SIZE</h2>
                        <div className="item__sizepick">
                            <div className="item__size">
                                <input type="radio" id="size8" class="item__size__input" />
                                <label for="size8" className="item__size_number">8</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size8.5" class="item__size__input" />
                                <label for="size8.5" className="item__size_number">8.5</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size9" class="item__size__input" />
                                <label for="size9" className="item__size_number">9</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size9.5" class="item__size__input" />
                                <label for="size9.5" className="item__size_number">9.5</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size10" class="item__size__input" />
                                <label for="size10" className="item__size_number">10</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size10.5" class="item__size__input" />
                                <label for="size10.5" className="item__size_number">10.5</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size11" class="item__size__input" />
                                <label for="size11" className="item__size_number">11</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size11.5" class="item__size__input" />
                                <label for="size11.5" className="item__size_number">11.5</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size12" class="item__size__input" />
                                <label for="size12.5" className="item__size_number">12</label>
                            </div>
                            <div className="item__size">
                                <input type="radio" id="size12.5" class="item__size__input" />
                                <label for="size12.5" className="item__size_number">12.5</label>
                            </div>
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
    )
}
