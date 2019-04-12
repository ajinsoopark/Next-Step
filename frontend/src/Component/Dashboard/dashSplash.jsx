import React from 'react'

import { smiley } from './smiley'

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
            <div className='splashEmote'>
                { smiley }
            </div>
        </div>
    )
}

export default DashSplash