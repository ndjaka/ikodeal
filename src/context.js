import React, { Component } from 'react'
import axios from 'axios'



const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        product:[]
    };
  
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
        return (
            <ProductContext.Provider value={{
                ...this.state,
               
            }}>
              {this.props.children}  
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};