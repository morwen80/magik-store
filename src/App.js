import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Index'
import Details from './components/Details';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/' component={ProductList} exact />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
