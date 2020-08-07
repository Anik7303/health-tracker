import React from "react";

import "./NavigationList.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationList = (props) => {
    return (
        <ul className="nav-list">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/signin">Sign In</NavigationItem>
            <NavigationItem link="/signup">Sign Up</NavigationItem>
            {/* User Profile (Icon + Dropdowm) */}
        </ul>
    );
};

export default navigationList;
