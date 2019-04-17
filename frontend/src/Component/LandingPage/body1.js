import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './body1.css'
// import login_user from '../Login/loginUtils'
import {connect } from "react-redux";
import {withRouter} from "react-router"
import {login_user,checkUserAuthStatus} from "../../Redux/Actions/Auth_actions.js"


let logo = require("../../Images/nextStepPlaceHolder.png")


const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_login_user: (username, password) => dispatch(login_user(username,password)),
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus())
}
}



class Body1 extends Component{

render(){
  console.log(this.props)
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
          <button onClick = {() => {this.props.function_login_user('a',"a")}}>Demo Login</button>
          <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </div>
      </div>
    </div>

  )
}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Body1))
