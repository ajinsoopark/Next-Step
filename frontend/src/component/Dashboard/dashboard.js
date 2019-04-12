import React, { Component } from 'react'
import Progress from '../Progress/progress'

class Dashboard extends Component {
  // constructor (props) {
  //   super(props)
  // }

  
  componentWillMount() {
    this.props.function_checkStatus()
    
  }
  

  componentDidMount() {
    console.log(this.props.state.CurrentAutState)

  }
  

  render () {
    console.log(this.props.state.CurrentAutState.isLoggedin)
    return (

      <>
      <h1> WELCOME TO THE DASHBOARD!</h1>
      <Progress/>
      </>
    )
  }
}

export default Dashboard
