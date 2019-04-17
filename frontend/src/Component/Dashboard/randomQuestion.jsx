import React from 'react'
import { NavLink } from 'react-router-dom'

const RandomQuestion = ({ questionId, categoryId, questionBody, category }) => {

    return (
        <NavLink className='randomQuestionContainer' to={`/questions/${questionId}`}>
                <p className='randomQuestionP'>Random Question!</p>
                <div className='randomQ'>
                    <div className='dashCategory'>
                        <u>Category</u>: {category}
                    </div>
                    <div className='dashQuestion'>
                        {questionBody}
                    </div>
                </div>
        </NavLink>
    )
}

export default RandomQuestion