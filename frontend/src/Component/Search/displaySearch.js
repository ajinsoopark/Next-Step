import React from "react";
import {NavLink} from "react-router-dom";
import UserSearchCard from './userSearchCard'
import  './displaySearch.css'

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
          <div className='results' key={el.id}>
            <NavLink to={'/questions/'+ el.id}>
              {el.question_body}
            </NavLink>
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
