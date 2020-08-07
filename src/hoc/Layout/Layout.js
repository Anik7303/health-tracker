import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./Layout.scss";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Menubar from "../../components/Navigation/Menubar/Menubar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import Signin from "../../containers/Authentication/Signin/Signin";
import Signup from "../../containers/Authentication/Signup/Signup";

const layout = (props) => {
    return (
        <Fragment>
            {/* Menubar */}
            <Menubar />
            {/* Sidebar */}
            {/* <Sidebar /> */}
            {/* Main section */}
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route
                        exact
                        path="/terms-and-conditions"
                        component={TermsAndConditions}
                    />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Redirect to="/" />
                </Switch>
            </main>
            {/* Footer */}
            <Footer />
        </Fragment>
    );
};

export default layout;
