import { combineReducers, createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/product';
import cartReducer from '../reducers/cart';
import productsData from '../json';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    products: productsReducer,
    cart : cartReducer,
    routing: routerReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData,
        cart:{
        	items:[]
        }
    },
    applyMiddleware(thunk)
);

store.subscribe(()=>{
	
})

export default store;