import React, {comp}  from 'react';
import './usersAnswers.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Avatar from 'react-avatar';

import Likes from '../Likes/likesContainer'
import Auth from '../../Auth/Auth.js'


const emptyHeart = <svg className='heart' viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>


const fullHeart = <svg className='fullHeart heart' viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>



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

const UsersFavorites = ({ favorites, likes, loggedInUser, getData, currentProfile}) => {
  
  console.log( +currentProfile)

    if(favorites && likes){
    let likeThings=likes.map(a => a.answer_id)

      // console.log(likeThings)
      return (favorites.map((el,i)=>{
        return(
          <div key={i} className='answer'>
            <div className='likesContainer2'>

            <div>
            <Avatar size = {30} textSizeRatio = {2} max-initial = {2} name= {el.username} round = {true}/>
                  <NavLink to={`/users/${el.user_id}`}>
               <strong>{el.username}</strong>
            </NavLink>
            </div>

    <div className = "likebutton" >
            Likes: {el.likescount ? el.likescount : 0}
            </div>
{ +currentProfile !== +Auth.getTokenID() ? <div></div> :
              <div className = "likebuttonselector" >{likeThings.includes(parseInt(el.id)) ?

                  <button className = "likeButton" onClick = { () => {
                      disLikes(loggedInUser,el.id,getData)}}>
                      {fullHeart}

                    </button> :

                  <button className = "likeButton" onClick = { () => {
                      postLikes(loggedInUser,el.id,getData)}}>
                      {emptyHeart}
                </button>
                
              }</div>
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
