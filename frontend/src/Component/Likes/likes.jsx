import React, { Component } from 'react'
import axios from 'axios'

import Auth from '../../Auth/Auth'
import './likes.css'

class Likes extends Component {
    constructor () {
        super ()
        this.state = {
            currentLikes: '',
            liked: false
        }
    }

    fetchLikes = () => {
        let userId = Auth.getTokenID()
        axios.get(`/likes/${userId}`)
        .then(res => {
            let userLikes = res.data.likes
            this.setState({ currentLikes: userLikes })
        })
        .then(() => {
            this.validateLikes()
        }).catch(err => console.log(err))
    }

    componentDidMount () {
        this.fetchLikes()
    }

    validateLikes = () => {
        if (this.state.currentLikes) {
            if (this.state.currentLikes.find(likeObj => likeObj.answer_id === this.props.answer_id)) {
                this.setState({ liked: true })
            }
        }
    }

    render () {
        console.log(this.state)
        return (
            <div className='likesContainer'>
                <button className='likeButton'>
                    <svg className={ this.state.liked ? 'fullHeart heart' : 'heart' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                </button>
            </div>
        )
    }
}

export default Likes