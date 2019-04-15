import React from 'react'

const RandomQuestion = ({ questionId, categoryId, questionBody, category }) => {

    return (
        <div className='randomQuestionContainer'>
            <p>Random Question!</p>
            <div className='randomQ'>
                <div className='dashCategory'>
                    {category}
                </div>
                <div className='dashQuestion'>
                    {questionBody}
                </div>
            </div>
        </div>
    )
}

export default RandomQuestion