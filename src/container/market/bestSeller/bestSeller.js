import React from 'react'
import Slider from '../../../component/ui/slider/slider'
import ProductItem from '../../../component/ui/homeItem/homeItem';
import { connect } from 'react-redux';
import classes from './bestSeller.module.css'
const bestSeller = (props) =>  {
    let averagesales = 0 ;
    for (let product in props.products) {
        averagesales  += props.products[product].selled 
    };
    const products = props.products.map(product  => {
     return   product.selled >= (averagesales / props.products.length) - props.products.length  ? <ProductItem  key = {product.id} product = {product} /> :  null
    })
    return (
        <div className ={classes.bestSeller}>
            <h4 className ={classes.header}> best seller </h4>
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