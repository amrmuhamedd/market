import {products} from '../productsData';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/uitility';

const initState = {
    products : products,
    cart : [],
    totalPriceOfCart : 0,
    
}

const addToCart = (state , action) => {
    let addedItem = state.products.find(product => product.id === action.id);
    let existedItem = state.cart.find(item => item.id === action.id);
    addedItem.quantity  += 1;
    addedItem.total += addedItem.newPrice
    if (existedItem){
        return updateObject(state , {
            totalPriceOfCart : state.totalPriceOfCart + addedItem.newPrice
        })
    } else {
        const updatedCart = [...state.cart , addedItem];
        const updatedstate = {
            cart : updatedCart,
            totalPriceOfCart : state.totalPriceOfCart + addedItem.newPrice
        }
    return updateObject(state , updatedstate)
    }
    

}
const removeItem = (state , action) => {
    let itemToRemove= state.cart.find(item=> action.id === item.id);
    let new_items = state.cart.filter(item=> action.id !== item.id);
    itemToRemove.quantity = 0;
    let newTotal = state.totalPriceOfCart - itemToRemove.total;
    itemToRemove.total = 0
    return{
        ...state,
        cart : new_items,
        totalPriceOfCart : newTotal
    }
}
const decrement = (state , action) => {
    let addedItem = state.products.find(item=> item.id === action.id);
    if(addedItem.quantity === 1){
        let new_items = state.cart.filter(item=>item.id !== action.id);
        addedItem.quantity = 0;
        let newTotal = state.totalPriceOfCart - addedItem.total;
        addedItem.total = 0
        return{
            ...state,
            cart : new_items,
            totalPriceOfCart: newTotal
        }
    }
    else {
        addedItem.quantity -= 1 ;
        addedItem.total = addedItem.quantity *  addedItem.newPrice;
        let newTotal = state.totalPriceOfCart - addedItem.newPrice;
        return{
            ...state,
            totalPriceOfCart: newTotal
        }
    }
}
const increment = (state , action) => {
    let addedItem = state.products.find(item=> item.id === action.id)
    addedItem.quantity += 1 ;
    addedItem.total = addedItem.quantity *  addedItem.newPrice;
    let newTotal = state.totalPriceOfCart + addedItem.newPrice;
    return{
        ...state,
        totalPriceOfCart: newTotal
    }
}
const clearCart = (state , action) => {
    for(let product in state.products){
        state.products[product].quantity = 0;
        state.products[product].total = 0
    }
    return updateObject(state , {
        cart : [],
        totalPriceOfCart : 0
    })
}
const cartReducer = (state  =  initState , action) => {
switch (action.type) {
    case actionTypes.ADD_TO_CART : return addToCart(state , action);
    case actionTypes.INCREMENT_ITEM : return increment(state , action);
    case actionTypes.DECREMENT_ITEM : return decrement(state , action);
    case actionTypes.REMOVE_ITEM : return removeItem(state , action);
    case actionTypes.CLEAR_CART : return clearCart(state , action);
    default:
        return state;   
}
}

export default cartReducer;