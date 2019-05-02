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
      filter: null,
      inputFocus: false
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

  render () {

    return(
    <div className='Menu2'>

      <div className = 'search'>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <select className='searchMenu' name='search'>
            <option value='questions' >Questions</option>
            <option value='users' >Users</option>
          </select>
          <label htmlFor='searchInput' className='searchLabel'>
            <input className='searchInput' id='searchInput' type='text' name='filter' placeholder='&nbsp;'/>
            <span className="searchSpan">Search</span>
            <span className='bottomBorder'></span>
          </label>
        </form>
      </div>
    </div>
    )
  }


}
export default NavBar2
