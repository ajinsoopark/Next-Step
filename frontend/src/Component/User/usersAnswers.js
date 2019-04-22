import React  from 'react';
import './usersAnswers.css'
import axios from 'axios'

const handleClick=console.log('like')

const UsersAnswers = ({ data, likes }) => {
    if(data && likes){
      likes=likes.map(a => a.answer_id)
      // console.log(data)
      // console.log(likes)
      return (data.map((el,i)=>{
        return(
          <div key={i} className='answerContainer'>
            <div className='likes'>
              Likes: {el.likescount ? el.likescount : 0}

              <button onClick={handleClick}>
                {likes.includes(parseInt(el.id)) ? 'Unlike': 'Like'}
              </button>

            </div>
            <div className='question'>Question:{el.question_body}</div>
            <div className='answers'>Answer:{el.answer_body}</div>
          </div>
        )
      }))
    }else{
      return null
    }
}

export default UsersAnswers
