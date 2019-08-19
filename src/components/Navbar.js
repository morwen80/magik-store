import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
      <Link to='/'>
        <i className="fas fa-hat-wizard navbar-brand"></i> The Wicked Witch
      </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item ml-3">
              <Link to='/' className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <Link to="/cart" className="ml-auto">
             <button className="btn btn-light cartBtn"><i className="fas fa-cart-plus" /> my cart</button>
             </Link>
          </form>
        </div>
      </nav>

    )
  }
}

export default Navbar
