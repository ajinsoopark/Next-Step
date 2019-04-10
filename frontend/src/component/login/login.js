import React, {Component} from 'react';
import {withRouter} from "react-router"

import {NavLink, Redirect} from 'react-router-dom';
import NavBar from '../navbar/navBar'


class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      loggedin : false,
      current_user: null,
      username: "",
      password: ""
    }
  }

  handleRedirect = ()=>{
    console.log(this.props)
    if(this.props === "true"){
      this.props.props.history.push("/dashboard")

    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();

    this.props.login_user(this.state.username,this.state.password)

    this.setState({
      loggedin: true,
      username: "",
      password: ""
    })
    
    setTimeout(() => {
      if(this.state.loggedin){
      this.props.history.push("/dashboard")
    }
    }, 550);
    
  }
  
  componentDidMount() {
    this.props.checkUserAuthStatus()
    this.handleRedirect()
  }

  render(){
    const {username,password}=this.state
    return(
      <div className ='loginContainer'>

        <div>
          <p>Sign In!</p>
        </div>

        <form onSubmit={this.handleSubmit} >
        
          <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value = {username} /> <br/>

          <input onChange={this.handleChange} type='text' name="password" placeholder="Password" value = {password} /> <br/>


          <input name = "submit" type = 'submit'/>
        </form>
        <div>
          <p>"Don't have an account?"</p>
          <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
