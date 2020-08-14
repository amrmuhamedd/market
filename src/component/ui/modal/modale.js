import React, { Component } from 'react'
import classes from './modale.module.css'
import Aux from '../../../hoc/ar'
import Backdrop from '../backdrop/Backdrop'
class  Modal extends Component {
    shouldComponentUpdate (nextProps , nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    render() {
        return(
            <Aux>
            <Backdrop show ={this.props.show} clicked = {this.props.modalClosed} />
           <div className ={classes.Modal + ' ' + this.props.class }
               style = {{
                   transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                   opacity: this.props.show ? '1' : '0',
               }}
          >
              {this.props.children}
          </div>
        </Aux>
        )
    }
} 
export default Modal;