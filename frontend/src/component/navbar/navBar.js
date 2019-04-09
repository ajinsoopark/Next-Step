import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
import axios from 'axios'
import Auth from '../../Auth/Auth.js'

class NavBar extends Component{

  render (){
    const{logoutUser}=this.props

    return(
      <div className='Menu'>
      <div className = 'logo'>
        <NavLink to="/" >
          <img src="https://image.flaticon.com/icons/svg/50/50443.svg"alt="" />
        </NavLink>
      </div>
      <div className = 'buttons'>
        <NavLink to="/login" >Login</NavLink>
        <button onClick={logoutUser}>logout</button>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      </div>
    )
  }


}
export default NavBar
