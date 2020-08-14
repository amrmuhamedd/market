import React from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-bootstrap'
import classes from './product.module.css';
import {NavLink} from 'react-router-dom'
import Spinner from '../../ui/spinner/spinner'
import * as action from '../../../store/actions/index'
const product = (props) => {
    const handleAddToCart = () => {
        props.onAddToCart(props.product.id);
        props.openModal(<div> <h3> you added item to cart </h3> <NavLink to = '/cart' className ="btn btn-outline-success"> go to cart</NavLink> </div>);
        setTimeout(()=> {props.closeModal()}, 3000)
    }
    const product = props.product ? (
        <div  className ={classes.product + ' page'}>
                <div className= {classes.card}>
                    <Card.Body>
                    <Card.Img variant="top" src={props.product.img.master} />
            <Card.Title className= {classes.title}>{props.product.title}</Card.Title>
            <Card.Text className= {classes.info} >{props.product.info}</Card.Text>
            <div className = {classes.price} style ={{textDecoration : props.product.hasOver ? 'line-through' : 'none'}}><strong>price : </strong>{props.product.price}</div> 
            {props.product.hasOver ? <div className = {classes.price}><strong>new price : </strong>{props.product.newPrice}</div>  : null }
            <button className={classes.addBtn + " btn  ml-auto"}  onClick ={() => handleAddToCart()}> add to cart</button>
                    </Card.Body>
                   
                </div>
        </div>
    ) : (<div className="text-center"><Spinner /></div>);
    return(
        <div className ="container">
        {product}
       </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart : (id) => dispatch(action.addToCart(id)),
        openModal : (message) => dispatch(action.openModal(message)) ,
        closeModal : () => dispatch(action.closeModal())
    }
}
const mapStateToProps =(state, ownProps) => {
    let id = ownProps.match.params.product_id;
    return {
        product: state.products.products.find(product => product.id === id)
    }
   }
   export default connect(mapStateToProps  , mapDispatchToProps)(product);
