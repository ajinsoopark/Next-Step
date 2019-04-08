import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './body1.css'
let logo = require('../../images/Next_Step8.png')


class Body1 extends Component{

render(){
  return(
    <div className='body1'>
      <div className='left'>
        <img src={logo} alt=''/>
      </div>
      <div className='right'>
        <div className='text'>
          <p>Next Step</p>
          <p>Motto</p>
        </div>
        <div className='links'>
          <button>Demo</button>
          <NavLink to='/signup'>Sign Up</NavLink>
        </div>
      </div>
    </div>

  )
}
}


export default Body1
