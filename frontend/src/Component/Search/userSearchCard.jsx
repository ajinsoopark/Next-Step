import React from 'react'
import { NavLink } from 'react-router-dom'
import TimeAgo from 'react-timeago'

const UserSearchCard = ({ username, userId, last_login }) => {


    return (
        <NavLink className='userCardLink' to={`/users/${userId}`}>
            <div className='userCardName'>
                {username}
            </div>
            <div className='userCardLastLogin'>
                <TimeAgo date={last_login}/>
            </div>
        </NavLink>
    )
}

export default UserSearchCard