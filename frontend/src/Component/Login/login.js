import React, {Component} from 'react';
import {withRouter} from "react-router"
import './login.css'
import {NavLink} from 'react-router-dom';
// import NavBar from "../Navbar/navBarContainer"


class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      loggedin : false,
      username: "",
      password: "",
      error: false
    }
  }

  handleRedirect = ()=>{
    if(this.props === "true"){
      this.props.props.history.push("/")

    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value,
      error: false
    })
  }

  handleSubmit = async (e)=>{
    e.preventDefault();
   let userErr = await this.props.function_login_user(this.state.username,this.state.password)
    if (!userErr) {
      this.setState({
        loggedin: true,
        username: "",
        password: ""
        }, () => this.validateAndRouteUser())
    } else if (userErr) {
      this.setState({
        loggedin: false,
        username: '',
        password: '',
        error: true
      })
    }
  }

  validateAndRouteUser = () => {
    if (this.state.loggedin) {
      setTimeout(() => {
        this.props.history.push("/")
      }, 550);
    } else { 
      this.setState({ error: true })
    }
  }

  render(){
    // console.log(this.props)
    const { username, password, error }=this.state
    return(
      <div className ='loginContainer'>

        <div className='loginbox'>
          <h1>Login</h1>
          { error ? <small className='loginError'>Invalid Username or Password</small> : <small></small> }
        <form className='login' onSubmit={this.handleSubmit} >
          <input autoComplete='off' onChange={this.handleChange} type='text' name="username" placeholder="Username" value = {username} /> <br/>
          <input autoComplete='off' onChange={this.handleChange} type='password' name="password" placeholder="Password" value = {password} /> <br/>
          <button className='continue' type='submit'>Enter</button>
        </form>

          </div>
          <div className = 'signup'>
            <p>Don't have an account?
              <NavLink to='/signup'> Sign Up </NavLink>
            </p>
      </div>

      </div>
    )
  }
}

export default withRouter(Login)




//React - Code for Login
  // handleSubmit = (e)=>{
  //   e.preventDefault();

  //   this.props.login_user(this.state.username,this.state.password)

  //   this.setState({
  //     loggedin: true,
  //     username: "",
  //     password: ""
  //   })

  //   setTimeout(() => {
  //     if(this.state.loggedin){
  //     this.props.history.push("/dashboard")
  //   }
  //   }, 550);

  // }
