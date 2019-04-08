import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'

class NavBar extends Component{
  constructor(props) {
    super(props)
  }

  render (){
    return(
      <div className='Menu'>
      <NavLink to="/home" >
        <img src="https://image.flaticon.com/icons/svg/50/50443.svg"alt="" />
      </NavLink>
      <button>Login</button>
      <button>Sign Up</button>
      <NavLink to="/about" >
        About
      </NavLink>
      </div>
    )
  }


}
export default NavBar
