import { connect } from 'react-redux';
import Product from 'Components/Product';
//import { isInCart } from '../reducers/cart';

import { addToCart } from 'Actions'

const mapStateToProps = (state, props) => {
    return {
    	
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
