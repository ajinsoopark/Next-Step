import React from 'react'

//NPM REACT-AVAATAR
import Avatar from 'react-avatar';


const DashSplash = ({ userName }) => {

    return (
        <div className='splashContainer'>
            <div className='userSplashContainer'>
                <div className='welcome'>
                    Welcome
                </div>
                <div className='userSplash'>
                    { userName ? userName : '' }
                </div>
            </div>
        <Avatar textSizeRatio = {2} max-initial = {3} name= {userName} round = {true}/>
        </div>
    )
}

export default DashSplash