import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import MainPage from "./Pages/MainPage";
import MintPage from "./Pages/MintPage";

import NotFound from "./Pages/NotFound";

/** All routes of website along with a catch all route to display a not found route */

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
