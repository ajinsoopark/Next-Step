import React, {Component} from "react";
// import {Link} from "react-router-dom";
import axios from "axios"
import {withRouter} from "react-router"


class Question extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      CurrentQuestion: null,
      CurrentAnswers: []
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
      array.map((el,i )=> {
        return (
          <div className = "answers" key={i}> 
          <h2> By: {el.author} </h2>
          <p> Answer: {el.answer} </p>
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




  componentDidMount(){
    //get Answers based on params URL
    this.axiosGetAnswers()



  }

render(){
  return(
        <div className="Question">
        <h1>This is one Question Component</h1>
        <h1> {this.state.CurrentQuestion} </h1>
        {this.mapAnswersToRender(this.state.CurrentAnswers)}
        </div>
  )
}
}



export default withRouter(Question)
