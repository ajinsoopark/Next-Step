import React, { Component } from 'react'
import axios from 'axios'

import Auth from '../../Auth/Auth'
import './likes.css'

const emptyHeart = <svg className='heart' viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
const fullHeart = <svg className='fullHeart heart' viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>


class Likes extends Component {
    constructor () {
        super ()
        this.state = {
            currentLikes: '',
            liked: false,
            likeId: ''
        }
    }

    fetchLikes = () => {
        let userId = Auth.getTokenID()
        axios.get(`/api/likes/${userId}`)
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
        let likedObj = this.state.currentLikes.find(likeObj => likeObj.answer_id === this.props.answer_id)
        if (likedObj) {
            this.setState({
                liked: true,
                likeId: likedObj.id
            })
        } else {
            this.setState({
                liked: false,
                likeId: ''
            })
        }
    }

    likeAnswer = () => {
        let userId = Auth.getTokenID()
        let answerId = this.props.answer_id
        axios.post('/api/likes', {
            user_id: userId,
            answer_id: answerId
        })
        .then(() => {
            this.props.axiosGetAnswers()
            this.props.axiosGetUserAnswerByQuestion()
            this.setState({ liked: true })
            this.fetchLikes()
        }).catch(err => console.log(err))
    }

    unlikeAnswer = () => {
        let likeId = this.state.likeId
        axios.delete(`/api/likes/${likeId}`)
        .then(() => {
            this.props.axiosGetAnswers()
            this.props.axiosGetUserAnswerByQuestion()
            this.setState({ liked: false })
            this.fetchLikes()
        }).catch(err => console.log(err))
    }

    handleLikeButton = (event) => {
        event.preventDefault()
        if (this.state.liked) {
            this.unlikeAnswer()
        } else {
            this.likeAnswer()
        }
    }

    render () {

        return (
            <div className='likesContainer'>
                <button className='likeButton' onClick={this.handleLikeButton}>
                    { this.state.liked ? fullHeart : emptyHeart }
                </button>
            </div>
        )
    }
}

export default Likes
