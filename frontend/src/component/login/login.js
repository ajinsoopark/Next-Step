import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../navbar/navBar'

class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      username:null,
      password:null
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    // const {username,password}=this.state
    return(
      <div className ='loginContainer'>
        <NavBar/>
        <div>
          <p>Sign In!</p>
        </div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input
            type='text' name="username" placeholder="Username"
          /><br/>
          <input
            type='text' name="password" placeholder="Password"
          /><br/>
          <input type = 'submit'/>
        </form>
        <div>
          <p>Don't have an account?</p>
          <NavLink to='/signup'><button>Sign Up</button></NavLink>
        </div>
      </div>
    )
  }
}

export default Login
