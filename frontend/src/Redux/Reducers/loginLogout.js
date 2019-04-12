const loginReducer = (oldstate = [], action) => {
  Object.freeze(oldstate);
  switch (action.type){
    case "LOGIN_USER":
    return {
      ...oldstate,
      current_userID :action.payload.id,
      current_username: action.payload.username,
      current_userEmail: action.payload.email
    }
    case "LOGOUT_USER":
    return {
      current_user_id: "",
      current_username: "",
      current_userEmail: ""
    }

    default:
    return oldstate
  }
  }


export default loginReducer