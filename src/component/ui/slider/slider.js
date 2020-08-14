import React from 'react'
import Carousel from 'nuka-carousel';
const slider = (props) =>  {
    return (
            <Carousel  enableKeyboardControls ={true} slideIndex ={1} dragging = {true} transitionMode ='scroll3d' slideWidth = '400'  withoutControls = {false} cellHeight = '700' cellSpacing ={100} edgeEasing="easeOutCirc" slidesToShow={2} cellAlign="center">
                {props.children}
            </Carousel>
    )
}

export default slider