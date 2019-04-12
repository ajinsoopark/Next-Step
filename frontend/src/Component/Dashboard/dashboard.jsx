import React, { Component } from 'react'

import Progress from '../Progress/progress'
import DashSplash from './dashSplash'

import './dashboard.css'

class Dashboard extends Component {

    componentDidMount () {
       this.props.function_checkStatus()
    }

    render () {
        console.log(this.state)
        return (
            <div className='dashboardContainer'>
                <DashSplash userName={ this.props.state.CurrentAutState.username }/>
                <Progress/>
            </div>
        )
    }
}

export default Dashboard