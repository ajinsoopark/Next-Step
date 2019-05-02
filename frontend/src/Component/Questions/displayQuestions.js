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
                    <div className='checkSVG'>
                        <svg viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/></svg>
                    </div>
                    <div className='questionBody'>
                    {question.question_body}
                    </div>
                </div>
                 </NavLink>


            )
        }
        }

        else {
               if(question.category === selectedCategory){
            return(
                    <NavLink className='questionLink' key = {i} to={"/questions/" + question.id}>
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
