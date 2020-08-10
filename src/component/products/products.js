import React from 'react'
import {connect} from 'react-redux';
import ProductItem from '../ui/homeItem/homeItem'
import {Container , Row , Col }  from 'react-bootstrap'
import Aux from '../../hoc/ar';
import classes from './products.module.css'
const Products= (props) =>  {
        const products = props.products.map(product  => {
            return    <Col md = "4" key = {product.id} style = {{margin :  '50px 0px'}}> <ProductItem   product = {product} /> </Col>
        })
        return (
            <Aux>
                <div className ="page">
                 <Container>
                 <h4 className = {classes.header}> our Products </h4>
                <Row>
               { products }
                </Row>
               </Container>
               </div>
            </Aux>
        )
};

const mapStateToProps = (state) => {
    return {
        products : state.products.products
    };
};
export default connect(mapStateToProps) (Products)