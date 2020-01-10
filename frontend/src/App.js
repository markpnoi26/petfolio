import React from "react";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import LogInContainer from './containers/LogInContainer'

// pages for this product
// import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

// const history = createBrowserHistory();

export default class App extends React.Component {

  render() {
    return(
      <LogInContainer />
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


// <Router history={history}>
//   <Switch>
//     <Route path="/landing-page" component={LandingPage} />
//     <Route path="/profile-page" component={ProfilePage} />
//     <Route path="/login-page" component={LoginPage} />
//     <Route path="/" component={Components} />
//   </Switch>
// </Router>
