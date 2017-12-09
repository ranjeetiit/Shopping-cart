import { connect } from 'react-redux';
import Checkout from 'Components/checkout';
import { getProducts } from 'Reducers/product';
import { getItems } from 'Reducers/cart';
import { removeFromCart , updateItem } from 'Actions';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
        cart : state.cart || {items : []}
    }
}


const mapDispatchToProps = (dispatch) => ({
	removeFromCart :(id) => dispatch(removeFromCart(id)), 
    updateItem : (type , id) => dispatch(updateItem(type , id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);