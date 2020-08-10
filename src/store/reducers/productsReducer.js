import {products} from '../productsData';

const initState = {
    products : products,
}

const productReducer = (state  =  initState , action) => {
switch (action.type) {
    default:
        return state;   
}
}

export default productReducer;