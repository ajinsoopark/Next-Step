import React from "react";
import {Link} from "react-router-dom";
import "./questions.css"


const DisplayQuestions = ({ allQuestions, selectedCategory }) => {
    return(allQuestions.map((question, i) => {
        if(question.category === selectedCategory){
            return(
            <div className="questionsParent" key={i}>
                <div key={i} className="questionBody">
                    <Link to={"/questions/" + question.id}>
                        <div className="questionBodyGC">{question.question_body}</div>
                    </Link>
                </div>
            </div>
            )

        }
    }))
}

export default DisplayQuestions;
