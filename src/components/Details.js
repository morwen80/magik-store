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
            <div className="container productDetails">

              <div className="row">
                <div className="col-10 mx-auto col-md-5 my-1 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-7 my-3">
                  <h4 className="text-title text-lg-left mt-3 mb-2">{title}</h4>

                  <h5 className="text-lg-left mt-3 mb-2">{company}</h5>
                  <hr />
                  <h5><strong>⍎ {price}</strong></h5>
                  <p className="text-muted lead">{info}</p>


                  <div>
                    <Link to='/'><button className="btn btn-secondary">Back to Shopping</button></Link>

                    <button class="btn btn-info" disable={inCart ? 'true' : "false"}
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
