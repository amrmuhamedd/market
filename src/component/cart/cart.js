import React from 'react'
import {connect} from 'react-redux';
import CartItem from './cartItem/cartItem';
import {Container}  from 'react-bootstrap';
import classes from './cart.module.css';
import * as action from '../../store/actions/index'
const cart= (props) =>  {
        const cartItems = props.cartItems.length > 0 ?  props.cartItems.map(cartItem  => {
            return <CartItem 
             key = {cartItem.id} 
             item = {cartItem} 
             increment = {() => props.onIncrement(cartItem.id)}
             decrement = {() => props.onDecrement(cartItem.id)}
             remove = {() => props.onRemove(cartItem.id)}
             />   
        }) : <div className ={classes.empty}> you didn't add any product to cart </div>
        return (
        <div className ={classes.cart}>
                 <Container>
                 <h4 className ={classes.header}> your cart </h4>
               { cartItems }
               
               {props.cartItems.length > 0 ? <div className = {classes.clear}>
                <h3> <strong>total : </strong>{props.total}</h3>
                <button className = 'btn btn-primary' onClick= {props.onClear}> clear cart </button>
               </div>  : '' }
               </Container>
        </div>
        )
};



const mapDispatchToProps = dispatch => {
    return {
        onIncrement : (id) => dispatch(action.incrementItem(id)),
        onDecrement : (id) => dispatch(action.decrementItem(id)),
        onRemove : (id) => dispatch(action.removeItem(id)),
        onClear : () =>  dispatch(action.clearCart()),
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems : state.cart.cart,
        total: state.cart.totalPriceOfCart
    };
};
export default connect(mapStateToProps , mapDispatchToProps) (cart)