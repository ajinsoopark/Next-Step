import React, { Component } from 'react'
import axios from 'axios'
import "./progress.css"
import Auth from '../../Auth/Auth.js'


class Progress extends Component {
  constructor (props) {
    super(props)
    this.state={
      user:Auth.getTokenID(),
      questions:null,
      answers: 0
    }
  }
  componentDidMount  (){

    // get the userId & see how many questions they've answered

     axios.get(`/api/answers/count/user/${Auth.getTokenID()}`).then(
      (res)=>{
          this.setState({answers:+(res.data.count[0].count)})
        }
      )

    // get a count of all questions
     axios.get('/api/questions/count').then((res)=>{
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
      backgroundColor: '#FF3D57',
      borderRadius: '4px'
    }
    return (

      <div className='progressContainer'>
        <div className='completionText'>
          You have completed {answers} out of {questions} questions.
        </div>

        <div className='pbar'>
          <div className ='innerBar' style={style}>
          </div>
          <div className='percentDiv'>
            {completion}
        </div>
      </div>

        
      </div>
    )
  }
}

export default Progress
