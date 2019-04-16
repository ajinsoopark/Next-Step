import React from 'react'

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
        </div>
    )
}

export default DashSplash