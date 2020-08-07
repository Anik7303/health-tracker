import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.scss";

const navigationItem = (props) => {
    return (
        <li className="nav-list__item">
            <NavLink exact to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default navigationItem;
