import React, { Component } from 'react'

import ProductList from './ProductList'
import Slideshow from './Slideshow'
import styled from 'styled-components';
import Title from './Title';


export default class home extends Component {
    render() {
        return (
            <div>
                
                <Slideshow/>
                <ProductList/>
                <ShareWapper className="container">
                   
                    <div className="getandroid card">
                        <div className=" row">
                           <div className="col10  col-md-4 ">
                             <p className= "text-center text-title my-5 ml-1 text-white text-uppercase h3"> 
                                 to be aware of more reduction download the android app
                                <img src="img/en_badge_web_generic.png" width="250"/>
                             </p>
                           </div>
                           <div className="col10 reduc col-md-8">
                               <div className="thumbnail">
                               <img className="img1" src="img/imageannonce.jpg" width="720" height="350"/>
                               <div class="caption">
                                <h1 className="text-capitalize ">enjoy this product with a 50% discount</h1>
                               
                            </div>

                               </div>
                               
                           </div>
                        </div>
                       
                    </div>
              </ShareWapper>
                
            </div>
        )
    }
}
const ShareWapper = styled.div`
.card{
    border-color:transparent;
    border: 0px;
}
.color{
    background-color: var(--mainWhite);
}

.card{
    margin : 4px;
}

.getandroid{
    background:var(--mainRed);
    
} 

.img1{
    display: block;
}
.thumbnail {
    position: relative;
    display: inline-block;
}
.caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    text-align: center;
    color: white;
    font-weight: bold;
}


`
