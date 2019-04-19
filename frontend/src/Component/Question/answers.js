import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import "./answers.css"



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
  axios.post('/answers',{
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
  console.log(this.state)
  return( 
    array.map((el,i) => {
      return (
        <div className = "Answers">
        <div className = "answer" key = {el.answer_id}> 
        <h2> {el.by_user} </h2>
        <p> {el.answer_body} </p>
        {this.deleteButton(i,el.answers_id)}
        </div>
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
  axios.delete(`/answers/${params}`).then(()=>{
    this.props.axiosGetUserAnswerByQuestion()
    })
  
}


mapUserAnswerBoxToRender = (array) => {
    return (
      <div className = "userAnswerArea" >
      <form onSubmit = {this.postAnswer}>
       <textarea onChange = {this.onChange}value = {this.state.answer_body} name = "answer_body"
        placeholder = "Enter your Answer Here">
      </textarea>
      <input type = "Submit" />
      </form>
      
      </div>

      
    )
  }

mapAnswersToRender= (array) =>{
  return(
    array.map(el => {
      return (
        <div className = "answer" key ={el.author}>
        <NavLink to={`/users/${el.authorId}`}>
          <h2> {el.author} </h2>
        </NavLink>
        <p> {el.answer} </p>
        </div>
      )
    })
  )

}

deleteButton = (i,answers_id) => {
console.log(this.state.xbutton) 
console.log(answers_id)
  if(parseInt(this.state.xbutton) === parseInt(answers_id)){
    return (
      <button value = {answers_id} className = "deleteButton" onClick = {this.deleteActionFinal} > 
    <img name = "xbutton"  src = "https://img.icons8.com/color/44/000000/ok.png" alt ="delete_icon"/ >

    <p> confirm? </p>
    </button>
    )
  }
  else {

  return( 
    <>
    <button value = {answers_id} className = "deleteButton" onClick = {this.deleteAction} > 
    <img name = "xbutton"  src = "https://img.icons8.com/color/44/000000/cancel.png" alt ="delete_icon"/ >

    <p> delete </p>
    </button>
    </>
  )
  }
}


render () {
  // console.log(this.props.CurrentAnswers)
  return (
      <>
        <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.TabSelectedChange(tabIndex)}>

        <TabList>
        <Tab> Your Answer </Tab>
        <Tab> Other Answers </Tab>
        </TabList>

        <TabPanel> 
        {this.mapUserAnswerBoxToRender()}
        {this.mapUserAnswerToRender(this.props.userAnswer)}

        </TabPanel>

        <TabPanel>
        {this.mapAnswersToRender(this.props.CurrentAnswers)}
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
