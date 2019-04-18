import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
import Auth from '../../Auth/Auth.js'

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
    <div className='Menu'>

      <div className = 'logo'>
        <NavLink to="/" >
          <img src= {logo} alt="next-step_logo" />
        </NavLink>
      </div>

      <div className = 'search'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <select name='search'>
            <option value='questions' >Questions</option>
            <option value='users' >Users</option>
          </select>
          <input type='text' name='filter' placeholder=' Search'/>
          <input type='submit'/>
        </form>
      </div>

      <div className = 'buttons'>
        <button>
          <NavLink to={`/users/${Auth.getTokenID()}`}>

            {Auth.getToken()}
          </NavLink>
        </button>

        <button>
          <NavLink onClick={this.props.function_logout_user} to = "/"> Log Out </NavLink>
        </button>

      </div>
    </div>
    )
  }


}
export default NavBar2
