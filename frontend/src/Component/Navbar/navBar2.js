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
      filter: '',
      inputFocus: false,
      error: false,
      inputPlaceholder: ' '
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
      const{filter}=this.state
      let test = filter
      test = test.split(' ').map(el=>el.toLowerCase())
      this.props.function_search( test.shift())
      this.props.history.push(`/search/${filter}`)
      // this.setState({ filter: '' })
    } else {
      this.setState({ error: true })
    }

  }

  handleSearchFocus = () => this.setState({ inputPlaceholder: 'Search for Users or Keywords...' })
  handleSearchFocusOut = () => this.setState({ inputPlaceholder: ' ' })

  render () {
    // console.log(this.state.filter)
    const searchSVG = <svg className='searchSVG' viewBox="0 0 24 24"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"/></svg>

    return(
    <div className='Menu2'>
      <div className = 'search'>
        {/* <p>Search Option:</p> */}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} autoComplete="off">
          {/* <select className='searchMenu' name='search'>
            <option className='options' value='questions' >Questions</option>
            <option className='options' value='users' >Users</option>
          </select> */}
          <label htmlFor='searchInput' className='searchLabel'>
            <input
             autoComplete='off'
             className='searchInput'
             id='searchInput'
             onChange={this.handleChange}
             value={this.state.filter}
             onFocus={this.handleSearchFocus}
             onBlur={this.handleSearchFocusOut}
             type='text'
             name='filter'
             placeholder={this.state.inputPlaceholder}/>
            <span className="searchSpan">{searchSVG}  Search</span>
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
