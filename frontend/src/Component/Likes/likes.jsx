import React, { Component } from 'react'
import axios from 'axios'

import Auth from '../../Auth/Auth'

const heart = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z"/></svg>

class Likes extends Component {
    constructor () {
        super ()
        this.state = {
            currentLikes: ''
        }
    }

    fetchLikes = () => {
        let userId = Auth.getTokenID()
        axios.get(`/likes/${userId}`)
        .then(res => {
            let userLikes = res.data.likes
            this.setState({ currentLikes: userLikes })
        }).catch(err => console.log(err))
    }

    componentDidMount () {
        this.fetchLikes()
    }

    validateLikes = () => {

    }

    render () {
        return (
            <div className='likesContainer'>
                {heart}
            </div>
        )
    }
}

export default Likes