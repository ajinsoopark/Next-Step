import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
import axios from 'axios'
import Auth from '../../Auth/Auth.js'

class NavBar extends Component{

  logoutUser = () => {
    axios.post('/users/logout').then((res)=>{
      Auth.deauthenticateUser()
    }).catch(err =>{
      console.log(err)
    })
  }

  render (){
    return(
      <div className='Menu'>
      <div className = 'logo'>
        <NavLink to="/" >
          <img src="https://image.flaticon.com/icons/svg/50/50443.svg"alt="" />
        </NavLink>
      </div>
      <div className = 'buttons'>
        <NavLink to="/login" >Login</NavLink>
        <NavLink onClick={this.logoutUser} to = "/logout"> Log Out </NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      </div>
    )
  }


}
export default NavBar
