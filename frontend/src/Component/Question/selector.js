import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';

class Selection extends Component {
constructor (props) {
  super(props)
  this.state = {
    answer_body: ""
  }
}

onChange = (event) =>{
  this.setState({
    [event.target.name] : event.target.value
  })
  // console.log(this.state)
}
postAnswer = (event) => {
  event.preventDefault()
  axios.post('/answers',{
    user_id: this.props.currentUser,
    question_id: this.props.questionID,
    answer_body: this.state.answer_body
  }).then(()=>{
    this.props.axiosGetUserAnswerByQuestion()
    this.props.axiosGetAnswers()
  })
}

mapUserAnwerToRender = () => {
  if(!this.props.userAnswer){
    return (
      <div className = "userAnswerArea" >
      <form onChange = {this.onChange} onSubmit = {this.postAnswer}> 
        <textarea name = "answer_body"
        placeholder = "Enter your Answer Here"> 
      </textarea>
      <input type = "Submit" />
      </form>
      </div>
    
    )
  }
  else {
    return (
     <div className = "answer"> 
     <h2> {this.props.userAnswer.by_user} </h2>
     <p> {this.props.userAnswer.answer_body} </p>
     </div>
    )
  }
}

mapAnswersToRender= (array) =>{
  return( 
    array.map(el => {
      return (
        <div className = "answer" key ={el.author}> 
        <h2> {el.author} </h2>
        <p> {el.answer} </p>
        </div>
      )
    })
  )

}


render () {
  return (
      <>
        <Tabs selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.TabSelectedChange(tabIndex)}>

        <TabList> 
        <Tab> Your Answer </Tab>
        <Tab> Others Answers </Tab>
        </TabList>

        <TabPanel> 
        {this.mapUserAnwerToRender()}
        </TabPanel>
        
        <TabPanel> 
        {this.mapAnswersToRender(this.props.CurrentAnswers)}
        </TabPanel>
        
        
        </Tabs>
      </>
  )
}
}

export default Selection