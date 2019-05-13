import React from "react";
import {NavLink} from "react-router-dom";
import UserSearchCard from './userSearchCard'
import  './displaySearch.css'

const DisplaySearch = ({ search, data }) => {
  // if (search && data.data){
  //   if(search === 'users'){
  //     return(data.data.map((el)=>{
  //       return(
  //         <UserSearchCard
  //          userId={el.id}
  //          username={el.username}
  //          last_login={el.last_login}/>
  //       )
  //     }))
  //   }else if(search ==='questions'){
  //     return(data.data.map((el)=>{
  //       return(
  //           <NavLink key={el.id}  to={'/questions/'+ el.id}>
  //             <div className='results'>
  //               {el.question_body}
  //             </div>
  //           </NavLink>
  //       )
  //     }))
  //   }
  // }
  return (
    null
  )
}
export default DisplaySearch;
