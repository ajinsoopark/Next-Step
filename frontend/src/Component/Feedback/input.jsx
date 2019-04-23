import React, { Component } from 'react'

import Auth from '../../Auth/Auth'
import axios from 'axios';

class FeedbackInput extends Component {
    constructor () {
        super ()
        this.state = {
            error: false,
            feedbackInput: ''
        }
    }

    containerClass = (isExpanded) => {
        const componentClass = ['feedbackInputContainer']
        if (isExpanded) {
            componentClass.push('show')
        }
        let className = componentClass.join(' ')
        return className
    }

    handleTextChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value,
            error: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let feedbackObj = {
            user_id: parseInt(Auth.getTokenID()),
            answer_id: this.props.answer_id,
            feedback_body: this.state.feedbackInput
        }
        if (this.state.feedbackInput) {
            axios.post('/feedbacks', feedbackObj)
            .then(() => {
                this.setState({
                    feedbackInput: '',
                    error: false
                })
            }).catch(err => console.log(err))
        } else this.setState({ error: true })
    }

    render () {
        const { expandedInput } = this.props
        const { feedbackInput, error } = this.state

        return (
            <div className={ this.containerClass(expandedInput) }>
                <small className='error'>
                    { error ? '*Do not leave blank.' : '' }
                </small>
                <form className='feedbackForm' onSubmit={ this.handleSubmit }>
                    <textarea 
                     className='feedbackInput'
                     value={feedbackInput}
                     name='feedbackInput'
                     placeholder='Feedback...'
                     onChange={this.handleTextChange}/>
                    <input className='feedbackInputButton' type='submit' value='Add Feedback'/>
                </form>
            </div>
        )
    }
}

export default FeedbackInput