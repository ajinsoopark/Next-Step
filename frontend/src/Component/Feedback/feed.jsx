import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../Auth/Auth'

import FeedbackInput from './input'
import FeedbackPosts from './feedbackPosts'
import './feedback.css'

class FeedbackFeed extends Component {
    constructor () {
        super ()
        this.state = {
            expandedFeedback: false,
            expandedInput: false,
            feedback: '',
        }
    }

    fetchFeedback = () => {
        if (this.state.expandedFeedback) {
            axios.get(`/api/feedbacks/answer/${this.props.answer_id}`)
            .then(res => {
                let feedback = res.data.feedbacks
                this.setState({ feedback: feedback })
            }).catch(err => console.log(err))
        }
    }

    toggleFeedButton = () => {
        if (!this.state.expandedFeedback) {
            return (
                <button 
                 className='feedButton fButton' 
                 name='expandedFeedback'
                 id='showFeed'
                 onClick={this.handleToggleButton}>
                    Feedback
                </button>
            )
        } else {
            return (
                <button 
                 className='feedButton fButton' 
                 name='expandedFeedback'
                 onClick={this.handleToggleButton}>
                    Hide Feedback
                </button>
            )
        }
    }

    handleToggleButton = (event) => {
        event.preventDefault()
        this.setState({
            expandedFeedback: !this.state.expandedFeedback,
            expandedInput: !this.state.expandedInput
        }, () => this.fetchFeedback())
    }

    render () {
        const { user_id } = this.props
        return (
            <div className='feedbackFeedContainer'>
                <div className='feedbackButtons'>
                    {this.toggleFeedButton()}
                </div>
                { user_id === parseInt(Auth.getTokenID()) ? 
                  '' : <FeedbackInput 
                  expandedInput={this.state.expandedInput}
                  answer_id={this.props.answer_id}
                  fetchFeedback={this.fetchFeedback}/>}
                 <FeedbackPosts 
                  expandedFeedback={this.state.expandedFeedback}
                  feedback={this.state.feedback}/>
            </div>
        )
    }
}

export default FeedbackFeed