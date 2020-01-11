import React from 'react'
import LogInCard from '../components/LogInCard'
import SignUpCard from '../components/SignUpCard'
import {connect} from 'react-redux'

class LogInContainer extends React.Component {

  render() {
    return(
      <div>
        <LogInCard logIn={this.props.logIn} />
        <SignUpCard logIn={this.props.logIn} />
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch({type: "LOG_IN"})
  }
}

export default connect(null, mapDispatchToProps)(LogInContainer)
