import React from "react";

import "./Menubar.css";
import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";

const menubar = (props) => {
    return (
        <header>
            {/* Website Logo */}
            <Logo />
            <nav className="main-nav">
                <NavigationList />
            </nav>
        </header>
    );
};

export default menubar;
