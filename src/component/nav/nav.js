import React from 'react';
import {
    Navbar ,
    Nav ,
    Container,
Badge} from 'react-bootstrap';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import classes from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const navbar = (props) =>{
    return (
        <Navbar bg="dark" expand="md" variant = "dark fixed-top">
        <Container>
        <NavLink to="/" className = {classes.brand + " navbar-brand"}>Market</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className = "nav-link" exact  to="/">Home</NavLink>
            <NavLink className = "nav-link" to="/sale">sales</NavLink>
            <NavLink className = "nav-link" to="/product">product</NavLink>
          </Nav>
          <div className="ml-auto">
              <div className = {classes.mainIcon} >
              <NavLink to="/cart">
                <div className = {classes.icon}>
                   <Badge className = {classes.num}>{props.catrItem}</Badge>
                     <FontAwesomeIcon  icon = {faShoppingCart}/>
                </div>
                </NavLink>
              </div>
          
      
          </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
const mapStateToProps = state => {
  return{
    catrItem : state.cart.cart.length 
  }
} 
export default connect(mapStateToProps )( navbar );