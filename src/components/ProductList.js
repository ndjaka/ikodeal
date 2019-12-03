import React, { Component } from 'react'
import Product from './Product'
import Tile from './Title'


import Slide from './Slideshow'
import axios from 'axios';
import { ProductConsumer } from '../context';

class ProductList extends Component {



    render() {
        

        return (


            <React.Fragment>
               
                <div className = "py-3">
                    <div className="container">
                        <Tile title="Best deals" />
                        <div className="row">
                           <ProductConsumer>
                               {(value)=>{
                                   return value.products.map( product =>{
                                       return <Product product={product}/>
                                   })
                               }}


                           </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          // <Product></Product>
        )
    }
}
export default ProductList;