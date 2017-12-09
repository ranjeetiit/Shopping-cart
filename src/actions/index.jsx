import { CART_ADD , CART_REMOVE, CART_UPDATE} from '../constants';

export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function updateItem(type,productId){
    return{
        type : CART_UPDATE,
        payload : {
            productId,
            type
        }
    }
}