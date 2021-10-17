import React from "react";
import { Switch, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import MyCv from "./pages/MyCv";
import MyOffer from "./pages/offer/MyOffer";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/experience/Experience";

function Router() {
  return (
    <div className="w-full  lg:mt-0 lg:w-9/12 text-black bg-gray-50 p-4 lg:p-9">
      <Switch>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route  path="/experience">
          <Experience />
        </Route>
        <Route exact path="/mycv">
          <MyCv />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/myoffer">
          <MyOffer />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
