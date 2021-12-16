import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "../Components/Cadastro/Cadastro";
import Home from "../Components/Home/Home";








export const goToHome = (history) => {
    history.push("/")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}






const Router = () => {

    return (
        <BrowserRouter>

            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/cadastro">
                    <Cadastro />
                </Route>

                

            </Switch>
        </BrowserRouter>
    )
}

export default Router;