import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import NavBar from './navBar.js';


class Home extends Component{
  constructor(props) {
    super(props)
  }



render(){
  return(
    <>
      <NavBar/>
      Welcome to Landing Page!
    </>

  )
}
}


export default Home
