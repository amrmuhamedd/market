import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer'
import uiReducer from './uiReducer'
const rootReducer = combineReducers({
    cart : cartReducer,
    products : productsReducer,
    ui: uiReducer
})


export default rootReducer;