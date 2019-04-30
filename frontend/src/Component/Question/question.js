import React, {Component} from "react";
// import {Link} from "react-router-dom";
import Auth from "../../Auth/Auth"
import axios from "axios"
import {withRouter} from "react-router"


import Answers from "./answers"
import Audio from "../TTS/audio.js"

import createPonyfill from 'web-speech-cognitive-services/lib/SpeechServices';


import "./question.css"

// const rp = require('request-promise')

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      CurrentQuestion: null,
      CurrentAnswers: [],
      tabIndex: 0,
      userAnswer: []
        })
  }

  mapAnswersToState = (array) =>{
    return array.map(el => {
      return({
        author: el.by_user,
        answer: el.answer_body,
        authorId: el.user_id,
        answersId: el.answers_id,
        likeCount: el.like_count
      })
  })}

  axiosGetAnswers = () =>{
    let paramsID = this.props.match.params.id
    let userID = Auth.getTokenID()
    paramsID ?
     axios.get(`/api/answers/question`,{
       params: 
       {
         id: paramsID,
         user_id: userID
       }
     }).then((res)=>{
       let answersArray = this.mapAnswersToState(res.data.answers)
       this.setState({
         CurrentQuestion: res.data.answers[0].question_body,
         CurrentAnswers: answersArray
       })
     }).then(() => {
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
     axios.get(`/api/answers/byuser/byquestion`,
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
  }

  getAccessToken = (subscriptionKey) => {
  axios({
        method: "post",
        url:
          "https://westus.api.cognitive.microsoft.com/sts/v1.0/issuetoken",
        headers: {
          "Ocp-Apim-Subscription-Key": "3aef4d0fd6904d808bd091cc3ce75b92"
        }
      }).then(response => {
        return(response.data)
      })

}
   

  async componentDidMount(){
    
    //get Answers based on params URL
    await this.axiosGetAnswers()
    await this.axiosGetUserAnswerByQuestion()

      const ponyfill = await createPonyfill({
      'region': 'westus',
      'subscriptionKey': '3aef4d0fd6904d808bd091cc3ce75b92',
      'authorizationToken': this.getAccessToken('3aef4d0fd6904d808bd091cc3ce75b92')

    })

     this.setState(() => ( {ponyfill} ))

  }


render(){
  console.log(this.state)
  
    return(
        <div className="Question">
        <h1 className = "QuestionTitle"> {this.state.CurrentQuestion} </h1> 
        <Audio ponyfill = {this.state.ponyfill}CurrentQuestion ={this.state.CurrentQuestion}

        />
        <div className = "Answers" >
          <Answers tabIndex = {this.state.tabIndex} TabSelectedChange = {this.TabSelectedChange}
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




