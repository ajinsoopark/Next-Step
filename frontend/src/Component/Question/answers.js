import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Avatar from "react-avatar"
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import "./answers.css"
import Likes from '../Likes/likes'
import Auth from '../../Auth/Auth';
import Feedback from '../Feedback/container'

const deleteSVG = <svg className='deleteIcon' viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
const confirmSVG = <svg className='confirmIcon' viewBox="0 0 24 24"><path d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"/></svg>


class Answers extends Component {
constructor (props) {
  super(props)
  this.state = {
    answer_body: "",
    xbutton: "140"
  }
}

onChange = (event) =>{
  this.setState({
    [event.target.name] : event.target.value
  })
}
postAnswer = (event) => {
  event.preventDefault()

  if(this.state.answer_body.length > 20){
  axios.post('/api/answers',{
    user_id: this.props.currentUser,
    question_id: this.props.questionID,
    answer_body: this.state.answer_body
  }).then(()=>{
    this.props.axiosGetUserAnswerByQuestion()
    this.props.axiosGetAnswers()
    this.setState({
      answer_body: ""
    })
  })
  }
}

mapUserAnswerToRender = (array) => {
  return(
    array.map((el,i) => {
      return (
        <div key={i} className = "answer">
          <div className='avatarLikes'>
          <h2>
          <Avatar size = "25" textSizeRatio = {2} max-initial = {3} name= {el.by_user}  round = {true}/>
          </h2>
          <div className='answerLikesContainer'>
            {`${el.like_count} ${parseInt(el.like_count) === 1 ? 'like' : 'likes'}`}
          </div>
        </div>
        <p> {el.answer_body} </p>
        <Feedback 
         answer_id={el.answers_id}
         user_id={el.user_id}/>
        {this.deleteButton(i,el.answers_id)}
        </div>
      )
    })
  )
}


deleteAction = (event) => {
  this.setState({
    xbutton: event.currentTarget.value
  })

}

deleteActionFinal = (event) => {
  let params = this.state.xbutton
  axios.delete(`/api/answers/${params}`).then(()=>{
    this.props.axiosGetUserAnswerByQuestion()
    })

}


mapUserAnswerBoxToRender = (array) => {
    return (
      <div className = "userAnswerArea" >
      <form onSubmit = {this.postAnswer}>
       <textarea className='answerInput' onChange = {this.onChange}value = {this.state.answer_body} name = "answer_body"
        placeholder = "Enter your Answer Here">
      </textarea>
      <input type = "Submit" />
      </form>

      </div>


    )
  }

mapAnswersToRender= (array) =>{
  if (array.length === 0) {
    return (
      <div className='emptyAnswers'>
        Be the first to answer this question.
      </div>
    )
  } else {
    return(
      array.map((el, i) => {
        return (
          <div className = "answer" key ={i}>
          <div className='avatarLikes'>
            <NavLink to={`/users/${el.authorId}`}>
              <h2> <Avatar size = "25" textSizeRatio = {2} max-initial = {2} name= {el.author} round = {true}/> {el.author} </h2>
            </NavLink>
            <div className='answerLikesContainer'>
              { el.authorId === parseInt(Auth.getTokenID()) ?
                '' : <Likes
                      axiosGetAnswers={this.props.axiosGetAnswers}
                      axiosGetUserAnswerByQuestion={this.props.axiosGetUserAnswerByQuestion}
                      answer_id={el.answersId}/> }
              {`${el.likeCount} ${parseInt(el.likeCount) === 1 ? 'like' : 'likes'}`}
            </div>
          </div>
          <p> {el.answer} </p>
          <Feedback 
           answer_id={el.answersId}
           user_id={el.authorId}/>
          </div>
        )
      })
    )
  }
}

deleteButton = (i,answers_id) => {
  if(parseInt(this.state.xbutton) === parseInt(answers_id)){
    return (
      <button value = {answers_id} className = "deleteButton" onClick = {this.deleteActionFinal} >
      {confirmSVG}
    <p> confirm </p>
    </button>
    )
  }
  else {

  return(
    <>
    <button value = {answers_id} className = "deleteButton" onClick = {this.deleteAction} >
      {deleteSVG}
    <p> delete </p>
    </button>
    </>
  )
  }
}


render () {
  return (
      <>
        <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.TabSelectedChange(tabIndex)}>

        <TabList>
        <Tab> Your Answer </Tab>
        <Tab> All Answers </Tab>
        </TabList>

        <TabPanel>
        {this.mapUserAnswerBoxToRender()}
        <div className= "YourAnswers" >{this.mapUserAnswerToRender(this.props.userAnswer)} </div>
        </TabPanel>

        <TabPanel>
        <div className = "AllAnswers">
        {this.mapAnswersToRender(this.props.CurrentAnswers)}
        </div>
        </TabPanel>

        </Tabs>
      </>
  )
}

}

export default Answers






    // <TextField
    //     id="standard-multiline-flexible"
    //     label="Your Answer"
    //     multiline
    //     rowsMax="10"
    //     value={this.state.answer_body}
    //     name = "answer_body"
    //     className= "enter_text"
    //     margin="none"
    //     fullWidth
    //   />
