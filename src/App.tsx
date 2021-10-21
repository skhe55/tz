import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import './Styles/global.scss';

export const App: React.FC<{}> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Profile" component={Profile} />
            </Switch>
        </Router>
    );
};