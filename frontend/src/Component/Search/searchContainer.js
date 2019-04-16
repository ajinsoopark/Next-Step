import {connect } from "react-redux";
import {withRouter} from "react-router"
import Search from "./search.jsx"


// import NavBar from "./navBar.js"

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

}
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
