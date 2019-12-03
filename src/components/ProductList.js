import React, { Component } from 'react'
import Product from './Product'
import Tile from './Title'


import Slide from './Slideshow'
import axios from 'axios';

class ProductList extends Component {


    state ={
        products:null
    }

    componentDidMount(){
        axios.get('/yellpasscontrollerannonce/infoannonce')
        .then(res=>{
           console.log(res.data)
            this.setState(
                {
                    products:res.data
                }
            )
        })
        .catch(err =>console.log(err) );
    }

    render() {
        let recentProductMarkup = this.state.products ?
        ( this.state.products.map(
           (product) =><Product key={product.produit.idproduit} product={product}/>)
        ) : <p>chargement....</p>
        return (


            <React.Fragment>
               
                <div className = "py-3">
                    <div className="container">
                        <Tile title="Best deals" />
                        <div className="row">
                              {recentProductMarkup}
                        </div>
                    </div>
                </div>
            </React.Fragment>
          // <Product></Product>
        )
    }
}
export default ProductList;