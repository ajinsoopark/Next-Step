import React, { Component } from 'react'
import Progress from '../Progress/progress'
import LandingPage from "../LandingPage/landingPage.js"
import NavBar2 from "../Navbar/navBarContainer.js"
import { Switch, Route } from 'react-router-dom'
import SideNav from "../SideNav/sideNav"
import QuestionList from "../Questions/questionList"
import Search from '../Search/search'

import './home.css'
import About from '../About/about';

class Home extends Component {
    constructor () {
        super ()
        this.state = {
            expanded: false
        }
    }

    toggleSideNav = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render () {
        const { expanded } = this.state
        console.log(this.state)
        return (
            <div>
                <NavBar2 logoutUser={this.props.logout_user} />
                <SideNav toggleSideNav={this.toggleSideNav}/>
                    <div className={ expanded ? 'expanded home' : 'unexpanded home' }>
                        <Switch>
                            <Route exact path='/' render={() => {
                                return (
                                <Progress/>)
                            }}/>

                            <Route exact path='/questions' render={() => {
                                return (
                                <QuestionList/>)
                                }}/>
                            <Route exact path='/about' render={() => {
                                return (
                                    <About/>
                                )
                            }}/>
                          <Route path='/search/:id' render={() => {
                                return (
                                    <Search/>
                                )
                            }}/>
                        </Switch>
                    </div>
            </div>
        )
}


}

export default Home
