import Auth from "../../Auth/Auth.js"
import axios from "axios"

//This check if user already login in the back or not.

export const checkUserAuthStatus = () => {
  console.log("CheckUserAuth")
  axios.get("/api/users/log").then(res => {
    if(res.data.username === Auth.getToken()){
      this.setState({
        isLoggedin : Auth.isUserAuthenticated()
      })
      // dispatch({
      //   type: CHECK_AUTH_USER,
      //   payload: res.data
      // })
    }
    else {
      if(res.data.username){
        // dispatch(logOutUser())
        this.setState({
          isLoggedin: res.data.username
        })
        Auth.deauthenticateUser()
      }
      else {
        Auth.deauthenticateUser()
      }
    }
  })
}



export const login_user = (username, password) => dispatch => {
  console.log("CALLING LOGIN")
    axios
      .post("/api/users/login", {
        username,
        password
      }).then(res => {
        this.setState({
          current_user: res
        })
        //  dispatch({
        //    type: LOGIN_USER,
        //    payload: res.data
        //  })
         return res
      }
      ).then((res)=>{
        console.log(res)
        Auth.authenticateUser(username)
        Auth.authenticateUserID(res.data.id)
      }).then(()=>{

        // console.log("First Hit")
        // debugger
        // dispatch(checkUserAuthStatus())
      }).then(
        () => {
          console.log("End of LOGIN ACTON")

        }
      )
      //TODO: CREATE A LOGIN STATUS ON LOGIN PAGE, IF FAIL SHOWS ERROR
      .catch(err => {
        console.log(err)
      })

}
export const logOutUser = ()=> dispatch => {
  console.log("I AM LOGGING OUT YO.")
    axios
      .post("/api/users/logout")
      .then(() => {
        this.setState({
          current_user: null
        })
        // dispatch({
        //   type:LOG_OUT_USER,
        //   payload: {}
        // })

      })
      .then(() => {
        Auth.deauthenticateUser()
      }).then(()=>{
        dispatch(checkUserAuthStatus())

      })
  }

  export default login_user
