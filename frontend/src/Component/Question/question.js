import React, {Component} from "react";
// import {Link} from "react-router-dom";
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


  mapAnswersToRender= (array) =>{
    return( 
      array.map(el => {
        return (
          <div className = "answer"> 
          <h2> {el.author} </h2>
          <p> {el.answer} </p>
          </div>
        )
      })
    )
   
  }

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

  
  TabSelectedChange = (tabIndex) =>{
    this.setState({
      tabIndex: tabIndex
    })
    console.log(this.state)
  }
  
  
  componentDidMount(){
    //get Answers based on params URL
    this.axiosGetAnswers()



  }

render(){
  console.log(this.state)
  return(
        <div className="Question">
        <h1 className = "QuestionTitle"> {this.state.CurrentQuestion} </h1>
        <div className = "Selection" >
          <Selection tabIndex = {this.state.tabIndex} TabSelectedChange = {this.TabSelectedChange} />
        </div>

        <div className = "Answers">
        
        {this.mapAnswersToRender(this.state.CurrentAnswers)}
        </div>


        </div>
  )
}
}



export default withRouter(Question)
