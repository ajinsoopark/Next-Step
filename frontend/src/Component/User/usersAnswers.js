import React  from 'react';
import './usersAnswers.css'

const UsersAnswers = ({ data }) => {
    if(data){
      // console.log(data)
      return (data.map((el,i)=>{
        return(
          <div key={i} className='answerContainer'>
            <div className='likes'>Likes: {el.likescount ? el.likescount : 0} </div>
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
