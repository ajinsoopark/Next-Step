import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'

// this is when the user is logged in

const logo = require("../../Images/nextStepLogo.png")

class NavBar2 extends Component{
  constructor (props) {
    super(props)
    this.state={
      search:'users',
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

    this.setState({
      filter:null
    })
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
          <select onChange={this.handleChange} name='search'>
            <option value='users' >users</option>
            <option value='questions' >questions</option>
          </select>
          <input type='text' name='filter' />
          <input type='submit'/>
        </form>
      </div>
      <div className = 'buttons'>
        <button>
          <NavLink to={`/users/${this.props.state.CurrentAutState.userID}`}>
            {this.props.state.CurrentAutState.username}
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
