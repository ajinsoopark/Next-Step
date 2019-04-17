//TODO: Check Express Routes to make sure it aligns with Path.

import axios from "axios"


//Redux - Checking Variable Names
const SEARCH = "SEARCH"


//This is to check if (a) user has already login in the background.
export const onSearch = (search,filter) => dispatch => {
  console.log(search)
  search === 'questions' ?
  axios.get(`/questions/search/${filter}`).then(res => {
    console.log(res)
    dispatch ({
      type : "SEARCH",
      payload : res.data.questions
    })
  })
  :
  axios.get(`/users/search/${filter}`).then(res=>{
    dispatch ({
      type: "SEARCH",
      payload : res.data.users
    })
  })
}
