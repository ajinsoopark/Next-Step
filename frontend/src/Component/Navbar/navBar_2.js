import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'

// this is when the user is logged in

const logo = require("../../Images/nextStepLogo.png")

class NavBar2 extends Component{
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
        <NavLink onClick={this.props.function_logout_user} to = "/"> Log Out </NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>
      </div>
    )
  }


}
export default NavBar2
