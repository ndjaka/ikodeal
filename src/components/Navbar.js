import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
export default  class Navbar extends Component {
    render() {
        return (
           <NavBarWrapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">

            

           <Link to="/">
            <img src={logo}  
            width='32px'
            className="navbar-brand" />
            </Link>

            <ProductConsumer>
             {
               (value)=>(
                <Link to='Food-and-drink' 
                   onClick={()=> value.getProductBycategory('Food-and-drink') }  
                >
                category
                </Link>
               )
             }
             </ProductConsumer>
           </NavBarWrapper>
        )
    }
}

const NavBarWrapper = styled.nav`
  background: var(--mainRed);
  
`
