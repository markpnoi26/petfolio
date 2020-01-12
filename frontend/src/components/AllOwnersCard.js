import React from 'react'
import {Link} from 'react-router-dom'

export default class AllOwnersCard extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <ul>
        {this.props.users.map(user => <li><Link key={user.id} to={`users/${user.id}`}>{user.name}</Link></li>)}
      </ul>
    )
  }

}
