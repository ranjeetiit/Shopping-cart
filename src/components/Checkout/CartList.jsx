import React , { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const CheckoutList = (props) => {
	const { detail , qty} =props.list
	let price  =  (detail.price  - (detail.price*detail.discount/100));
	if(detail.type ==  "fiction"){
		price = price - (detail.price*15/100);
	}
    return (
        <div>
           	<span className = "item_name">{detail.name}</span>
	        <span className = "item_qty">{qty}</span>
	        <span className = "item_price">${price}</span>
        </div>
    );
}


CheckoutList.propTypes = {
 
};

CheckoutList.defaultProps = {
  
};

export default CheckoutList;