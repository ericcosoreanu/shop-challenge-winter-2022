import React from "react";
import {Switch, Route} from "react-router-dom";
import home from "../views/home/home";

const Routes = () => {
    return (
        <Switch>
            <Route path={"/"}  exact component={home}/>
        </Switch>
    );
};

export default Routes;