import React from 'react'

export default class LogInCard extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  emailOnChangeHandler = event => {
    // console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  passwordOnChangeHandler = event => {
    // console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  onSubmitHandler = event => {
    event.preventDefault()
    console.log("Logging In")
    // call dispatch to log in
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.onSubmitHandler}>
        email:
        <input type="text" value={this.state.email} onChange={this.emailOnChangeHandler}/>
        <br/>
        password:
        <input type="password" value={this.state.password} onChange={this.passwordOnChangeHandler}/>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}
