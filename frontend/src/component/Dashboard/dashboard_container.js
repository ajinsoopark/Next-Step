import {connect } from "react-redux";
import {withRouter} from "react-router"


import {checkUserAuthStatus} from "../../redux/actions/Auth_actions.js"


import Dashboard from "../Dashboard/dashboard.js"
// import App  from "../home/home.js"

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() => 
    dispatch(checkUserAuthStatus())
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))