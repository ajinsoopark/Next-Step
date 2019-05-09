//TODO: Check Express Routes to make sure it aligns with Path.

import axios from "axios"
import Auth from "../../Auth/Auth.js"


//Redux - Checking Variable Names
const LOGIN_USER = "LOGIN_USER"
const CHECK_AUTH_USER = "CHECK_AUTH_USER"
const LOG_OUT_USER = "LOG_OUT_USER"


//This is to check if (a) user has already login in the background. 
export const checkUserAuthStatus = () => dispatch => {
  axios.get("/api/users/log").then(res => {
    if(res.data.username === Auth.getToken()){
      dispatch({
        type: CHECK_AUTH_USER,
        payload: res.data
      })
    }
    else {
      if(res.data.username){
        dispatch(logOutUser())
      }
      else {
        Auth.deauthenticateUser()
      }
    }
  })
}


//This is to login user. 
export const login_user = (username, password) => dispatch => {
return  axios
      .post("/api/users/login", {
        username,
        password
      }).then(res => {
         dispatch({
           type: LOGIN_USER,
           payload: res.data
         })
         return res
      }
      ).then((res)=>{
  
        Auth.authenticateUser(username)
        Auth.authenticateUserID(res.data.id)
        return res.data.id
      }).then(userId => {
        dispatch(checkUserAuthStatus())
        return userId
      }).then(userId => {
        axios.patch(`/users/updatetime/${userId}`)
        }
      )
      .catch(err => {
        console.log(err)
        return err
      })

}

//This is to logout user
export const logOutUser = ()=> dispatch => {
    axios
      .post("/api/users/logout")
      .then(() => {
        dispatch({
          type:LOG_OUT_USER,
          payload: {}
        })
      })
      .then(() => {
        Auth.deauthenticateUser()
      }).then(()=>{
        dispatch(checkUserAuthStatus())
      }).then(()=>{
        Auth.deauthenticateUser()
        
      })
  }


