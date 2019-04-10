import React, { Component } from 'react';

import NavBar from ".././navbar/navBar"

import Body1 from './body1.js';
import Body2 from './body2.js';


class Home extends Component{
  constructor(props) {
    super(props)
  }



render(){
  return(
    <div className='landingPage'>
      <Body1/>
      <Body2/>
      Welcome to Landing Page!
    </div>

  )
}
}


export default Home
