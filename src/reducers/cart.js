import { getProduct } from './product';
//import store from '../store/store';
import { CART_ADD , CART_REMOVE} from '../constants';
// reducer
const initialState = {
    items: [], // array of product ids
};


export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}



function handleCartAdd(state, payload) {
	let id= payload.productId;
	let newState = {...state}.items;
	let ifAlreadyExist =  false, idx = 0;
	for(let i =0 , len = newState.length; i < len ; i++){
		if(newState[i].id == id){
			idx = i;
			ifAlreadyExist = true
			break;
		}
	}
	if(ifAlreadyExist){
		newState[idx].qty ++ 
	}else{
		let item = {
			id : id,
			qty : 1
		}
		newState.push(item);
	}
    return {
        ...state,
        items: newState
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}


export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}