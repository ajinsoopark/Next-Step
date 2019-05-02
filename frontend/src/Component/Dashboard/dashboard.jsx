import React, { Component } from 'react'
import axios from 'axios'

import Progress from '../Progress/progress'
import DashSplash from './dashSplash'
import RandomQuestion from './randomQuestion'

import NavBar2 from '../Navbar/navBar2'
import Search from '../Search/searchContainer'


import Leaderboard from "../Leaderboard/leaderboard"
import './dashboard.css'

class Dashboard extends Component {
    constructor (props) {
        super (props)
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
       axios.get('/api/questions/random')
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
      // console.log(this.props.state.CurrentAutState.userID)
        const { questionId, categoryId, questionBody, category } = this.state
        return (
            <div className='dashboardContainer'>
                <div className='splashAndQuestion'>
                  
                    <DashSplash userName={ this.props.state.CurrentAutState.username }/>
                    <NavBar2 logoutUser={this.props.logout_user} />
                    <RandomQuestion
                     questionId={questionId}
                     categoryId={categoryId}
                     questionBody={questionBody}
                     category={category}/>
                     <Progress userID={this.props.state.CurrentAutState.userID}/>
                     <Leaderboard />
                     
                </div>
                
            </div>
        )
    }
}

export default Dashboard


