import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;

          if (!modalOpen) {
            return null
          } else {
            return <div className="modalContainer">
              <div className="modalBody">
                <h5>Item added to the cart</h5>
                <img src={img} className="img-fluid" alt="product" />
                <h5 className="mb-1">{title}</h5>
                <h5 className="text-muted mb-1">price: ⍎ {price}</h5>
                <Link to="/"><button onClick={closeModal} className="btn btn-secondary">Continue Shopping</button></Link>
                <Link to="/cart"><button onClick={closeModal} class="btn btn-dark">Go to Cart</button></Link>
              </div>
            </div>
          }
        }}
      </ProductConsumer>
    )
  }
}

export default Modal
