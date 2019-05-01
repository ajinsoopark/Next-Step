import React from "react";
import {NavLink} from "react-router-dom";
import "./questions.css"


const DisplayQuestions = ({ allQuestions, selectedCategory , userAnsweredList}) => {
    return(allQuestions.map((question, i) => {

        if(userAnsweredList.includes(question.id)){
                   if(question.category === selectedCategory){
            return(
                <NavLink key = {i} to={"/questions/" + question.id}>

                <div  className = "questionsParent">
                  <img className = "answered" src = "https://img.icons8.com/color/45/000000/checked-checkbox.png" alt = "answered_logo" />
                 {question.question_body}
                </div>
                 </NavLink>


            )
        }
        }

        else {
               if(question.category === selectedCategory){
            return(
                    <NavLink key = {i} to={"/questions/" + question.id}>
                        <div className = "questionsParent">
                            {question.question_body}
                        </div>

                    </NavLink>
            )
        }


        }


    }))
}

export default DisplayQuestions;
