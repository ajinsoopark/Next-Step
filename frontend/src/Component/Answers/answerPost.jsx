import React, { Component } from 'react'

import Likes from '../Likes/likesContainer'

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
                        <Likes 
                         answer_id={id}
                         fetchSortedAnswers={this.props.fetchSortedAnswers}
                         sortIndex={sortIndex}
                         categoryIndex={categoryIndex}/>
                        <div className='likeText'>{like_count ? like_count : 0} likes</div>
                    </div>
                </div>
                <div className='answerQuestion'>
                    { question_body }
                </div>
                <div className='answerBody'>
                    {answer_body}
                </div>
            </div>
        )
    }
}

export default AnswerPost