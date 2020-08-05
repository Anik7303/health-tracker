import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

const element = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
