import React, {Component} from "react";
// import {Link} from "react-router-dom";
import Auth from "../../Auth/Auth"
import axios from "axios"
import {withRouter} from "react-router"

import Selection from "./selector"

import "./question.css"

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      CurrentQuestion: null,
      CurrentAnswers: [],
      tabIndex: 0
    })
  }

  mapAnswersToState = (array) =>{
    return array.map(el => {
      return({
        author: el.by_user,
        answer: el.answer_body
      })
  })}

  axiosGetAnswers = () =>{
    let paramsID = this.props.match.params.id

    paramsID ? 
    
     axios.get(`/answers/${paramsID}/question`).then((res)=>{
       let answersArray = this.mapAnswersToState(res.data.answers)
       this.setState({
         CurrentQuestion: res.data.answers[0].question_body,
         CurrentAnswers: answersArray
       })
     }).then(() => {
      //  console.log(this.state)
     }).catch((err) => {
       console.log(err)
     })
    :  
    console.log("Is EMPTY?")
  }

  axiosGetUserAnswerByQuestion = () =>{
    let paramsID = this.props.match.params.id
    let userID = Auth.getTokenID()
    // console.log(userID)
    paramsID ? 
   //THIS IS AXIOS BY A QUERY
     axios.get(`/answers/byuser/byquestion`,
     {
       params : 
       {userID : userID,
       questionID: paramsID}
     }
     
     ).then((res)=>{
       this.setState({
         userAnswerStatus: res.data.status,
         userAnswer: res.data.answer
       })
     }).then(() => {
      //  console.log(this.state)
     }).catch((err) => {
       console.log(err)
     })
    :  
    console.log("Is EMPTY?")
  }

  
  TabSelectedChange = (tabIndex) =>{
    this.setState({
      tabIndex: tabIndex
    })
    console.log(this.state)
  }
  
  
  componentDidMount(){
    

    //get Answers based on params URL
    this.axiosGetAnswers()
    this.axiosGetUserAnswerByQuestion()

  }

render(){
  console.log(this.props)
    console.log(this.state)
  return(
        <div className="Question">
        <h1 className = "QuestionTitle"> {this.state.CurrentQuestion} </h1>
        <div className = "Selection" >
          <Selection tabIndex = {this.state.tabIndex} TabSelectedChange = {this.TabSelectedChange}
          CurrentAnswers = {this.state.CurrentAnswers}
          userAnswer = {this.state.userAnswer}
          currentUser = {Auth.getTokenID()}
          questionID = {this.props.match.params.id}
          axiosGetUserAnswerByQuestion = {this.axiosGetUserAnswerByQuestion}
           axiosGetAnswers = {this.axiosGetAnswers}          
          
        
          />
        </div>

        </div>
  )
}
}



export default withRouter(Question)
