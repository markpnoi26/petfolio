import React from 'react'
import {connect} from 'react-redux'
import MainNavBar from '../components/MainNavBar'

class ApplicationContainer extends React.Component {

  render() {
    return(
      <React.Fragment>
        <MainNavBar logOut={this.props.logOut} />
        <h1>You have Successfully Logged in!</h1>
      </React.Fragment>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: "LOG_OUT"})
  }
}

export default connect(null, mapDispatchToProps)(ApplicationContainer)
