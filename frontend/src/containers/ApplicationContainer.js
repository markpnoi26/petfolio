import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import MainNavBar from '../components/MainNavBar'
import AllOwnersCard from '../components/AllOwnersCard'
import AllPetsCard from '../components/AllPetsCard'
import CurrentPetPage from '../components/CurrentPetPage'
import CurrentUserPage from '../components/CurrentUserPage'


class ApplicationContainer extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <MainNavBar logOut={this.props.logOut} />

          <Route exact path="/" render={ routerProps => <CurrentUserPage {...routerProps} currentUser={this.props.currentUser}/>} />

          <Route exact path="/users" render={() => <AllOwnersCard />} />

          <Route exact path="/pets" render={() => <AllPetsCard />} />

        </div>
      </Router>
    )
  }ee

}


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: "LOG_OUT"})
  }
}

const mapStateToProps = state => {
  return {
    allPets: state.allPets,
    allUsers: state.allUsers,
    currentlyLoggedIn: state.currentlyLoggedIn,
    currentPets: state.currentPets,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer)
