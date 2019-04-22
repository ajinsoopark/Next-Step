import React, { Component } from 'react'

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

    render () {
        const { expandedInput } = this.props
        const { feedbackInput, error } = this.state

        return (
            <div className={ this.containerClass(expandedInput) }>
                <small className='commentError error'>
                    { error ? '*Do not leave blank.' : '' }
                </small>
                <form className='feedbackForm'>
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