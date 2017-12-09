import React , { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import ProductList from '../containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="">
                    <h1>All Items</h1>
                    <button><Link to="/checkout">Go To Checkout</Link></button>
                </div>
            </div>
            <div className="row">
                <div className="">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

App.propTypes = {
 
};

App.defaultProps = {
  
};

export default App;
