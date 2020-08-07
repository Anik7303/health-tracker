import React, { Fragment } from "react";

import "./Home.scss";
import Hero from "./Hero/Hero";
import About from "../About/About";

const Home = (props) => {
    return (
        <Fragment>
            <Hero />
            <About showless />
        </Fragment>
    );
};

export default Home;
