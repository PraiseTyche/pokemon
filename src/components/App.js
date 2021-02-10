import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import PokemonList from "../containers/PokemonList";
import About from "./about/About";
import Favorite from "./favorite/Favorite";
import HomePage from "../pages/Homepage";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={HomePage} exact></Route>
        <Route path={"/about"} exact component={About}></Route>
        <Route path={"/favorite"} exact component={Favorite}></Route>
        {/* <Route path={"/pokemon/:pokemon"} exact component={Pokemon}></Route> */}
        <Redirect to={"/"}></Redirect>
      </Switch>
    </>
  );
};

export default App;
