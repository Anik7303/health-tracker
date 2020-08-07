import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Signin.scss";

const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                throw new Error(
                    "inputChangeHanlder - unexpected target selected!"
                );
        }
    };

    return (
        <form className="signin-form" autoComplete="off">
            <input
                className="form-item"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={inputChangeHandler}
            />
            <input
                className="form-item"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={inputChangeHandler}
            />
            <button className="btn btn-primary">Sign In</button>
            <p>
                Don't have an account? -
                <Link className="btn btn-alternate" to="/signup">
                    Create a new account
                </Link>
            </p>
        </form>
    );
};

export default Signin;
