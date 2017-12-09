import React , { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const cartTotal = (props) => {
	return (
		<div>
			<p class="total_text">Total</p>
			<p>
				<span className="item_key">Items({props.totalItems}) :</span>  
				<span className="item_value">${props.actualTotal}</span></p>
			<p>	
				<span className="item_key">Discount :</span>  
				<span className="item_value"> ${props.totalDiscount} </span>
			</p>
			<p>
				<span className="item_key">Fiction Discount :</span>  
				<span className="item_value">${props.totalFicDis}</span></p>
			<p>
				<span className="item_key">Order Total :</span>	
				<span className="item_value">${props.totalPrice}</span>
			</p>
		</div>
	)
}


cartTotal.propTypes = {
 
};

cartTotal.defaultProps = {
  
};

export default cartTotal;
