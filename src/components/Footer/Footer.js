import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const footer = (props) => {
    return (
        <footer>
            <section>
                &copy;{" "}
                <a className="creator" href="https://anik7303.github.io">
                    <span className="name">Anik Mohammad</span>
                </a>
            </section>
            <section>
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </section>
        </footer>
    );
};

export default footer;
