import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">

        <Link to='/'>
          <i className="fas fa-hat-wizard navbar-brand"></i> The Wicked Witch
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className='nav-item ml-5'>
            <Link to='/' className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" /> my cart</button>
        </Link>
      </nav>
    )
  }
}

export default Navbar
