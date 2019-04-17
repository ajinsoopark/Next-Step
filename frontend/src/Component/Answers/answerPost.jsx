import React, { Component } from 'react'

class AnswerPost extends Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        const { id, user_id, answer_body, username, question_body, category, like_count } = this.props

        return (
            <div className='answerQuestionPostContainer'>
                <div className='answerQuestion'>
                    { question_body }
                </div>
                <div className='userCategoryLikes'>
                    <div className='userNameContainer'>
                        {username}
                    </div>
                    <div className='categoryContainer'>
                        {category}
                    </div>
                    <div className='likeContainer'>
                        {like_count ? like_count : 0}
                    </div>
                </div>
                <div className='answerBody'>
                    {answer_body}
                </div>
            </div>
        )
    }
}

export default AnswerPost