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
      password: ""
    }
  }

  handleRedirect = ()=>{
    console.log(this.props)
    if(this.props === "true"){
      this.props.props.history.push("/")

    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e)=>{
    console.log(this.props)
    e.preventDefault();

    this.props.function_login_user(this.state.username,this.state.password)

    this.setState({
    loggedin: true,
    username: "",
    password: ""
    })

    setTimeout(() => {
      if(this.state.loggedin){
      this.props.history.push("/")
      }
    }, 550);

  }

  componentDidMount() {
    console.log(this.props)
  }

  render(){
    const {username,password}=this.state
    return(
      <div className ='loginContainer'>

        <div className='login'>
          <h1>Member Login</h1>
        <form className='login' onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value = {username} /> <br/>
          <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value = {password} /> <br/>
          <button className='continue' type='submit'>Continue</button>
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
