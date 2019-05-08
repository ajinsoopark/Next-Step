import React, {Component} from "react";
import Auth from "../../Auth/Auth"
import axios from "axios"
import { NavLink, withRouter } from 'react-router-dom'

import Answers from "./answers"
// import Audio from "../TTS/audio.js"

// import createPonyfill from 'web-speech-cognitive-services/lib/SpeechServices';

import "./question.css"

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      CurrentQuestion: null,
      CurrentAnswers: [],
      tabIndex: 0,
      userAnswer: [],
      questionId: ''
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
         CurrentAnswers: answersArray,
       })
     }).then(() => {
     }).catch((err) => {
       console.log(err)
     })
    :
    console.log("Is EMPTY?")
  }

  fetchQuestion = () => {
    let questionId = this.props.match.params.id
    axios.get(`/api/questions/${questionId}`)
    .then(res => {
      let question = res.data.question.question_body
      let id = res.data.question.id
      this.setState({ 
        CurrentQuestion: question,
        questionId: id
       })
    })
  }

  axiosGetUserAnswerByQuestion = () =>{
    let paramsID = this.props.match.params.id
    let userID = Auth.getTokenID()
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
          "Ocp-Apim-Subscription-Key": "87d77b525a614d25b2e8ff9674bb8070"
        }
      }).then(response => {
        return(response.data)
      })
}
   
async componentDidMount(){
  
  //get Answers based on params URL
  await this.axiosGetAnswers()
  await this.axiosGetUserAnswerByQuestion()
  await this.fetchQuestion()
  //   const ponyfill = await createPonyfill({
  //   'region': 'westus',
  //   'subscriptionKey': '3aef4d0fd6904d808bd091cc3ce75b92',
  //   'authorizationToken': this.getAccessToken('3aef4d0fd6904d808bd091cc3ce75b92')

  // })

  //   this.setState(() => ( {ponyfill} ))

}

handleForwardButton = (e) => {
  e.preventDefault()
  let nextQuestionId = this.state.questionId + 1
  this.props.history.push(`/questions/${nextQuestionId}`)
}

componentDidUpdate =  (prevProps) => {
  if (this.props.location.pathname !== prevProps.location.pathname) {
  this.axiosGetAnswers()
  this.axiosGetUserAnswerByQuestion()
  this.fetchQuestion()
  }
}


render(){
  const { questionId } = this.state

  return(
        <div className="Question">
        <h1 className = "QuestionTitle"> {this.state.CurrentQuestion} </h1> 
        {/* <Audio ponyfill = {this.state.ponyfill}CurrentQuestion ={this.state.CurrentQuestion}

        /> */}
        <div className='lastNextContainer'>
          <div className='backContainer'>
            { questionId === 1 ? '' : <NavLink className='backButton' to={`/questions/${questionId - 1}`}>Last Question</NavLink> }
          </div>
          <div className='nextContainer'>  
            { questionId === 128 ? '' : <NavLink className='nextButton' to={`/questions/${questionId + 1}`}>Next Question</NavLink> }
          </div>
          </div>
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




