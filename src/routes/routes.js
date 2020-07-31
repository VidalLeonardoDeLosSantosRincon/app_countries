import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

//components
import App from "../components/App";

//pages
import Home from "../pages/Home";
import Maps from "../pages/Maps";

const AppRoutes = ()=>{
    return(
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Maps}/>
                    <Route exact path="/home" component={Maps}/>
                    <Route exact path="/map" component={Maps}/>
                </Switch>
            </App>
        </Router>   
    );
};

export default AppRoutes;

