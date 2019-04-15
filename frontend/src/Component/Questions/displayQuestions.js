import React from "react";
import {Link} from "react-router-dom";


const DisplayQuestions = ({ allQuestions, selectedCategory }) => {
    return(allQuestions.map((question, i) => {
        if(question.category === selectedCategory){
            return(
            <div key={i}>
                <Link to={"/questions/" + question.id}>
                {question.question_body}
                </Link>
            </div>
            )

        }
    }))
}

export default DisplayQuestions;