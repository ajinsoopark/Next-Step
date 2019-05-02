import React, {comp}  from 'react';
import './usersAnswers.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

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
  console.log(likes)
  // console.log(data)

    if(favorites && likes){
    let likeThings=likes.map(a => a.answer_id)

      console.log(likeThings)
      return (favorites.map((el,i)=>{
        // console.log(el.likescount)
        return(
          <div key={i} className='answerContainer'>
          <div className='likes'>
            Likes: {el.likescount ? el.likescount : 0}


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
              <div className='question'>
              Question: {el.question_body}
              </div>
            </NavLink>
            <NavLink to={`/users/${el.user_id}`}>
              <div className='question'>
               {el.username}
              </div>
            </NavLink>
            <div className='answers'>Answer: {el.answer_body}</div>
          </div>
        )
        })
      )
    }else{
      return null
    }
}

export default UsersFavorites
