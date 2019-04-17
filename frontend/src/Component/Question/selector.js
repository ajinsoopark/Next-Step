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

mapUserAnwerToRender = () => {
  if(true){
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
        <Tab> All Answers </Tab>
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