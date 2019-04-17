import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { questionsIcon, leaderboardIcon, answerIcon, tipsIcon, aboutIcon } from './icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideNav.css'

import answerIcon2 from "../../Images/icons8-circled-a-48.png"
import aboutIcon2 from "../../Images/icons8-circled-i-filled-48.png"
import questionsIcon2 from "../../Images/icons8-circled-q-48.png"
import leaderboardIcon2 from "../../Images/icons8-gold-medal-48.png"
import tipsIcons2 from "../../Images/icons8-idea-filled-48.png"


class SideNavMenu extends Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        console.log(this.props)
        return (
            <div className='sideContainer'>
               <SideNav onSelect={(selected) => {
                   const { location, history } = this.props
                   const route = `/${selected}`
                   if (location.pathname !== route) {
                       history.push(route)
                   }
                }}>
                <SideNav.Toggle onClick={this.props.toggleSideNav}/>
                <SideNav.Nav>
                    
                    <NavItem className = "sideNav_leaderboard" eventKey='leaderboard'>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {leaderboardIcon} */}
                                    <img src = {leaderboardIcon2} alt = "Circled Q" width= "35" />

                                </div>
                        </NavIcon>
                        <NavText>
                                Leaderboard
                        </NavText>
                    </NavItem>

                    <NavItem className = "sideNav_questions" eventKey='questions'>
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

                    <NavItem className = "sideNav_answers" eventKey='answers'>
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


                    <NavItem className = "sideNav_tips" eventKey='advice'>
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

                    <NavItem className = "sideNav_about" eventKey='about'>
                        <NavIcon>
                                <div className='sideBarIcon'>
                                    {/* {aboutIcon2} */}
                                    <img src = {aboutIcon2} alt = "Circled A" width = "35" />
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
