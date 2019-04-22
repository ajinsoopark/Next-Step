import React, { Component } from 'react'
import axios from 'axios'

import Auth from '../../Auth/Auth'
import './likes.css'

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
        let likedObj = this.state.currentLikes.find(likeObj => likeObj.answer_id === this.props.answer_id)
        console.log(likedObj)
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
        axios.post('/likes', {
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
        axios.delete(`/likes/${likeId}`)
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
      console.log(this.sate)
        return (
            <div className='likesContainer'>
                <button className='likeButton' onClick={this.handleLikeButton}>
                    <svg className={ this.state.liked ? 'fullHeart heart' : 'heart' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                </button>
            </div>
        )
    }
}

export default Likes
