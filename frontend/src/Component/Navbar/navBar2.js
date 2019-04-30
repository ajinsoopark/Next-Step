import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
import Auth from '../../Auth/Auth.js'
import Avatar from "react-avatar"
import './navBar.css'

// this is when the user is logged in

const logo = require("../../Images/nextStepLogo.png")

class NavBar2 extends Component{
  constructor (props) {
    super(props)
    this.state={
      search:'questions',
      filter:null,
    }
  }

  handleChange  =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit =(e)=>{
    const{filter,search}=this.state
    e.preventDefault()
    this.props.function_search(search, filter)
    this.props.history.push(`/search/${search}/${filter}`)
  }

  render (){
    // console.log(this.props.state.CurrentAutState)
    return(
    <div className='Menu2'>

      <div className = 'logo'>
        <NavLink to="/" >
          <img src= {logo} alt="next-step_logo" />
        </NavLink>
      </div>

      <div className = 'search'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <select className='searchMenu' name='search'>
            <option value='questions' >Questions</option>
            <option value='users' >Users</option>
          </select>
          <input className='searchInput' type='text' name='filter' placeholder=' Search'/>

        </form>
      </div>

      <div className = 'buttons'>

          <NavLink to={`/users/${Auth.getTokenID()}`}>
            <Avatar size = "40" textSizeRatio = {2} max-initial = {3} name= {Auth.getToken()} round = {true}/>
          </NavLink>


          <NavLink onClick={this.props.function_logout_user} to = "/"> <button>Log Out</button> </NavLink>


      </div>
    </div>
    )
  }


}
export default NavBar2
