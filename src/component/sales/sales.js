import React from 'react'
import {Container , Row , Col }  from 'react-bootstrap'
import ProductItem from '../ui/homeItem/homeItem';
import { connect } from 'react-redux';
import classes from './sales.module.css'
const bestSeller = (props) =>  {
    const products = props.products.map(product  => {
     return   product.hasOver ? <Col md = "4" key = {product.id} style = {{margin: "50px 0px"}}><ProductItem   product = {product} /> </Col>  :  null
    })
    return (
        <div className ='page'>
            <h4 className ={classes.header}> availabel sales </h4>
        
                 <Container>
                <Row>
               {products}
                </Row>
               </Container>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products : state.products.products
    }
}
export default connect(mapStateToProps)( bestSeller)