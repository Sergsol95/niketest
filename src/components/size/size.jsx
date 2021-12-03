import React from "react";
import index from "./indexs.scss";


function Size () {
    return (
        <div className="size">
            <h2 className="size__title">SELECT SIZE (US)</h2>
            <div className="size__picker">
                <div className="size__number">8</div>
                <div className="size__number">8.5</div>
                <div className="size__number">9</div>
                <div className="size__number">9.5</div>
                <div className="size__number">10</div>
                <div className="size__number">10.5</div>
                <div className="size__number">11</div>
                <div className="size__number">11.5</div>
                <div className="size__number">12</div>
                <div className="size__number">12.5</div>
            </div>
        </div>
    )
}

export default Size;