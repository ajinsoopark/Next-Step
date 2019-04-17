import React from "react";
import {Link} from "react-router-dom";
import UserSearchCard from './userSearchCard'

const DisplaySearch = ({ search, data }) => {
  if (search && data.data){
    if(search === 'users'){
      return(data.data.map((el)=>{
        return(
          <UserSearchCard
           userId={el.id}
           username={el.username}
           last_login={el.last_login}/>
        )
      }))
    }else if(search ==='questions'){
      return(data.data.map((el)=>{
        return(
          <div key={el.id}>
            <Link to={'/questions/'+ el.id}>
              {el.question_body}
            </Link>
          </div>
        )
      }))
    }
  }
  return (
    null
  )
}
export default DisplaySearch;
