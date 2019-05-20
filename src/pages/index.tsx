import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "components/NavBar";
import Footer from "components/Footer";

import Blank from "components/Blank";
import Grid from "components/Grid";
// import List from "components/List";
// import MasterDetail from "components/Master_Detail";

function Index() {
  return (
    <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Blank" />
          < Route path = "/Blank" component = { Blank } />
          < Route path = "/Grid" component = { Grid } />
          {/* < Route path = "/List" component = { List } /> */}
          {/* < Route path = "/Master_Detail" component = { MasterDetail } /> */}
        </Switch>
        <Footer />
      </React.Fragment>
  )
}

export default Index;