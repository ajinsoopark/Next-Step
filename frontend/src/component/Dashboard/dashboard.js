import React, { Component } from 'react'
import Axios from 'axios';

class Dashboard extends Component {
  constructor (props) {
    super(props)
    
  }

  getAllQuestions = () => {
    Axios.get("/questions").then((res)=>{
      console.log(res)
    })
  }

  componentDidMount(){
    this.getAllQuestions()
  }
  
  render () {
    return (

      <>
      <h1> WELCOME TO THE DASHBOARD!</h1>
      </>
    )
  }
}

export default Dashboard