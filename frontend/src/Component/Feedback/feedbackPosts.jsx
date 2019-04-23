import React, { Component } from 'react'

import axios from 'axios';

class FeedbackPosts extends Component {
    constructor () {
        super ()
        this.state = {
            answerFeedback: ''
        }
    }

    fetchFeedback = () => {
        if (this.props.expandedFeed) {
            axios.get(`/feedbacks/answer/${this.props.answer_id}`)
            .then(res => {
                let feedback = res.data.feedback
            })
        }
    }

    render () {
        return (
            <div className='feedbackFeedContainer'>
                this is the feed for posts
            </div>
        )
    }
}

export default FeedbackPosts