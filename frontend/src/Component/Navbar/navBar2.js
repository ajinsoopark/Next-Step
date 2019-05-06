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
      filter: '',
      inputFocus: false,
      error: false
    }
  }

  handleChange  =(e)=>{
    this.setState({
      error: false,
      [e.target.name]:e.target.value
    })
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    if (this.state.filter) {
      const{filter,search}=this.state
      this.props.function_search(search, filter)
      this.props.history.push(`/search/${search}/${filter}`)
      this.setState({ filter: '' })
    } else {
      this.setState({ error: true })
    }

  }

  render () {
    console.log(this.props)
    return(
    <div className='Menu2'>
      <div className = 'search'>
        <p>Search Option:</p>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} autoComplete="off">
          <select className='searchMenu' name='search'>
            <option className='options' value='questions' >Questions</option>
            <option className='options' value='users' >Users</option>
          </select>
          <label htmlFor='searchInput' className='searchLabel'>
            <input autoComplete='off' className='searchInput' id='searchInput' onChange={this.handleChange} value={this.state.filter} type='text' name='filter' placeholder='&nbsp;'/>
            <span className="searchSpan">Search</span>
            <span className='bottomBorder'></span>
          </label>
        </form>
        {this.state.error ? <small className='searchError'>Please Do Not Leave Blank.</small> : ''}
      </div>
    </div>
    )
  }


}
export default NavBar2
