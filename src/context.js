import React, { Component } from 'react'
import axios from 'axios'



const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:null,
        userLocation: {}
        

    };
  
    componentDidMount(){
        axios.get('/infoannonce')
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
    
            console.log(setUserLocation)
            this.setState ({ 
              userLocation: setUserLocation 
           }); 
        }); 
      };



      getProductBycategory=name=>{

       var request = '/infoannoncecategorie?categorie=Ice cream parlor'
        axios.get(request)
        .then(res=>{
          console.log(
            {
             name:'getcategoryByProduct',
              data:res.data
            })
            this.setState(
                {
                    products:res.data
                }
            )
        })
        .catch(err =>console.log(err) );
       
        
      }

      getProductBySubcategory=(namecat,nameSubcat)=>{
        
        var request = '/infoannoncesscat?categorie=BAR%20RESTAURANT&sscat=Bar Snack Cabaret'
        axios.get(request)
        .then(res=>{
            console.log( {
                name:'getProductBySubcategory',
                 data:res.data
               })

               this.setState({
                   products:res.data
               })
        }).catch(err => console.log(err))
      }

      

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                manipulerDetails:this.manipulerDetails,
                Location:this.setUserLocation,
                getProductBycategory:this. getProductBycategory,
                getProductBySubcategory:this.getProductBySubcategory
            }}>
              {this.props.children}  
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};