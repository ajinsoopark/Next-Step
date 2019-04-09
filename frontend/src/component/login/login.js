import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../navbar/navBar'


class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      current_user: null,
      username: " ",
      password: " "
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
      username: "",
      password: ""
    })

  }



  componentDidMount() {
    this.props.checkUserAuthStatus()
  }

  render(){
    const {username,password}=this.state
    return(
      <div className ='loginContainer'>
        <NavBar/>

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

export default Login
