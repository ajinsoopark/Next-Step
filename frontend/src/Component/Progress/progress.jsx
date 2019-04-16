import React, { Component } from 'react'
import axios from 'axios'
import "./progress.css"
import Auth from '../../Auth/Auth.js'


class Progress extends Component {
  constructor (props) {
    super(props)
    this.state={
      user:null,
      questions:null,
      answers: 0
    }
  }
  componentDidMount  (){

    // get the userId & see how many questions they've answered
     this.setState({
        user:Auth.getTokenID()
      })

     axios.get(`answers/count/user/${Auth.getTokenID()}`).then(
      (res)=>{
          this.setState({answers:+(res.data.count[0].count)})
        }
      )

    // get a count of all questions
     axios.get('/questions/count').then((res)=>{
      this.setState({
        questions:parseInt(res.data.count[0].count)
      })
    })
  }




  render () {
    // console.log(this.props)
    const {questions,answers}=this.state
    let completion = Math.round((answers/questions)*100)+'%'

    const style = {
      width:completion,
      backgroundColor: 'yellow',
    }
    return (

      <div className='progressContainer'>
        <p>
          You have completed {answers} out of {questions} questions.
        </p>
        <div className='pbar'>
          <div className ='innerBar' style={style}>
          </div>
        </div>
        <div className='percentDiv'>
          <p>{completion}</p>
        </div>
      </div>
    )
  }
}

export default Progress
