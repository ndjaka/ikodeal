import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import home from './components/home';
import Details from './components/Details';
import Default from './components/Default';



export default class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Navbar/>
       
        <Switch>
        <Route  path="/details" component={Details}/>
        <Route path="/" component={home}/>
        <Route  component={Default}/>
        </Switch>
  
    </React.Fragment>
    )
  }
}
