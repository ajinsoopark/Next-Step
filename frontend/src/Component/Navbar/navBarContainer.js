import {connect } from "react-redux";
import {withRouter} from "react-router"
import {login_user,checkUserAuthStatus,logOutUser} from "../../Redux/Actions/Auth_actions"
import {onSearch} from "../../Redux/Actions/searchActions.js"


// import NavBar from "./navBar.js"
import NavBar2 from "./navBar2.js"
// import App  from "../home/home.js"


const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_login_user: (username, password) => dispatch(login_user(username,password)),
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus()),
  function_logout_user: () => dispatch(logOutUser()),
  function_search: (search, filter) =>{ dispatch(onSearch(search,filter))}
}
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar2))
