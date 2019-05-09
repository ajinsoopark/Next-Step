import React, { Component } from 'react'

import Feedback from '../Feedback/container'

class AnswerPost extends Component {

    render () {
        const { id, answer_body, question_body, category, user_id, like_count } = this.props

        return (
            <div className='answerQuestionPostContainer'>
                <div className='personalLikes'>
                    {`${like_count} ${parseInt(like_count) === 1 ? 'like' : 'likes'}`}
                </div>
                <div className='userCategoryLikes'>
                    <div className='categoryContainer'>
                        {category}
                    </div>
                </div>
                <div className='answerQuestion'>
                    { question_body }
                </div>
                <div className='answerBody'>
                    {answer_body}
                </div>
                <Feedback 
                 answer_id={id}
                 user_id={user_id}/>
            </div>
        )
    }
}

export default AnswerPost