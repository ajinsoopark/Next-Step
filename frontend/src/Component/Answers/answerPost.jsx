import React, { Component } from 'react'

import Feedback from '../Feedback/container'

class AnswerPost extends Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        const { id, answer_body, question_body, category, like_count, sortIndex, categoryIndex } = this.props

        return (
            <div className='answerQuestionPostContainer'>
                <div className='userCategoryLikes'>
                    <div className='categoryContainer'>
                        {category}
                    </div>
                    <div className='answerLikeContainer'>
                        <div className='likeText'>
                        {`${like_count} ${parseInt(like_count) === 1 ? 'like' : 'likes'}`}
                        </div>
                    </div>
                </div>
                <div className='answerQuestion'>
                    { question_body }
                </div>
                <div className='answerBody'>
                    {answer_body}
                </div>
                <Feedback 
                 answer_id={id}/>
            </div>
        )
    }
}

export default AnswerPost