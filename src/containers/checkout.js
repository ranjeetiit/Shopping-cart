import { connect } from 'react-redux';
import Checkout from '../components/checkout';
import { getProducts } from '../reducers/product';
import { getItems } from '../reducers/cart';
import { updateItem } from '../actions';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
        cart : state.cart || {items : []}
    }
}


const mapDispatchToProps = (dispatch) => ({
    updateItem : (type , id) => dispatch(updateItem(type , id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);