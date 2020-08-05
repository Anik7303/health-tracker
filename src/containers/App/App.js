import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Layout from "../../hoc/Layout/Layout";

function App() {
    return (
        <Router basename="/">
            <Layout />
        </Router>
    );
}

export default App;
