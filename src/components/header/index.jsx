import React from 'react';
import nikeLogo from "../../img/nike-logo.svg";
import Sidebar from "../Sidebar";
import { DesktopNavigation } from '../DesktopNavigation';
import { Purchase } from "../Purchase";

import './index.scss';

export const Header = () => {
    return (
        <header className="header">
                <div>
                    <a href="">
                        <img src={nikeLogo} alt="" className="logo" />
                    </a>
                </div>
                <DesktopNavigation />
                <Sidebar />
                <Purchase />
        </header>
    )
}
