import React from 'react'
import LogInCard from '../components/LogInCard'
import SignUpCard from '../components/SignUpCard'

export default class LogInContainer extends React.Component {

  render() {
    return(
      <div>
        <LogInCard />
        <SignUpCard />
      </div>
    )
  }

}
