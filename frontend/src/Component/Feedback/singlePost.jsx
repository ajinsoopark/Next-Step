import React from 'react'

const SinglePost = ({ id, answer_id, user_id, username, feedback_body }) => {

    return (
        <div className='singleFeedbackContainer'>
            <h3>{username}</h3>
            <div className='feedbackBodyContainer'>
                {feedback_body}
            </div>
        </div>
    )
}

export default SinglePost