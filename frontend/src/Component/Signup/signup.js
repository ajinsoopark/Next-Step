import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import NavBar from "../Navbar/navBarContainer"
import axios from 'axios'
import Auth from "../../Auth/Auth"
import './signup.css'

class Signup extends Component{
  constructor(props) {
    super(props)
    this.state={
      first_name:'',
      last_name:'',
      username:'',
      password:'',
      email:'',
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = async (e) =>{
    e.preventDefault();

    const {username,first_name,last_name,email,password}=this.state;

    await axios.post('/users/signup',{username,first_name,last_name,email,password})
    .then(res=>{
      //THIS IS CAN BE SHORTEN BY PASSING LOGIN USER FROM APPS JS. We currently do not want to lose Public Route function.

      axios
        .post("/users/login", {
          username,
          password
        }).then((res)=>{
          Auth.authenticateUser(username)
          Auth.authenticateUserID(res.data.id)
        }).then(()=>{
            this.props.history.push("/")
        }).catch((err)=>{
          console.log(err)
        })
    })
    .then(()=>{
        this.setState({
          first_name:'Redirecting to Dashboard',
          last_name:'Redirecting to Dashboard',
          username:'Sign Up Complete',
          password:'Good',
          email:'Good'
        })
    })

  }

  render(){
    const {first_name,last_name,username,password,email}=this.state
    return(
      <div className ='signupContainer'>
        <div className = 'input'>
          <p>Join the community, and practice review!</p>
        <form className = 'input' onSubmit={this.handleSubmit} >
          <input type='text' name="first_name" value={first_name} placeholder="First Name" onChange={this.handleChange}/><br/>
          <input type='text' name="last_name" value={last_name} placeholder="Last Name" onChange={this.handleChange}/><br/>
          <input type='text' name="username" value={username} placeholder="Username" onChange={this.handleChange}/><br/>
          <input type='password' name="password" value={password} placeholder="Password" onChange={this.handleChange}/><br/>
          <input type='text' name="email" value={email} placeholder="E-mail" onChange={this.handleChange}/><br/>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
        <div className='login'>
          <p>Already a user?
            <NavLink to='/login'> Login </NavLink>
          </p>
        </div>
      </div>
    )
  }
}

export default Signup
