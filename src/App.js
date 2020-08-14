import React, { Component }  from 'react';
import {connect} from 'react-redux';
import Layout from './container/layout/layout';
import Market from './container/market/market';
import Sale from './component/sales/sales';
import Products from './component/products/products';
import Product from './component/products/product/product'
import Cart from './component/cart/cart';
import Modal from './component/ui/modal/modale';
import Loader from './component/ui/loader/loader'
import classes from './App.module.css';
import * as action from './store//actions/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  componentDidMount(){
    this.props.endLoading()
  }
  render() {
  return (
    <div className="App">
      <Router basename="/market"> 
      <Layout >
        <Switch>
          <Route exact path = "/" component ={Market}/>
          <Route path = "/sale" component ={Sale}/>
          <Route path = "/product" component ={Products}/>
          <Route path = "/cart" component ={Cart}/>
          <Route  path = '/:product_id'  exact component= {Product} />
        </Switch>
        <Modal show = {this.props.show} class = {classes.modal} modalClosed ={this.props.modalClosed}>
          {this.props.message}
        </Modal>
      </Layout>
      <Loader show = {this.props.loading}/>
      </Router>
    </div>
  );
}
}
const mapDispatchToProps = dispatch => {
  return {
    modalClosed: () => dispatch(action.closeModal()),
    endLoading : ()=> dispatch(action.endLoading()),
  }
}
const mapStateToProps = state => {
  return {
    loading : state.ui.loading,
    show : state.ui.modal,
    message : state.ui.modalMessage
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(App);
