import React from 'react';
import './App.css';

class App extends React.Component {

  const renderCondition = () => {
    if (this.props.currentlyLoggedIn === true) {
      return <h1>I am in the app Now </h1>
    } else {
      return <h1>I am the login Page </h1>
    }
  }

  render(){
    return (
      {this.renderCondition()}
    );
  }

}

const mapStateToProps = state => {
  return{
    currentlyLoggedIn: state.currentlyLoggedIn
  }
}

export default connect(mapStateToProps)(App)
