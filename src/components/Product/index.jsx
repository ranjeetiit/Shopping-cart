import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart } = this.props;
        addToCart(id);
        //alert("product successfully added");
        Alert.success('<h3 class="productAddNotify">Product successfully added ...</h1>', {
            html: true,
            position: 'top-right'
        });
    }

    render() {
        const { name, price, currency, img_url,discount } = this.props;
        return (
            <div className="product thumbnail">
                <div className="imgContainer">
                    {
                        discount ?
                            <div className="discountBanner">
                                {discount}% off 
                            </div> 
                            :
                            "" 
                    }
                    <img src={img_url} alt="Image PlaceHolder" />
                </div>
                <div className="productDescBanner">
                    <div className="productName">
                        <p>{name}</p>
                    </div>
                    <div className="productAddContainer">
                        <div className="product__price">
                            {
                                discount ? 
                                    <span>  
                                        <span className="totalPrice">${price}</span> 
                                        <span> &nbsp;</span> 
                                    </span>
                                    :
                                    ""
                            }
                           
                            <span className="actualPrice">${price- (price*discount/100)}</span>
                        </div>
                        <div className="addCartBtn">
                            <button
                                onClick={this.handleClick}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    //isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    //removeFromCart: PropTypes.func.isRequired,
}

export default Product;
