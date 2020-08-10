import React from 'react'
import Slider from '../../../component/ui/slider/slider'
import ProductItem from '../../../component/ui/homeItem/homeItem';
import { connect } from 'react-redux';
import classes from './homeProduct.module.css'
const bestSeller = (props) =>  {
   
    const products = props.products.map(product  => {
     return   <ProductItem  key = {product.id} product = {product} /> 
    })
    return (
        <div className ={classes.bestSeller}>
            <h4 className ={classes.header}> our Products </h4>
            <Slider>
                {products}
            </Slider>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products : state.products.products
    }
}
export default connect(mapStateToProps)( bestSeller)