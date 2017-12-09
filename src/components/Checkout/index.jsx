import React , { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import CartListItem from './CartList';
import CratTotal from './cartTotal';
import { Link } from 'react-router-dom'

class Checkout extends Component{
    updateItem = (type, id) => {
        this.props.updateItem(type , id);
    }

    removeFromCart = (id)=>{
        this.props.removeFromCart(id);
    }
    handleUpdateItem = (type, id)=> {
        this.updateItem(type , id);
    }

    remoItemFromCart = (id) =>{
        this.removeFromCart(id);
    }

    render(){
        const {products , cart} = this.props;
        let totalItems = 0;
        let totalPrice = 0;
        let totalDiscount = 0;
        let actualTotal = 0;
        let totalFicDis = 0;
        let productHash = products.reduce((prev , curr)=>{
            prev[curr.id] = curr;
            return prev;
        },{})
        
        let items = cart.items.map((item)=>{
            item.detail = productHash[item.id];
            totalItems = totalItems + item.qty;
            let discount = (item.qty * item.detail.price*item.detail.discount/100);
            let ficDis = 0;
            if(item.detail.type == "fiction"){
                ficDis = (item.qty * item.detail.price*15/100);
                totalFicDis = totalFicDis + ficDis;
            }

            let total = (item.qty * item.detail.price);
            totalDiscount = totalDiscount + discount;
            actualTotal =  actualTotal + total;
            totalPrice = totalPrice +  (total - discount- ficDis);
            return item;
        })


        return (
            <div className="container">
                <div className="row">
                    <div className="">
                        <h1><Link to="/"> &lt; &lt; Back </Link>&nbsp; &nbsp; &nbsp; Order Summary</h1>
                    </div>
                    <div className="checkoutCont">
                        <ul className="cart-list">
                            <li className="cart-list-item">
                                <div>
                                    <span className = "item_name">Items</span>
                                    <span className = "item_qty">Qty</span>
                                    <span className = "item_price">Price</span>
                                </div>
                            </li>
                          {items.map(item => (
                              <li key={item.id} className="cart-list-item">
                                <CartListItem  
                                    list = {item}
                                    updateItem = { this.handleUpdateItem }
                                    removeFromCart = {this.remoItemFromCart}
                                />
                              </li>
                          ))}
                        </ul>
                        <div className= "crat_Total_cont">
                            <CratTotal 
                                totalItems = { totalItems }
                                totalPrice = { totalPrice }
                                totalDiscount = { totalDiscount }
                                actualTotal = { actualTotal }
                                totalFicDis = { totalFicDis }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


Checkout.propTypes = {
    products : PropTypes.array,
    cart: PropTypes.shape({
        items : PropTypes.array
    })
};

Checkout.defaultProps = {
  products : [],
  cart :{
    items : []
  }
};

export default Checkout;
