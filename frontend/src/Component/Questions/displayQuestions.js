import React from "react";


const DisplayQuestions = ({ allQuestions, selectedCategory }) => {
    return(allQuestions.map((question, i) => {
        if(question.category === selectedCategory){
            return(
            <div key={i}>
                <p>
                {question.question_body}
                </p>
            </div>
            )

        }
    }))
}

export default DisplayQuestions;