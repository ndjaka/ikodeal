
import React, { Component } from 'react'
import {Slide} from 'react-slideshow-image';
import styled from 'styled-components';



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
 
  
    }

export default function Slideshow() {
    return (
        <SlideContainer >
        <div className="container">

        <Slide {...properties}>
        <div className="each-slide">
            <div>
                <img src="img/1.jpg"  width='1110'  />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src="img/2.jpg" width='1110' />
            </div>
        </div>
        <div className="each-slide">
             <div>
                  <img src="img/3.jpg" width='1110' />
              </div>
        </div>
      </Slide>
        </div>
      
    </SlideContainer>
    )
}


const SlideContainer = styled.div`

.container{
    
    margin: auto;
    
    padding-top: 20px;
}
.container img{
    height: 300px;
}

`;


  