import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'
import styled from 'styled-components'
export default  class Navbar extends Component {
    render() {
        return (
           <NavBarWrapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">

            

           <Link to="/">
            <img src={logo}  
            width='32px'
            className="navbar-brand" />
            </Link>

             <Link to='Food-and-drink'>
                    category
             </Link>
           </NavBarWrapper>
        )
    }
}

const NavBarWrapper = styled.nav`
  background: var(--mainRed);
  
`
