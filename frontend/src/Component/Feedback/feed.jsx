import React, { Component } from 'react'

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
        this.setState({ [event.target.name]: !this.state[event.target.name] })
    }

    render () {
        console.log(this.props)
        return (
            <div className='feedbackFeedContainer'>
                <div className='feedbackButtons'>
                    {this.toggleInputButton()}
                    {this.toggleFeedButton()}
                </div>
                <FeedbackInput 
                 expandedInput={this.state.expandedInput}
                 answer_id={this.props.answer_id}/>
                 <FeedbackPosts 
                  answer_id={this.props.answer_id}
                  expandedFeed={this.state.expandedFeed}/>
            </div>
        )
    }
}

export default FeedbackFeed