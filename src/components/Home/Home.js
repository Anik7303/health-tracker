import React, { Fragment } from "react";

import "./Home.css";
import Hero from "./Hero/Hero";
import About from "../About/About";

const home = (props) => {
    return (
        <Fragment>
            <Hero />
            <About showless />
        </Fragment>
    );
};

export default home;
