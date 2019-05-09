import React, { Component } from 'react';
import Auth from "../../Auth/PrivateRouting"
import "./logout.css"


class Logout extends Component {
constructor (props) {
  super(props)
}

onClickLogOut = async () =>{

   await this.props.history.push("/logout?")
    await  this.props.function_logout_user()
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
      <form> <h1> Do you want to logout ? 
      </h1>
      <button onClick = {this.onClickLogOut}> <label> YES </label> </button>
        <button onClick = {this.onClickRedirect}>  <label> NO </label> </button>
      
      </form>
      </div> 
      </div>
      </>
  )
}

}

export default Logout


