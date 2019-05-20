import React, { Component } from 'react';
import Auth from "../../Auth/PrivateRouting"
import "./logout.css"
import { NavLink } from 'react-router-dom'

class Logout extends Component {
constructor (props) {
  super(props)
}

onClickLogOut = async () =>{
  // event.preventDefault()
  // this.props.history.push("/")
  this.props.function_logout_user()
    // this.props.history.push("/home")



}

onClickRedirect = () =>{
    this.props.history.push("/home")
}

componentDidMount() {

}


render () {
  return (
      <>
      <div className = "logout_container">
      <div className = "logout_wrapper">
      <div> <h1> Do you want to logout ?
      </h1>

         {/* <NavLink to='/'>
          <button onClick = {this.onClickLogOut}> <label> YES </label> </button>
         </NavLink> */}

     
          <button onClick = {this.onClickLogOut}> <label> YES </label> </button>
        <button onClick = {this.onClickRedirect}>  <label> NO </label> </button>

      </div>
      </div>
      </div>
      </>
  )
}

}

export default Logout
