import React, {comp}  from 'react';
import './usersAnswers.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Avatar from 'react-avatar';

import Likes from '../Likes/likesContainer'
import Auth from '../../Auth/Auth.js'


const postLikes= (loggedInUser,answer_id,getData)=>{
  axios.post(`/api/likes`,{
    user_id:loggedInUser,
    answer_id:answer_id
  })
  getData()
}

const disLikes= (loggedInUser,answer_id,getData)=>{
  axios.delete(`/api/likes`,{
    params: {

        user_id:loggedInUser,
        answer_id:answer_id
    }
  })
  getData()
}

const UsersFavorites = ({ favorites, likes, loggedInUser, getData }) => {
  // console.log(likes)
  // console.log(data)

    if(favorites && likes){
    let likeThings=likes.map(a => a.answer_id)

      // console.log(likeThings)
      return (favorites.map((el,i)=>{
        console.log(el)
        debugger
        return(
          <div key={i} className='answer'>
            <div className='likes'>
            Likes: {el.likescount ? el.likescount : 0}
            <div>
       <div className='answerLikesContainer'>
              { el.user_id === parseInt(Auth.getTokenID()) ?
                '' : <Likes
                      axiosGetAnswers={this.props.axiosGetAnswers}
                      axiosGetUserAnswerByQuestion={this.props.axiosGetUserAnswerByQuestion}
                      answer_id={el.answersId}/> }
              {`${el.likeCount} ${parseInt(el.likeCount) === 1 ? 'like' : 'likes'}`}
            </div>
     


            
            <Avatar size = {30} textSizeRatio = {2} max-initial = {2} name= {el.username} round = {true}/>
                  <NavLink to={`/users/${el.user_id}`}>
               <strong>{el.username}</strong>
            </NavLink>
            </div>

              {likeThings.includes(parseInt(el.id)) ?
              <button onClick = { () => {
                  disLikes(loggedInUser,el.id,getData)}}>
                  Dislike
                </button> :

              <button onClick = { () => {
                  postLikes(loggedInUser,el.id,getData)}}>
                  Like
            </button>
          }
          </div>


            <NavLink to={`/questions/${el.questions_id}`}>
              <div className='answerQuestion'>{el.question_body}
              </div>
            </NavLink>
        
            <div className='answerBody'> {el.answer_body}</div>
          </div>
        )
        })
      )
    }else{
      return null
    }
}

export default UsersFavorites
