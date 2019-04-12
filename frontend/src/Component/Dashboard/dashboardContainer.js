import {connect } from "react-redux";
import {withRouter} from "react-router"

import {checkUserAuthStatus} from "../../Redux/Actions/Auth_actions.js"

import Dashboard from './dashboard'

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