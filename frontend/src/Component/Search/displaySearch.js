import React from "react";
import {Link} from "react-router-dom";

const DisplaySearch = ({ search, data }) => {
  if (search && data.data){
    if(search === 'users'){
      return(data.data.map((el)=>{
        return(
          <div key={el.id}>
            <Link to={'/users/'+el.id}>
              {el.username}
              </Link>
          </div>
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
