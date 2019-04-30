import React, { Component } from 'react'
import axios from 'axios'

import FeedbackInput from './input'
import FeedbackPosts from './feedbackPosts'
import './feedback.css'

class FeedbackFeed extends Component {
    constructor () {
        super ()
        this.state = {
            expandedFeed: false,
            expandedInput: false,
            feedback: '',
        }
    }

    fetchFeedback = () => {
        if (this.state.expandedFeed) {
            axios.get(`/api/feedbacks/answer/${this.props.answer_id}`)
            .then(res => {
                let feedback = res.data.feedbacks
                this.setState({ feedback: feedback })
            }).catch(err => console.log(err))
        }
    }

    toggleInputButton = () => {
        if (!this.state.expandedInput) {
            return (
                <button 
                 className='feedbackInputToggle fButton' 
                 name='expandedInput'
                 onClick={this.handleToggleButton}>
                    Add Feedback
                </button>
            )
        } else {
            return (
                <button 
                 className='feedbackInputToggle fButton' 
                 name='expandedInput'
                 onClick={this.handleToggleButton}>
                    Cancel Feedback
                </button>
            )
        }
    }

    toggleFeedButton = () => {
        if (!this.state.expandedFeed) {
            return (
                <button 
                 className='feedButton fButton' 
                 name='expandedFeed'
                 id='showFeed'
                 onClick={this.handleToggleButton}>
                    Show Feedback
                </button>
            )
        } else {
            return (
                <button 
                 className='feedButton fButton' 
                 name='expandedFeed'
                 onClick={this.handleToggleButton}>
                    Hide Feedback
                </button>
            )
        }
    }

    handleToggleButton = (event) => {
        event.preventDefault()
        if (event.target.id === 'showFeed') {
            this.setState({ [event.target.name]: !this.state[event.target.name] }, () => {
                this.fetchFeedback()
            })
        } else {
            this.setState({ [event.target.name]: !this.state[event.target.name] })
        }
    }

    render () {
        console.log(this.state)
        return (
            <div className='feedbackFeedContainer'>
                <div className='feedbackButtons'>
                    {this.toggleInputButton()}
                    {this.toggleFeedButton()}
                </div>
                <FeedbackInput 
                 expandedInput={this.state.expandedInput}
                 answer_id={this.props.answer_id}
                 fetchFeedback={this.fetchFeedback}/>
                 <FeedbackPosts 
                  expandedFeed={this.state.expandedFeed}
                  feedback={this.state.feedback}/>
            </div>
        )
    }
}

export default FeedbackFeed