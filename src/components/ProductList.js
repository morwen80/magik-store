import React, {Component} from 'react';
import Product from './Product';
// import {storeProducts} from '../data'
import {ProductConsumer} from '../context';

class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <h1 className="text-title">Our Products</h1>
            <div className="row">
              <ProductConsumer>
              {value => {
                return value.products.map( product => {
                  return <Product key={product.id} product={product} />
                })
              }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList
