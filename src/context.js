import React, { Component } from 'react'
import axios from 'axios'



const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:null,
        viewport: { 
            width: "100vw", 
            height: "100vh", 
            latitude: 3.847773, 
            longitude:   11.503928, 
            zoom: 10
          }, 
         userLocation: {} 

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


    getItem = id =>{
        const product = this.state.products.find(item => item.annonce.idannonce === id);
        return product;
    }

     
    manipulerDetails=id=>{
        const produitRecent = this.getItem(id);
        this.setState(()=>{
                return {detailProduct:produitRecent};
        })
    }

      
    setUserLocation = () => { 
        navigator.geolocation.getCurrentPosition (
          position => { 
           let setUserLocation = { 
               lat: position.coords.latitude, 
               long: position.coords.longitude 
            }; 
    
           let newViewport = { 
              hauteur: "100vh", 
              largeur: "100vw", 
              latitude: position.coords.latitude , 
              longitude: position.coords.longitude, 
              zoom: 10 
            }; 
                console.log(newViewport)
            this.setState ({ 
              viewport: newViewport, 
              userLocation: setUserLocation 
           }); 
        }); 
      };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                manipulerDetails:this.manipulerDetails,
                Location:this.setUserLocation
            }}>
              {this.props.children}  
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};