import { connect } from 'react-redux';
import ProductList from 'Components/ProductList';
import { getProducts } from 'Reducers/product';
import { getItems } from 'Reducers/cart'

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
    }
}

export default connect(mapStateToProps)(ProductList);
