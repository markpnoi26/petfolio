import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import MainNavBar from '../components/MainNavBar'
import AllOwnersCard from '../components/AllOwnersCard'
import AllPetsCard from '../components/AllPetsCard'
import CurrentPetPage from '../components/CurrentPetPage'
import CurrentUserPage from '../components/CurrentUserPage'

// async actions
import getAllPets from '../async-actions/getAllPets'
import getAllUsers from '../async-actions/getAllUsers'
import deletePet from '../async-actions/deletePet'
import addPet from '../async-actions/addPet'

class ApplicationContainer extends React.Component {

  componentDidMount() {
    this.props.getAllPets()
    this.props.getAllUsers()
  }

  render() {
    return(
      <Router>
        <div>
          <MainNavBar logOut={this.props.logOut} />
          <Route exact path="/" render={ routerProps => {
            return(
              <CurrentUserPage {...routerProps}
                currentUser={this.props.currentUser}
                addPet={this.props.addPet}
                deletePet={this.props.deletePet}
              />
            )
          }} />

          <Route exact path="/users" render={ routerProps => <AllOwnersCard {...routerProps} />} />

          <Route exact path="/pets" render={routerProps => <AllPetsCard {...routerProps}/>} />

        </div>
      </Router>
    )
  }ee

}


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: "LOG_OUT"}),
    addPet: user_id => dispatch(addPet(user_id)),
    deletePet: id => dispatch(deletePet(id)),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllPets: () => dispatch(getAllPets())
  }
}

const mapStateToProps = state => {
  return {
    allPets: state.allPets,
    allUsers: state.allUsers,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer)
