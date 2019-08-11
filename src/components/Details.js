import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-4 my-1">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-8 my-3">
                  <h4 className="text-title text-muted mt-3 mb-2">
                    made by: <span className="text-capitalize">{company}</span>
                  </h4>
                  <h4 className="text-blue"><strong>price: <span>⍎</span>{price}</strong></h4>
                  <p className="text-muted lead">{info}</p>


                  <div>
                    <Link to='/'><button>Back to Shopping</button></Link>

                    <button disable={inCart ? 'true' : "false"}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                    {inCart ? 'in your cart' : 'add to cart'}</button>
                  </div>

                </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}

export default Details
