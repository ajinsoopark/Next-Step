import React from "react";
import {Link} from "react-router-dom";
import "./questions.css"


const DisplayQuestions = ({ allQuestions, selectedCategory,userAnsweredList}) => {
    return(allQuestions.map((question, i) => {

        if(userAnsweredList.includes(question.id)){
                   if(question.category === selectedCategory){
            return(
                <Link  to={"/questions/" + question.id}>
                
                <div key = {i} className = "questionsParent">
                  <img className = "answered" src = "https://img.icons8.com/color/45/000000/checked-checkbox.png" alt = "answered_logo" />
                 {question.question_body}
                </div>
                 </Link>
                  
                    
            )
        }
        }

        else {
               if(question.category === selectedCategory){
            return(
                    <Link key = {i} className = "questionsParent" to={"/questions/" + question.id}>
                    
                    {question.question_body}


                    </Link>
            )
        }


        }

     
    }))
}

export default DisplayQuestions;
