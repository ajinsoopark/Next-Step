import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './body1.css'
let logo = require("../../Images/nextStepPlaceHolder.png")


class Body1 extends Component{

render(){
  return(
    <div className='body1'>
      <div className='left'>
        <img src={logo} alt=''/>
      </div>
      <div className='right'>
        <div className='text'>
          <img src='https://image.flaticon.com/icons/svg/50/50443.svg' alt=''/>
          Next Step
        </div>
        <div className='text'>
          Let's talk about your next step
        </div>
        <div className='links'>
          <button>Demo Login</button>
          <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </div>
      </div>
    </div>

  )
}
}


export default Body1
