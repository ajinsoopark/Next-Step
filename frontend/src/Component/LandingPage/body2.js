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
          <p className='cardInfo'>Get access to an extensive list of interview questions asked at top companies today, and practice effectively answering them. Keep track of your answers & progress.</p>
        </div>
        <div className = 'cards'>
          <h2 className='cardLabel'>Feedback</h2>
          <p className='cardInfo'>Receive valuable contructive feedback for your answers from professionals and other users. Read and review other users' interview answers.</p>
        </div>
        <div className = 'cards'>
          <h2 className='cardLabel'>Advice</h2>
          <p className='cardInfo'>Take a look at the helpful tips for before, during and after your interview that will give you a step above the competion. Small details make the big picture.</p>
        </div>
      </div>
    </div>
    </div>

  )
}
}


export default Body2
