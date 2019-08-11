import React from 'react';
import { Link } from 'react-router-dom'

export default function CartTotals({value}){
  const {cartSubtotal, cartTax, cartTotal, clearCart} = value
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-1 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
              className="btn btn-dark text-uppercase mb-3 px-3"
              type="button" onClick={ () => {clearCart()}}>clear cart</button>
            </Link>
            <div className="subs">
              <h5>
                <span>subtotal: </span> ⍎ {cartSubtotal}
              </h5>

              <h5>
                <span>tax: </span> ⍎ {cartTax}
              </h5>

              <h5>
                <span>total: </span>⍎ {cartTotal}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
