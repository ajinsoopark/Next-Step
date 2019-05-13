//TODO: Check Express Routes to make sure it aligns with Path.

import axios from "axios"


//Redux - Checking Variable Names
const SEARCH = "SEARCH"


//This is to check if (a) user has already login in the background.
export const onSearch = (filter) => dispatch => {

  axios.get(`/api/answers/search/${filter}`).then(res=>{
    dispatch({
      type:"SEARCH",
      payload:res.data.results
    })
  })
}
