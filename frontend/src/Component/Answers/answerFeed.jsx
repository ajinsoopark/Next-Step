import React, { Component } from 'react'

class AnswerFeed extends Component {
    constructor () {
        super ()
        this.state = {
            currentUserAnswers: ''
        }
    }

    render () {
        return (
            <div className='answerFeedContainer'>
                currently logged in users answers
            </div>
        )
    }

}

export default AnswerFeed