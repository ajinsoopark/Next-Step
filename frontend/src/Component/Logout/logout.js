import React, { Component } from 'react';
import Auth from "../../Auth/PrivateRouting"
import "./logout.css"


class Logout extends Component {
constructor (props) {
  super(props)
}

onClickLogOut = async () =>{
  // event.preventDefault()
    await  this.props.function_logout_user()
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
