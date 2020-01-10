import React from 'react'

export default class SignUpCard extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  nameHandler = event => {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  emailHandler = event => {
    // console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  passwordHandler = event => {
    // console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  confirmationHandler = event => {
    // console.log(event.target.value)
    this.setState({
      passwordConfirmation: event.target.value
    })
  }

  onSubmitHandler = event => {
    event.preventDefault()
    console.log("Signing Up")
    // call dispatch to log in
    this.setState({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.onSubmitHandler}>
        name:
        <input type="text" value={this.state.name} onChange={this.nameHandler}/>
        <br/>
        email:
        <input type="text" value={this.state.email} onChange={this.emailHandler}/>
        <br/>
        password:
        <input type="password" value={this.state.password} onChange={this.passwordHandler}/>
        <br/>
        password confirmation:
        <input type="password" value={this.state.passwordConfirmation} onChange={this.confirmationHandler}/>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}
