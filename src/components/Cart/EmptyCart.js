import React, {Component} from 'react';

class EmptyCart extends Component {
  render() {
    return (
      <div className="container emptyCart">
          <h3 className="text-title">No items in your cart</h3>
      </div>
    )
  }
}

export default EmptyCart
