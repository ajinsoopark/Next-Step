
  import Auth from "../../Auth/Auth";

  const checkUserAuthStatus_reducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
      case "CHECK_AUTH_USER":
        return {
              ...oldstate,
              isLoggedin: Auth.isUserAuthenticated(),
              username: Auth.getToken(),
              userID: action.payload.userID
            }
      case "LOG_OUT_USER":
      Auth.deauthenticateUser()
      return {
        isLoggedin: "",
        username: ""
      }
      default:
        return oldstate
    }


  }


  export default checkUserAuthStatus_reducer
