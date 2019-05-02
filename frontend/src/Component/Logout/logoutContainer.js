import {connect } from "react-redux";
import {withRouter} from "react-router"
import {checkUserAuthStatus,logOutUser} from "../../Redux/Actions/Auth_actions"

import Logout from "./logout"


const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus()),
  function_logout_user: () => dispatch(logOutUser())
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))
