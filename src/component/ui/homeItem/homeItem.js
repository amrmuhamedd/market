import React from 'react'
import Aux from '../../../hoc/Auxe/aux';
import {Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom' 
import classes from './productItem.module.css';
import {connect} from 'react-redux';
import * as action from '../../../store/actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus
} from '@fortawesome/free-solid-svg-icons';
 
export const productIteme = (props) => {
    const handleAddToCart = () => {
        props.onAddToCart(props.product.id);
        props.openModal(<div> <h3> you added item to cart </h3> <NavLink to = '/cart' className ="btn btn-outline-success"> go to cart</NavLink> </div>);
        setTimeout(()=> {props.closeModal()}, 2000)
    }
    return (
        <Aux>
                        <Card className = {classes.product}>
                            <div className = {classes.img}>
                            <Card.Img variant="top" src={props.product.img.master} />
                            </div>
                            <Card.Body>
                                <Card.Title>{props.product.title}</Card.Title>
                                <div className = {classes.price} style ={{textDecoration : props.product.hasOver ? 'line-through' : 'none'}}><strong>price : </strong>{props.product.price}</div> 
            {props.product.hasOver ? <div className = {classes.price}><strong>new price : </strong>{props.product.newPrice}</div>  : null }
                                 <div className= {classes.overlay} >
                                 <NavLink to = {'/' + props.product.id} className = {classes.btn + ' btn'}> some details </NavLink>
                                 <FontAwesomeIcon icon = {faCartPlus} className = {classes.icon} onClick ={handleAddToCart}/>
                                 </div>
                              {   props.product.hasOver ? <div className = {classes.discount}>
                                     {props.product.discount} %
                                 </div> : null} 
                         </Card.Body>
                        </Card>
        </Aux>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart : (id) => dispatch(action.addToCart(id)),
        openModal : (message) => dispatch(action.openModal(message)) ,
        closeModal : () => dispatch(action.closeModal())
    }
}



export default connect(null, mapDispatchToProps)(productIteme)
