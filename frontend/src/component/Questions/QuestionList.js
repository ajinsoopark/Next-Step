import React from "react";
import {Link} from "react-router-dom";

export class QuestionList extends React.Component {
  componentDidMount(){
    this.props.fetchQuestionsByCategory(this.props.match.params.id)
  }

  displayQuestions(){
    let questionsReturned;
    return (questionsReturned = this.props.questions.map((question, i) => {
      return (
        <div key={i} className="questions" >
        <Link to={"/questions/" + question.id}>
        {question.question_body}
        </Link>
        </div>
    )
  }))
}

render(){
  return(

        <div className="pinlist">
        {this.displayQuestions()}
        </div>
  )
}
}
