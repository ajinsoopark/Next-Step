import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
        return (
            <div className='sideContainer'>
               <SideNav>
                <SideNav.Toggle onClick={this.props.toggleSideNav}/>
                <SideNav.Nav>
                   
                    <NavItem className = "sideNav_leaderboard">
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/dashbaord'}>
                                <div className='sideBarIcon'>
                                    {/* {leaderboardIcon} */}
                                    <img src = {leaderboardIcon2} alt = "Circled Q" width= "35" />

                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink className='sideNavLink' to={'/dashbaord'}>
                                Leaderboard
                            </NavLink>
                        </NavText>
                    </NavItem>

                    <NavItem className = "sideNav_questions" >
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/questions'} >
                                <div className='sideBarIcon'>
                                    {/* {questionsIcon} */}
                                    <img src = {questionsIcon2} alt = "Circled Q" width= "35" />
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink to = {'/questions'}>
                                Questions
                            </NavLink>
                        </NavText>
                    </NavItem>

                    <NavItem className = "sideNav_answers">
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/answers'}>
                                <div className='sideBarIcon'>
                                    {/* {answerIcon2} */}
                                    <img src = {answerIcon2} alt = "Circled A" width = "35" />

                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink to = {"/answers"}>
                                Answers
                            </NavLink>
                        </NavText>
                    </NavItem>
                    

                    <NavItem className = "sideNav_tips">
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/tips'}>
                                <div className='sideBarIcon'>
                                    {/* {tipsIcon} */}
                                    <img src = {tipsIcons2} alt = "Light Bulb Icon" width = "35" />

                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink to = {"/tips"}>                            
                                Tips & Tricks
                            </NavLink>
                        </NavText>
                    </NavItem>

                    <NavItem className = "sideNav_about">
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/about'}>
                                <div className='sideBarIcon'>
                                    {/* {aboutIcon2} */}
                                    <img src = {aboutIcon2} alt = "Circled A" width = "35" />
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink to = {"/about"}>
                                About
                            </NavLink>
                        </NavText>
                    </NavItem>
                
                </SideNav.Nav>
            </SideNav>
            </div>
        )
    }
}

export default SideNavMenu
