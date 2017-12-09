import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../reducers/product';
import { getItems } from '../reducers/cart'

const mapStateToProps = (state, props) => {
	// console.log(getItems(state , props));
	// console.log(getProducts(state, props));
    return {
        products: getProducts(state, props),
    }
}

export default connect(mapStateToProps)(ProductList);
