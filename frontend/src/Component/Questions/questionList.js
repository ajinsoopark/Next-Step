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
      categoryIndex: 0,
      allQuestions: [],
      userAnsweredList: [],
      selectedCategory: 'Leadership & Decision Making'
    }
  }

  componentDidMount = () => {
    this.getAllQuestions()
    this.getAllCategories()
    this.getUserAnsweredList()
  }

  getAllQuestions = () => {
    axios
    .get("/api/questions")
    .then(res => {
      this.setState({
        allQuestions:res.data.question
      })
    })
  }

    getUserAnsweredList = () => {
      let params = Auth.getTokenID()
    axios
    .get(`/api/questions/answers/${params}`,)
    .then(res => {
      this.setState({
        userAnsweredList:res.data.answered
      })
          })
  }


  getAllCategories = () => {
    axios
    .get("/api/categories")
    .then(res => {
      this.setState({
        allCategories:res.data.categories
      })
    })
  }

  handleChange = (tabIndex) => {
    let currentCategory = this.convertIndexToCat(tabIndex)
    this.setState({
      categoryIndex: tabIndex,
      selectedCategory: currentCategory
    })
  }

  convertIndexToCat = (index) => {
    switch (index) {
      case 0: return 'Leadership & Decision Making'
      case 1: return 'Interpersonal Skills'
      case 2: return 'Time & Stress Management'
      case 3: return 'Sales & Customer Service'
      case 4: return'Analytical Skills'
      case 5: return 'Miscellaneous'
      case 6: return 'General Qs'
    }
  }

render(){
  console.log(this.state)
  return(

        <div className="questionList">
          <div className="questionsTitle">
              <div className="questionsTitleChild">
                <h1>Questions</h1>
              </div>
          </div>
          <div>
            <DisplayAllCategories 
            userAnsweredList= {this.state.userAnsweredList}
            allCategories={this.state.allCategories} 
            categoryIndex={this.state.categoryIndex}
            allQuestions={this.state.allQuestions} 
            handleChange={this.handleChange} 
            selectedCategory={this.state.selectedCategory}/>
          </div>
        </div>
  )
}
}

