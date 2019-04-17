import React, { Component } from 'react'
import axios from 'axios';

class AnswerFeed extends Component {
    constructor () {
        super ()
        this.state = {
            currentUserAnswers: ''
        }
    }

    componentDidMount () {
        this.props.function_checkStatus()
    }

    displayCurrentUserAnswers = () => {
        if (this.props.state.CurrentAutState.userID) {
            let userId = this.props.state.CurrentAutState.userID
            axios.get(`/answers/${userId}`)
            .then(res => {
                console.log(res)
            })
        }
    }

    render () {
        console.log(this.props)
        return (
            <div className='answerFeedContainer'>
                currently logged in users answers
                {this.displayCurrentUserAnswers()}
            </div>
        )
    }

}

export default AnswerFeed