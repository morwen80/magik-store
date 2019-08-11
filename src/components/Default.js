import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Default extends Component {
  render() {
    return (
      <div className="notFound container">
      <h1 className="text-title">Page Not Found</h1>
      <img src={process.env.PUBLIC_URL + '/img/404-witch.png'}
      className="img-fluid d-block"
      alt="page not found"/>
      <p>Lost your way? Do not dispair.
      <br /> <Link to='/'>Click here</Link> to go back home.</p>
      </div>
    )
  }
}

export default Default
