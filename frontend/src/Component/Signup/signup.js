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
      usernameErr: false,
      blankErr: false,
      passwordErr: false
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value,
      usernameErr: false,
      blankErr: false,
      passwordErr: false
    })
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    let signUpErr = await this.signUpUser()
    if (!this.checkForBlanks()) {
     return this.setState({ blankErr: true })
    } else if (this.state.password.length <= 3) {
      this.setState({ passwordErr: true })
    } else if (signUpErr.data === undefined) {
      this.setState({
        usernameErr: true
      })
    } else {
      this.loginUser()
    }
  }

  checkForBlanks = () => {
    const { first_name, last_name, username, email, password } = this.state
    if (first_name === '') {
      return false
    } else if (last_name === '') {
      return false
    } else if (username === '') {
      return false
    } else if (email === '') {
      return false
    } else if (password === '') {
      return false
    } else {
      return true
    }
  }

  loginUser = () => {
    const {username, password} = this.state
    
    axios.post('/api/users/login', {
      username,
      password
    }).then(res => {
      Auth.authenticateUser(username)
      Auth.authenticateUserID(res.data.id)
    }).then(() => {
      this.props.history.push('/')
    })
  }

  signUpUser = () => {
    const {username,first_name,last_name,email,password}=this.state;

   let signUp = axios.post('/api/users/signup',{username,first_name,last_name,email,password})
    .catch((err) => {
      console.log(err)
      return err
    })
    return signUp
  }

  render(){

    const {first_name,last_name,username,password,email, blankErr, usernameErr, passwordErr}=this.state
    return(
      <div className ='signupContainer'>
        <div className = 'inputbox'>
        <h1> Sign Up </h1>
          <p>Join the community, and practice review!</p>
        <form className = 'input' onSubmit={this.handleSubmit} autoComplete='off'>

            <div class="form-group">
              <label class="form-label" for="first">First Name</label>
              <input autoComplete='off' class = "form-input" type='text' name="first_name" value={first_name} placeholder="First Name" onChange={this.handleChange} />
            </div>

            <div class="form-group">
              <label class="form-label" for="first">Last Name</label>
              <input autoComplete='off' class = "form-input" type='text' name="last_name" value={last_name} placeholder="Last Name" onChange={this.handleChange} /><br />
            </div>

           <div class="form-group">
              <label class="form-label" for="first">Username</label>
              <input autoComplete='off' class = "form-input" type='text' name="username" value={username} placeholder="Username" onChange={this.handleChange} />
             <small className={usernameErr ? 'usernameErr signUpErr errColor' : 'usernameErr signUpErr'}>Username already in use.</small>
            </div>
            
            
            <div class="form-group">
              <label class="form-label" for="first">Password</label>
              <input autoComplete='off' class = "form-input" type='password' name="password" value={password} placeholder="Password" onChange={this.handleChange} /><br />
             <small className={passwordErr ? 'usernameErr signUpErr errColor' : 'usernameErr signUpErr'}>Password minimum length of 4 characters.</small>
            </div>

            
            <div class="form-group">
              <label class="form-label" for="first">Email</label>
              <input autoComplete='off' class = "form-input"type='text' name="email" value={email} placeholder="E-mail" onChange={this.handleChange} />
              <small className={blankErr ? 'blankErr signUpErr errColor' : 'blankErr signUpErr'}>Please do not leave anything blank.</small>
            </div>
            

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
