import * as actionType from './actionTypes'
export const addToCart = (id) => {
    return {
        type  : actionType.ADD_TO_CART,
        id : id
    }
}
export const removeItem = (id) => {
    return {
        type  : actionType.REMOVE_ITEM,
        id : id
    }
}
export const incrementItem = (id) => {
    return {
        type  : actionType.INCREMENT_ITEM,
        id : id
    }
}
export const decrementItem = (id) => {
    return {
        type  : actionType.DECREMENT_ITEM,
        id : id
    }
}
export const clearCart = () => {
    return {
        type  : actionType.CLEAR_CART,
    }
}