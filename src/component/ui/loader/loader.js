import React from 'react'
import classes from './loader.module.css'
import Spinner from '../spinner/spinner'
const loader = (props) =>  {
    return (
        props.show ? <div className = {classes.loader}>
            <Spinner/>
        </div> : null
    )
}

export default loader
