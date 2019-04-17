import React, { Component } from 'react'
import axios from 'axios'

import Progress from '../Progress/progress'
import DashSplash from './dashSplash'
import RandomQuestion from './randomQuestion'


import './dashboard.css'

class Dashboard extends Component {
    constructor () {
        super ()
        this.state = {
            questionId: '',
            categoryId: '',
            questionBody: '',
            category: ''
        }
    }
    componentDidMount () {
        console.log(this.props)
       this.props.function_checkStatus()
       axios.get('/questions/random')
       .then(res => {
           let randomQuestion = res.data.question[0]
           this.setState({
               questionId: randomQuestion.id,
               categoryId: randomQuestion.category_id,
               questionBody: randomQuestion.question_body,
               category: randomQuestion.category
           })
       })
    }

    render () {
        const { questionId, categoryId, questionBody, category } = this.state
        return (
            <div className='dashboardContainer'>
                <div className='splashAndQuestion'>
                    <DashSplash userName={ this.props.state.CurrentAutState.username }/>
                    <RandomQuestion 
                     questionId={questionId}
                     categoryId={categoryId}
                     questionBody={questionBody}
                     category={category}/>
                </div>
                <Progress/>
            </div>
        )
    }
}

export default Dashboard