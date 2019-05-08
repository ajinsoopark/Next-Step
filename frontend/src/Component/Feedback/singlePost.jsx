import React from 'react'
import { NavLink } from 'react-router-dom'
import TimeAgo from 'react-timeago'

const SinglePost = ({ id, answer_id, user_id, username, feedback_body, created_at }) => {

    return (
        <div className='singleFeedbackContainer'>
            <span>
                <NavLink to={`/users/${user_id}`}>{username}</NavLink>
            </span>
            <TimeAgo date={created_at}/>

            <div className='feedbackBodyContainer'>
                {feedback_body}
            </div>
        </div>
    )
}

export default SinglePost