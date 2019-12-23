import React, { Component } from 'react'
import Tile from '../Title'
import styled from 'styled-components'
import ProductList from '../ProductList'
import { Link } from 'react-router-dom'

export default class Food_and_drink extends Component {
    render() {
        return (
              
             
            <div>
                <nav class="breadcrumb">
                    <Link class="breadcrumb-item" to='home'>Category</Link>
                    <span class="breadcrumb-item active"><i class="fas fa-glass-cheers"></i> Food and Drink</span>
                </nav>
                <Tile title="choose a sub-category" />
               <CategoryWrapper className="container">
               <div className="card-columns text-center text-capitalize">
               <Link to='#'>
                    <div class="card" >
                        <div class="card-body">
                        <img src="img/bakery.svg" width='80' height='90'/>
                          <div className="pt-2">Bakery</div>
                        
                       </div>
                    </div>
                 </Link>

                    <div class="card">
                        <div class="card-body">
                        <img src='img/ice-cream.svg' width='80' height='90'/>
                           <div className="pt-2">Ice cream parlor </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <img src='img/restaurant.svg' width='80' height='90'/>
                           <div className="pt-2">Restaurant</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                          <img src='img/fast-food.svg' width='80' height='90' />
                           <div className="pt-2 ">Fast food</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <img src='img/coffee.svg'  width='80' height='90'/>
                        
                           <div className="pt-2">coffee shops</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                             <img src='img/sof.svg' width='80' height='90'/>
                           <div className="pt-2">soft and hard drinks</div>
                        </div>
                    </div>

                </div>
               </CategoryWrapper>

                <ProductList/>


         </div>
            
        )
    }
}

const CategoryWrapper = styled.div`

.font-weight-bold{
    font-size:small;
   
}
.card{
    border-color:transparent;
    width :18rem;
    color:var(--mainOrange);
    
}




`;