import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'

import './body2.css'

class Body2 extends Component{

render(){
  return(

    <div className='body2'>
    <div className = "wrapper">
      <div className='tools'>Tools To Help You With Your Next Step</div>
      <div className = 'cardContainer'>
        <div className = 'cards'>
          <h2 className='cardLabel'>Practice</h2>
          <p className='cardInfo'>{"Listen to interview quesitons, and give us your answers. We'll keep track of your answers & progress."}</p>
        </div>
        <div className = 'cards'>
          <h2 className='cardLabel'>Feedback</h2>
          <p className='cardInfo'>Have professionals, and others review and look at your answers. Receive constructive feedback, and more!</p>
        </div>
        <div className = 'cards'>
          <h2 className='cardLabel'>Tips & Tricks</h2>
          <p className='cardInfo'>Take a look at some tips and tricks that will bring you above the competion. Small details help your big picture.</p>
        </div>
      </div>
    </div>
    </div>

  )
}
}


export default Body2
