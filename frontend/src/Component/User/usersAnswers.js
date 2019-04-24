import React, {comp}  from 'react';
import './usersAnswers.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const postLikes= (loggedInUser,answer_id,getData)=>{
  axios.post(`/likes`,{
    user_id:loggedInUser,
    answer_id:answer_id
  })
  getData()
}

const disLikes= (loggedInUser,answer_id,getData)=>{
  axios.delete(`/likes`,{
    params: {

        user_id:loggedInUser,
        answer_id:answer_id

    }


  })
  getData()
}

const UsersAnswers = ({ data, likes, loggedInUser, getData }) => {
  console.log(likes)
  console.log(data)

    if(data && likes){
    let likeThings=likes.map(a => a.answer_id)

      return (data.map((el,i)=>{
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

            <NavLink to={`/questions/${el.question_id}`}>
              <div className='question'>
                Question: {el.question_body}
              </div>
            </NavLink>
            <div className='answers'>Answer: {el.answer_body}</div>
          </div>
        )

      }))
    }else{
      return null
    }
}

export default UsersAnswers
