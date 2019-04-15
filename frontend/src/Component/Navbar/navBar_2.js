import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'

// this is when the user is logged in

const logo = require("../../Images/nextStepLogo.png")

class NavBar2 extends Component{
  constructor (props) {
    super(props)
    this.state={
      search:null,
      filter:null,
    }
  }

  componentDidMount() {
    // console.log(this.props)
  }

  handleChange  =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit =(e)=>{
    const{filter,search}=this.state
    e.preventDefault()
    this.props.history.push(`/search/${search}/${filter}`)

  }

  render (){
    // console.log(this.state)
    return(
      <div className='Menu'>
      <div className = 'logo'>
        <NavLink to="/" >
          <img src= {logo} alt="next-step_logo" />
        </NavLink>
      </div>
      <div className = 'search'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} name='search'>
            <option value={null}></option>
            <option value='users' >users</option>
            <option value='questions' >questions</option>
          </select>
          <input type='text' name='filter' />
          <input type='submit'/>
        </form>
      </div>
      <div className = 'buttons'>
        <NavLink onClick={this.props.function_logout_user} to = "/"> Log Out </NavLink>
      </div>
      </div>
    )
  }


}
export default NavBar2
