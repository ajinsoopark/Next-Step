import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { questionsIcon, leaderboardIcon, answerIcon, tipsIcon, aboutIcon } from './icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideNav.css'

import answerIcon2 from "../../Images/icons8-circled-a-48.png"
import aboutIcon2 from "../../Images/icons8-info-50.png"
import questionsIcon2 from "../../Images/icons8-circled-q-48.png"
import leaderboardIcon2 from "../../Images/icons8-gold-medal-48.png"
import tipsIcons2 from "../../Images/icons8-idea-filled-48.png"


class SideNavMenu extends Component {
    constructor () {
        super ()
        this.state = {
            activeTab: ''
        }
    }

    render () {
        const { activeTab } = this.state

        return (
            <div className='sideContainer'>
               <SideNav onSelect={(selected) => {
                   const { location, history } = this.props
                   const route = `/${selected}`
                   if (location.pathname !== route) {
                       history.push(route)
                   }
                   this.setState({ activeTab: selected })
                }}>
                <SideNav.Toggle onClick={this.props.toggleSideNav}/>
                <SideNav.Nav>

                    <NavItem
                    className = "sideNav_leaderboard"
                    eventKey='leaderboard'
                    active={activeTab === 'leaderboard' ? true : false}>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/leaderboard'}>

                                <div className='sideBarIcon'>
                                    {/* {leaderboardIcon} */}
                                    <img src = {leaderboardIcon2} alt = "Circled Q" width= "35" />
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>

                            <NavLink className='sideNavLink' to={'/leaderboard'}>

                                Leaderboard
                            </NavLink>    
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_questions"
                    eventKey='questions'
                    active={activeTab === 'questions' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {questionsIcon} */}
                                    <img src = {questionsIcon2} alt = "Circled Q" width= "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                Questions
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_answers"
                    eventKey='answers'
                    active={activeTab === 'answers' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {answerIcon2} */}
                                    <img src = {answerIcon2} alt = "Circled A" width = "35" />

                                </div>
                        </NavIcon>
                        <NavText>
                           My Answers
                        </NavText>
                    </NavItem>


                    <NavItem
                    className = "sideNav_tips"
                    eventKey='advice'
                    active={activeTab === 'advice' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {tipsIcon} */}
                                    <img src = {tipsIcons2} alt = "Light Bulb Icon" width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                Tips & Tricks
                        </NavText>
                    </NavItem>

                    <NavItem
                    className = "sideNav_about"
                    eventKey='about'
                    active={activeTab === 'about' ? true : false}>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {aboutIcon2} */}
                                    <img src = {aboutIcon2} alt = "Circled I" width = "35" />
                                </div>
                        </NavIcon>
                        <NavText>
                                About
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            </div>
        )
    }
}

export default withRouter(SideNavMenu)
