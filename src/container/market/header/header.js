import React  from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';
import Product from './headerItem/headerItem';
const header = (props) => {
    const windowHeight = window.innerHeight;
    const item = props.products.map(product => {
      return product.isNew ?  <Carousel.Item key = {product.id} style ={{height : windowHeight  , background: '#222831'}}> <Product  item={product} /> </Carousel.Item>: ''
    })
   return (
  <Carousel controls={false} >
      {item}
  </Carousel>
   )
}
const mapStateToProps = (state) => {
    return{
        products: state.products.products
    }
}
export default connect(mapStateToProps)(header);