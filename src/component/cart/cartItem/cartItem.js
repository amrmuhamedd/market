import React  from 'react'
import Aux from '../../../hoc/Auxe/aux';
import {NavLink} from 'react-router-dom' 
import classes from './cartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus ,
    faMinus ,
    faStar, 
    faStarHalfAlt, 
    faTrash} from '@fortawesome/free-solid-svg-icons'
const productIteme = (props) => {
    return (
        <Aux>
                        <div className = {classes.product + " row"}>
                            <div className = {classes.img + " col-md-4"} >
                            <img src={props.item.img.master} alt = "product"/>
                            </div>
                            <div className ={classes.content + " col-md-8"}>
                                <h3 className ={classes.title}>{props.item.title}</h3>
                            <div className ={classes.stars}><FontAwesomeIcon icon = {faStar} /> <FontAwesomeIcon icon = {faStarHalfAlt} /> </div>
                      
                            
                            <div className = {classes.quantity}> <button className ={classes.controls + " mr-auto"}><FontAwesomeIcon icon = {faMinus} onClick ={props.decrement} /></button><p>{props.item.quantity}</p>
                             <button className ={classes.controls + " ml-auto"}> <FontAwesomeIcon icon = {faPlus} onClick = {props.increment}/> </button>
                              
                              </div>
                            <div className = {classes.price}><strong>price : </strong>{props.item.newPrice}</div>
                            <div className = {classes.price}><strong>total price : </strong>{props.item.total}</div>
                            <NavLink to={'/' + props.item.id} className={classes.detail + " btn"}>some details</NavLink>
                            <button className= {classes.trash + " ml-auto"}><FontAwesomeIcon icon = {faTrash} onClick = {props.remove}/></button>
                        </div>
                        </div>
                  
        </Aux>
    )
}



export default productIteme;
