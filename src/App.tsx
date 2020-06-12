import React from 'react';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <Switch>
                <Route component={TodosPage} path={"/"} exact/>
                <Route component={AboutPage} path={"/about"}/>
            </Switch>

            <div className={"container"}>
            </div>
        </BrowserRouter>
    );
}

export default App;



