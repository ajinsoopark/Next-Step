import React, { Component } from 'react';
import axios from "axios"

//IMPORTS:
import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";



// import UserAuthRoutings from "./Auth/Auth.js" - These are middleware - to reroute users if they have login or not login.
// import Auth from "./Auth/Auth.js"
import PrivateRoute from "./Auth/PrivateRouting.js";
import PublicRoute from "./Auth/PublicRouting.js";


// Redux Actions - for onLoad page - component did mount
import { connect } from "react-redux"
import {checkUserAuthStatus} from "./redux/actions/Auth_actions";


// CSS RESET IS INSIDE INDEX.JS!!!
//CSS:
import './App.css';


//Import Redux Containers from Redux
import Login from "./component/login/login_container.js";
import NavBar from "./component/navbar/navBar_container"
import Dashboard from "./component/Dashboard/dashboard_container.js"
import QuestionsContainer from "./component/Questions/QuestionsContainer.js"



// Import Component from Components
// import PublicNavBar from "./navBar/public_navBar.js"
import Home from "./component/landingPage/landing_page";
import Signup from "./component/signup/signup";
// import Login from "./component/login/login";
// import NavBar from "./component/navbar/navBar.js"
import About from "./component/About/about.js"
// import Dashboard from "./component/Dashboard/dashboard.js"



class App extends Component {
  constructor() {
    super();
    this.state= ({
      isLoggedin : null,
      current_user: null
    })
  }




  render() {
    return (
      <div className="App">
      <NavBar logoutUser={this.logout_user}/ >
      <Switch>

      <Route exact path = "/about" component = {About} ></Route>

      <PrivateRoute exact path = "/dashboard" component = {Dashboard}></PrivateRoute>

      <PrivateRoute exact path = "/questions" component = {QuestionsContainer}></PrivateRoute>

      <PublicRoute exact path = "/signup" component = {Signup} ></PublicRoute>

      <PublicRoute exact path = "/login" component = {Login} ></PublicRoute>


      <Route exact path = "/*" component = {Home} ></Route>


      </Switch>


      </div>
    )
  }
}


//Redux Code - Map State and Dispatcher to Props and export everything together.
const mapStateToProps = (state, ownProps) => {
  return {
    AppStore: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus())
}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));





//Non-Redux Code
{/* export default withRouter(App) */}

//placeholder for react-state code
{/* checkUserAuthStatus = () => {
  axios.get("/users/log").then(res => {
    if(res.data.username === Auth.getToken()){
      this.setState({
        isLoggedin : Auth.isUserAuthenticated()
      })
      console.log(this.state)
    }
    else {
      if(res.data.username){
        // dispatch(logOutUser())
        this.setState({
          current_user: res.data.username
        })
        Auth.deauthenticateUser()
      }
      else {
        Auth.deauthenticateUser()
      }
    }
  })
}

  login_user = (username, password) => {
      axios
        .post("/users/login", {
          username,
          password
        }).then(res => {

          this.setState({
            current_user: res.data
          })

          return res
        }
        ).then((res)=>{
          Auth.authenticateUser(username)
          Auth.authenticateUserID(res.data.id)
        }).then(
          () => {
            console.log(this.state)
          }
        )
        .catch(err => {
          console.log(err)
        })
  } */}


//React - Route
     {/* <Route exact path = "/login" render = {props => <Login checkUserAuthStatus={this.checkUserAuthStatus} login_user = {this.login_user} props = {this.props} App_state = {this.state} />}></Route> */}
