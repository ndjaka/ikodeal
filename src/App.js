import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import home from './components/home';
import Details from './components/Details';
import Default from './components/Default';
import Partner from './components/Partner';
import MyMapComponent from './components/MyMapComponent';
import Food_and_drink from './components/catrgorie/Food_and_drink';




export default class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Navbar/>
       
        <Switch>
          
            <Route path="/Food-and-drink" component={Food_and_drink}/>
             <Route path="/partner" component={Partner}/>
             <Route  path="/details" component={Details}/>
            <Route path="/" component={home}/>
            <Route  component={Default}/>
        </Switch>
      
    </React.Fragment>
    )
  }
}
