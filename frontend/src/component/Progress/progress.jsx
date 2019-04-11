import React, { Component } from 'react'
import axios from 'axios'
import "./progress.css"


class Progress extends Component {
  constructor (props) {
    super(props)
    this.state={
      user:null,
      questions:null,
      answers: 0
    }
  }
  componentDidMount = async ()=>{
      // get the userId & see how many questions they've answered

    await axios.get("/users/log").then((res)=>{
      this.setState({
        user:res.data.userID
      })
    axios.get(`answers/count/user/${res.data.userID}`).then(
      (res)=>{
          this.setState({answers:+(res.data.count[0].count)})
        }
      )
    })

    // get a count of all questions
    await axios.get('/questions/count').then((res)=>{
      this.setState({
        questions:parseInt(res.data.count[0].count)
      })
    })
  }




  render () {
    const {questions,answers}=this.state
    let completion = Math.round((answers/questions)*100)+'%'

    const style = {
      width:completion,
      backgroundColor: 'yellow',
    }
    return (

      <div className='container'>
        <p>{completion} completed<br/>
        You have completed {answers} out of {questions} questions. <br/>
        KEEP IT UP!
        </p>
        <div className='pbar'>
          <div className ='innerBar' style={style}>
          </div>
        </div>
      </div>
    )
  }
}

export default Progress
