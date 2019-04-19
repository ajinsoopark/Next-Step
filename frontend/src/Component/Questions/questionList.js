import React from "react"
import axios from "axios"
import Auth from "../../Auth/Auth"
import DisplayAllCategories from "./displayAllCategories"
import "./categories.css"

export default class QuestionList extends React.Component {
  constructor(){
    super()
    this.state = {
      allCategories: [],
      selectedCategory: "Leadership & Decision Making",
      allQuestions: [],
      userAnsweredList: []
    }
  }

  componentDidMount = () => {
    this.getAllQuestions()
    this.getAllCategories()
    this.getUserAnsweredList()
  }

  getAllQuestions = () => {
    axios
    .get("/questions")
    .then(res => {
      console.log(res.data.question)
      this.setState({
        allQuestions:res.data.question
      })
    })
  }

    getUserAnsweredList = () => {
      let params = Auth.getTokenID()
    axios
    .get(`/questions/answers/${params}`,)
    .then(res => {
      this.setState({
        userAnsweredList:res.data.answered
      })
      
      // console.log(this.state)
    })
  }


  getAllCategories = () => {
    axios
    .get("/categories")
    .then(res => {
      console.log("this is ALL Categories: ", res)
      this.setState({
        allCategories:res.data.categories
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      selectedCategory: e.target.value
    })
  }

render(){
  return(

        <div className="questionList">
          <div className="questionsTitle">
              <div className="questionsTitleChild">
                <h1>Questions</h1>
              </div>
          </div>
          <div>
            <DisplayAllCategories 
            userAnsweredList= {this.state.userAnsweredList}allCategories={this.state.allCategories} selectedCategory={this.state.selectedCategory} allQuestions={this.state.allQuestions} handleChange={this.handleChange} />
          </div>
        </div>
  )
}
}

