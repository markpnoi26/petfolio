import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

const hist = createBrowserHistory();

export default class App extends React.Component {

  render() {
    return(
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    )
  }
}

// const mapStateToProps = state => {
//   return{
//     currentlyLoggedIn: state.currentlyLoggedIn
//   }
// }
//
// export default connect(mapStateToProps)(App)
