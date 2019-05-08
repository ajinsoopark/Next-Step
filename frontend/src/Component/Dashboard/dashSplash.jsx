import React from 'react'

//NPM REACT-AVAATAR
import Avatar from 'react-avatar';


const DashSplash = ({ userName }) => {

    return (
        <div className='splashContainer'>
         {/* <Avatar size = "45" textSizeRatio = {2} max-initial = {3} name= {userName} round = {true}/> */}
            <div className='userSplashContainer'>
                <div className='welcome'>
                    Welcome, { userName ? userName : '' }!
                </div>
            </div>
        </div>
    )
}

export default DashSplash