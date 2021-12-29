import React, { useState } from "react";
import { Footer } from "../Footer";
import { Info } from "../Info";
import { Socials } from "../Socials";

import './index.scss';
import { Header } from "../Header";


function Body() {

    return (
        <body className="body">
            <Header />
            <Info />
            <Socials />
            <Footer />
        </body>
    )
}

export default Body;