import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../navbar/navBar'

class Signup extends Component{
  constructor(props) {
    super(props)
    this.state={
      firstname:null,
      lastname:null,
      username:null,
      password:null,
      email:null,
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
    // const {firstname,lastname,username,password,email}=this.state
    return(
      <div className ='loginContainer'>
        <NavBar/>
        <div>
          <p>Join the community, and practice review!</p>
        </div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input
            type='text' name="firstname" placeholder="First Name"
          /><br/>
          <input
            type='text' name="lastname" placeholder="Last Name"
          /><br/>
          <input
            type='text' name="username" placeholder="Username"
          /><br/>
          <input
            type='text' name="password" placeholder="Password"
          /><br/>
          <input
            type='text' name="email" placeholder="E-mail"
          /><br/>
          <input type = 'submit'/>
        </form>
        <div>
          <p>Already a user?</p>
          <NavLink to='/login'><button>Login</button></NavLink>
        </div>
      </div>
    )
  }
}

export default Signup
