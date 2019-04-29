import React from 'react'
import { NavLink } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import './displaySearch.css'

const UserSearchCard = ({ username, userId, last_login }) => {


    return (
        <NavLink className='userCardLink' to={`/users/${userId}`}>
            <div className='results'>
                {username}
                <p>Last logged in : <TimeAgo date={last_login}/></p>
            </div>
        </NavLink>
    )
}

export default UserSearchCard
