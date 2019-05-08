import React from 'react'
import "./dashboard.css"

// import Avatar from 'react-avatar';


const WelcomeMessage = () => {

    return (
        <div className='welmsgParent'>
            <div className='welmsg'>
                    <div>
                        <h1>Are you ready to become an interview ninja?</h1>
                    </div>
                    <p>
                        Click on the side bar to your left to go straight to the interview questions. 
                        Be sure to check out our recommendations on the the best practices of answering behavioral questions, as well as helpful advice on what to do before, during, and after your interview.
                        And please follow our Community Guidelines.
                    </p>
                    <div>
                        Now let's take you to your next step!
                    </div>
            </div>
        </div>
    )
}

export default WelcomeMessage;