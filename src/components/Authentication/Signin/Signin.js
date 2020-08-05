import React from "react";

import "./Signin.css";

const signin = (props) => {
    return (
        <section>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <button className="btn btn-submit">Sign In</button>
        </section>
    );
};

export default signin;
