import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
//
//         <Link to='/'>
//           <i className="fas fa-hat-wizard navbar-brand"></i> The Wicked Witch
//         </Link>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//
// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//
//         <ul class="navbar-nav mr-auto">
//
//           <li className='nav-item ml-5'>
//             <Link to='/' className="nav-link">
//               Products
//             </Link>
//           </li>
//         </ul>
//
//         <form class="form-inline my-2 my-lg-0">
//         <Link to="/cart" className="ml-auto">
//           <button className="btn btn-light cartBtn">
//             <i className="fas fa-cart-plus" /> my cart</button>
//         </Link>
//         </form>
//         </div>
//       </nav>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to='/'>
        <i className="fas fa-hat-wizard navbar-brand"></i> The Wicked Witch
      </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to='/' className="nav-link">
                Products
              </Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
             <button className="btn btn-light cartBtn"><i className="fas fa-cart-plus" /> my cart</button>
          </form>
        </div>
      </nav>






    )
  }
}

export default Navbar
