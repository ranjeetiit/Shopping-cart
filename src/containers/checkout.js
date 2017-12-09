import { connect } from 'react-redux';
import Checkout from '../components/checkout';
import { getProducts } from '../reducers/product';
import { getItems } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
        cart : state.cart || {items : []}
    }
}

export default connect(mapStateToProps)(Checkout);