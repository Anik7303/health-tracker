import React from "react";

import "./Menubar.scss";
import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";

const Menubar = (props) => {
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

export default Menubar;
