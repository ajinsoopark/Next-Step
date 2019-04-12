import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
// import axios from 'axios'
// import Auth from '../../Auth/Auth.js'

const logo = require("../../images/Next_Step_Logo.png")

class NavBar extends Component{
  constructor (props) {
    super(props)
  }
  
  componentDidMount() {
    // console.log(this.props)
  }
  

  render (){
    return(
      <div className='Menu'>
      <div className = 'logo'>
        <NavLink to="/" >
          <img src= {logo} alt="next-step_logo" />
        </NavLink>
      </div>
      <div className = 'buttons'>
        <NavLink to="/login" >Login</NavLink>
        <NavLink onClick={this.props.function_logout_user} to = "/logout"> Log Out </NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      </div>
    )
  }


}
export default NavBar



//React - Code for Logout Code
  // logoutUser = () => {
  //   axios.post('/users/logout').then((res)=>{
  //     Auth.deauthenticateUser()
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }