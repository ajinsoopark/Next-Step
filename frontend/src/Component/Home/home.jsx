import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

//Import Redux Containers
import NavBar2 from "../Navbar/navBarContainer.js"

//Import Components
import LandingPage from "../LandingPage/landingPage.js"
import SideNav from "../SideNav/sideNav"
import Progress from '../Progress/progress'
import QuestionList from "../Questions/questionList"
import Question from "../Question/question.js"

import Dashboard from '../Dashboard/dashboardContainer'

import Logout from '../Logout/logoutContainer'

import Rankingboard from '../Rankingboard/rankingboard'
import Search from '../Search/searchContainer'
import About from '../About/about';
import Tips from "../Tips/tips"
import StarAnswer from "../CommunityGuidelines/star"
import CommunityGuidelines from "../CommunityGuidelines/communityGuidelines"

import User from '../User/user'

import AnswerFeed from '../Answers/answerFeedContainer'



//CSS
import './home.css'

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
        return (
    <>
  
    <SideNav expanded={this.state.expanded} toggleSideNav={this.toggleSideNav}/>
    <NavBar2 logoutUser={this.props.logout_user} />

    <div className={ expanded ? 'expanded home'  : 'unexpanded home' }>
    <Switch>
    <Route exact path='/questions' render={() => {
    return (
    <QuestionList/>)
    }}/>
    <Route exact path='/about' render={() => {
    return (
        <About/>
    )
    }}/>

    <Route exact path='/advice' render={() => {
    return (
        <Tips/>
    )
    }}/>

    <Route exact path='/logout' component={Logout}/>
    <Route exact path ="/questions/:id" render = {()=>{
    return (
        <Question/>
    )
    }}/>
    <Route path = '/search/:search/:filter'
    render={(props) => <Search{...props} />}
    />

    <Route path = '/users/:id'
    render={(props) => <User{...props} />}
    />
    <Route path='/answers' render={() => <AnswerFeed />}/>
    <Route path='/leaderboard' render={() => <Rankingboard />}/>

    <Route path='/communityguidelines' render={() => <CommunityGuidelines />}/>
    <Route path='/star' render={() => <StarAnswer />}/>


    <Route exact path='/*' render={() => {
    return (
    <Dashboard/>)
    }}/>

    </Switch>
    </div>
    </>
    )
}


}

export default Home






// <NavItem
//                     className = "sideNav_leaderboard"
//                     eventKey='leaderboard'
//                     active={activeTab === 'leaderboard' ? true : false}>
//                         <NavIcon>
//                                 <div className='sideBarIcon'>
//                                     {/* {leaderboardIcon} */}
//                                     <img src = {leaderboardIcon2} alt = "Circled Q" width= "35" />
//                                 </div>
//                         </NavIcon>
//                         <NavText>
//                             <NavLink className='sideNavLink' to={'/leaderboard'}>
//                                 Leaderboard
//                             </NavLink>
//                         </NavText>
//                     </NavItem>
