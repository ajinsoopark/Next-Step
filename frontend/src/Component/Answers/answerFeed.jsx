import React, { Component } from 'react'
import axios from 'axios';

import AnswerPost from './answerPost'

class AnswerFeed extends Component {
    constructor () {
        super ()
        this.state = {
            currentUserAnswers: ''
        }
    }

    componentDidMount () {
        this.props.function_checkStatus()
        axios.get(`/answers/withlikes/${localStorage.tokenID}`)
            .then(res => {
                let answers = res.data.answers
                this.setState({
                    currentUserAnswers: answers
                })
            }).catch(err => console.log(err))
    }

    displayAnswers = () => {
        this.state.currentUserAnswers.map(answerObj => {
            return (
                <AnswerPost
                 key={answerObj.id}
                 id={answerObj.id}
                 user_id={answerObj.user_id}
                 answer_body={answerObj.answer_body}
                 username={answerObj.username}
                 question_body={answerObj.question_body}
                 category={answerObj.category}
                 like_count={answerObj.like_count}/>
            )
        })
    }

    render () {
        const displayAnswers = this.state.currentUserAnswers ?
                               this.state.currentUserAnswers.map(answerObj => {
                                return (
                                    <AnswerPost
                                     key={answerObj.id}
                                     id={answerObj.id}
                                     user_id={answerObj.user_id}
                                     answer_body={answerObj.answer_body}
                                     username={answerObj.username}
                                     question_body={answerObj.question_body}
                                     category={answerObj.category}
                                     like_count={answerObj.like_count}/>
                                )
                            }) : ''

        return (
            <div className='answerFeedContainer'>
                <div className='personalAnswers'>
                    Personal Answers
                </div>
                {displayAnswers}
            </div>
        )
    }

}

export default AnswerFeed