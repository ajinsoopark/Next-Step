import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { questionsIcon, leaderboardIcon, answerIcon, tipsIcon, aboutIcon } from './icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sideNav.css'

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
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={''}>
                                <div className='sideBarIcon'>
                                    {questionsIcon}
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink>
                                Questions
                            </NavLink>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={''}>
                                <div className='sideBarIcon'>
                                    {leaderboardIcon}
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink>
                                Leaderboards
                            </NavLink>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={''}>
                                <div className='sideBarIcon'>
                                    {answerIcon}
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink>
                                Answers
                            </NavLink>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={''}>
                                <div className='sideBarIcon'>
                                    {tipsIcon}
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink>
                                Tips & Tricks
                            </NavLink>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <NavLink className='sideNavLink' to={'/about'}>
                                <div className='sideBarIcon'>
                                    {aboutIcon}
                                </div>
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink>
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

