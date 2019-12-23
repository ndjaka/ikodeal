import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types'
import { ProductConsumer } from '../context';

export default class Product extends Component {


    render() {
        const {annonce,lieu,partenaire,produit} = this.props.product;
      
        return (
           
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                  <ProductConsumer>
                    {
                     (value)=>(
                      <div className="img-container p-5" 
                       onClick={()=>
                       value.manipulerDetails(annonce.idannonce)
                    }
                        >
                        <Link to="/details">
                            <img
                            src={produit.image}
                            alt="product"
                            className="card-img-top  " width="157" height="109.03"/>
                        </Link>
                    </div>
                    )}
                  
                    
                  </ProductConsumer>
                       
          <div className="card-footer d-flex justify-content-between">
              
                 <p className="text-red  align-self-center mb-0">
                 <div className="font-weight-bold text-lowercase">{partenaire.nomentreprise}</div>
                <div className="font-weight-bold">{produit.designation}</div>
                       
                    <div className="text-red font-italic mb-0">
                        <span className="mr-1">ksh</span> {
                          annonce.prixpromo - (annonce.prixpromo * annonce.pourcentage/100)
                        }
                      

                        <span className=" ml-1 badge badge-pill badge-success">{annonce.pourcentage} %</span>
                        <s className="ml-1">ksh {annonce.prixpromo}</s>
                        
                    </div>
                    <span className="font-weight-bold text-uppercase">{lieu.ville}</span>  <em className="ml-1 "> {lieu.quartier}</em>
                 </p>
                    </div>
               </div>
            </ProductWrapper>
        )
    }
}



const ProductWrapper = styled.div`

.font-weight-bold{
    font-size:small;
   
}
.card{
    border-color:transparent;
    transition:all 1s linear;
   
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition;all 1s linear;
   
}

&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card- footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    //overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2)
}
`;
