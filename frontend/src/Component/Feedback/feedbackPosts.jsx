import React, { Component } from 'react'

import SinglePost from './singlePost'

class FeedbackPosts extends Component {

    containerClass = (isExpanded) => {
        const componentClass = ['feedContainer']
        if (isExpanded) {
            componentClass.push('showFeed')
        }
        let className = componentClass.join(' ')
        return className
    }

    render () {
        const { feedback, expandedFeedback } = this.props
        const feedbackPosts = feedback ? 
                              feedback.map(feedbackObj => {
                                  return (
                                    <SinglePost 
                                     key={feedbackObj.id}
                                     id={feedbackObj.id}
                                     user_id={feedbackObj.user_id}
                                     answer_id={feedbackObj.answer_id}
                                     feedback_body={feedbackObj.feedback_body}
                                     username={feedbackObj.username}
                                     created_at={feedbackObj.created_at}/>
                                  )
                              }) : ''

        return (
            <div className={ this.containerClass(expandedFeedback) }>
                <div className='feedbackP'>Feedback</div>
                <div className='feedPosts'>
                    {feedbackPosts}
                </div>
            </div>
        )
    }
}

export default FeedbackPosts