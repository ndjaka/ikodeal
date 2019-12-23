import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Link from 'react-router-dom/Link'

export default class CategoryTemplate extends Component {
  
  

    render() {
            const  image = this.props.tableimage
        return (
            <div>
                <div>
                            <nav class="breadcrumb">
                                <Link class="breadcrumb-item" to='home'>Category</Link>
                                <span class="breadcrumb-item active"><i class="fas fa-glass-cheers"></i>{this.props.namecategory}</span>
                            </nav>
                            <Title name={this.props.namecategory}/>
                        <CategoryWrapper className="container">
                            <div className="card-columns text-center text-capitalize">
                    
                               
                                 
                               

                                    {

                                        image.map(elt =>{
                                        return(
                                            <Link to='#'>
                                                <div class="card" >
                                                        <div className="card-body">
                                                        <img src={elt.image} width='80' height='90'/>
                                                        <div className="pt-2">{elt.nom}</div>
                                                </div>

                                                </div>
                                        </Link>
                                         )
                                       })
                                        
                                    }
                                

                                   
                            
                            </div>
                        </CategoryWrapper>
                    
                    
                    
                </div>
        
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

