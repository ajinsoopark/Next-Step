import React from 'react'
import { NavLink } from 'react-router-dom'
import './randomQuestion.css'

const RandomQuestion = ({ questionId, categoryId, questionBody, category }) => {

    return (
    <NavLink to={`/questions/${questionId}`}>
         <div className='randomQuestionContainer' >
            <div className='randomQ'>
                <div className='randomQuestionText'>
                    Random Question!
                </div>
                <div className='dashCategory'>
                     <u>Category</u>: {category}
                </div>
                <div className='dashQuestion'>
                     {questionBody}
                </div>
            </div>
         </div>
     </NavLink>
    )
}

export default RandomQuestion