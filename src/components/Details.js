import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
  import PropTypes from 'prop-types';

import Title from './Title';

 class Details extends Component {
    render() {
     
        
                      
                       return (
                           <div class="container py-5">
                               <div className="row">
                                    <div className="col-10 mx-auto text-center 
                                    text-slanted text-title my-5">
                                        {/*designation*/}
                                     <h1></h1>
                                 </div>
                               </div>
                                {/*fin designation*/}
                                 {/*info produit*/}
                                   <div className="row">
                                       <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                         <img src="" className="img-fluid" alt="product"/>
                                       </div>   
                                       {/*  text produit*/}
                                       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                      <h2>product: </h2>
                                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                       place : 
                                      </h4>
                                       <h4 className="text-red">
                                           <strong>
                                           price:<span className="ml-1">ksh </span>   <s className="ml-1">ksh  </s> 
                                           </strong>
                                           
                                       </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                                some info about product :
                                           <p className="text-muted lead"></p>
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
                                           <div className="card">
                                          the maps is  building
                                           </div>
                                       </div>
                                       <div className="col-9 col-md-4">
                                           <div className="h6 font-weight-bold  text-capitalize">info entreprise</div>
                                       <div className="card">
                                          
                                            {/*info lieu*/}  
                                               <div className="text-center">
                                                       
                                                       <div class="text-muted ">
                                                 
                                                     <div><i className="fa fa-info"></i></div>
                                                    <div><i className="fa fa-info"></i></div>
                                                     <div><i className="fa fa-info"></i></div>
                                                    <div><i className="fa fa-info"></i></div>
                                                      
                                                 
                                                  
                                                       </div>
                                                   
                                               </div>
                                              {/*fin info lieu*/}  
                                           </div>
                                       </div>
                                   </div>

                                 {/*fin info produit*/}


                           </div>
                       )
            
        
    }
}
export default Details;