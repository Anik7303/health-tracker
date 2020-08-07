import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Signup.scss";

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                break;
            default:
                throw new Error("inputHandler - unknown input selected");
        }
    };

    return (
        <form className="signup-form" autoComplete="off">
            <input
                className="form-item"
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="username (must be 5 characters or more)"
                onChange={inputHandler}
            />
            <input
                className="form-item"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="email address"
                onChange={inputHandler}
            />
            <input
                className="form-item"
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="password (must be 8 characters or more)"
                onChange={inputHandler}
            />
            <input
                className="form-item"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="password (must be 8 characters or more)"
                onChange={inputHandler}
            />
            <button className="btn btn-primary">Sign up</button>
            <Link className="btn btn-alternate" to="/signin">
                Already have an account?
            </Link>
        </form>
    );
};

export default Signup;
