import React, { Component } from 'react'

import {Link, MemoryRouter} from 'react-router-dom';
import {ButtonContainer} from './Button';
import PropTypes from 'prop-types';



import Title from './Title';
import { ProductConsumer } from '../context';
import MyMapComponent from './MyMapComponent';

 class Details extends Component {
    render() {
     
        
                      
                       return (
                        <ProductConsumer>
                            {value=>{
                               const {annonce,lieu,partenaire,produit} =
                                value.detailProduct;
                                return (
                                      
                           <div class="container py-5">
                           <div className="row">
                                <div className="col-10 mx-auto text-center 
                                text-slanted text-title my-5">
                                    {/*designation*/}
                                <h1>{lieu.designation}</h1>
                             </div>
                           </div>
                            {/*fin designation*/}
                             {/*info produit*/}
                               <div className="row">
                                   <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                     <img src={produit.image}   width="300" height="170.5" className="img-fluid" alt="product"/>
                                   </div>   
                                   {/*  text produit*/}
                                   <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>product: {produit.designation}</h2>
                                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                   place :   <span className="font-weight-bold text-uppercase">{lieu.ville}</span>  -  <em className="ml-1 "> {lieu.quartier}</em>
                                  </h4>
                                   <h4 className=" h5 text-red">
                                    <strong>
                                        <span className="mr-1">ksh</span> {
                                            annonce.prixpromo - (annonce.prixpromo * annonce.pourcentage/100)
                                            }
                                        <span className=" ml-1 badge badge-pill badge-success">{annonce.pourcentage} %</span>
                                            <s className="ml-1">ksh {annonce.prixpromo}</s>
                                   </strong>
                                       
                                   </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product :
                    <p className="text-muted lead">{produit.description}</p>
                                     </p>
                                      {/* fin text produit*/}
                                     {/*button*/}
                                     <div>
                                         <Link to="/">
                                             <ButtonContainer>
                                                 Back to products
                                             </ButtonContainer>
                                         </Link>
                                         <ButtonContainer 
                                       
                                         >
                                            buy product
                                         </ButtonContainer>
                                     </div>
                                   </div>
                                    
                                   
                               </div>
                               <div className="row">
                                   <div className="col-9 col-md-8">
                                          
                                            <MyMapComponent lieu= {value.detailProduct.lieu}/>
                                   </div>
                                   <div className="col-9 col-md-4">
                                       <div className="card" style={{width :'18rem' , border:'transparent'}}>
                                       <div className="card-body">
                                         <h5 className="card-title text-capitalize">{lieu.designation}</h5>
                                        <h6 className="card-subtitle mb-2  text-capitalize"><i className="fas fa-map-marker-alt mr-1"></i>{lieu.rue}</h6>
                                        <h6 className="card-text"><i class="fas fa-store mr-1 text-capitalize"></i>{lieu.quartier}</h6>
                                        <h6 className="card-text"><i class="fas fa-city mr-1 text-capitalize"></i>{lieu.ville}</h6>
                                      <p className="text-muted">{partenaire.description}</p>
                                        <Link to='/partner 'className="text-capitalize card-link">more </Link>
                                           
                                        </div>
                                       </div>

                                   </div>
                               </div>

                             {/*fin info produit*/}


                       </div>
                                )
                            }}
                        </ProductConsumer>
                       )
            
        
    }
}
export default Details;