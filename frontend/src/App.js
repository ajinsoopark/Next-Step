import React, { Component } from 'react';
import axios from "axios"

//IMPORTS:
import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";



// import UserAuthRoutings from "./Auth/Auth.js" - These are middleware - to reroute users if they have login or not login.
import Auth from "./Auth/Auth.js"
import PrivateRoute from "./Auth/PrivateRouting.js";
import PublicRoute from "./Auth/PublicRouting.js";


// Redux Actions - for onLoad page - component did mount
import { connect } from "react-redux"
import {checkUserAuthStatus} from "./redux/actions/Auth_actions";


// CSS RESET IS INSIDE INDEX.JS!!!
//CSS:
import './App.css';

//Import Redux Containers from Redux

// Import Component from Components
// import PublicNavBar from "./navBar/public_navBar.js"
import Home from "./component/landingPage/landing_page";
import Signup from "./component/signup/signup";
import Login from "./component/login/login";
import About from "./component/About/about.js"
import NavBar from "./component/navbar/navBar.js"



//-----------------------------------//

class App extends Component {
  constructor(props) {
    super(props);
    this.state= ({
      isLoggedin : null,
      current_user: null
    })
  }
  

  checkUserAuthStatus = () => {
  console.log("CheckUserAuth")
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
  console.log("CALLING LOGIN")
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
        console.log(res)
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

}
  logout_user = () => {
  console.log("I AM LOGGING OUT YO.")
    axios
      .post("/users/logout")
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
        this.checkUserAuthStatus()

      })
  }

  render() {
    return (
      <div className="App">
      <NavBar / >
      <Switch>

      {/* <PublicRoute exact path = "/home" component = {}> </PublicRoute> */}
      {/* <PrivateRoute exact path = "/dashboard" component = {}> </PrivateRoute> */}
      <Route exact path = "/about" component = {About} ></Route>
      <Route exact path = "/signup" component = {Signup} ></Route>
      <Route exact path = "/login" render = {props => <Login checkUserAuthStatus={this.checkUserAuthStatus} login_user = {this.login_user} />}></Route>
      <Route exact path = "/*" component = {Home} ></Route>


      </Switch>


      </div>
    );
  }
}

//Redux - mapStates and dispatchs to App.

const mapStateToProps = (state, ownProps) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() =>
    dispatch(checkUserAuthStatus())
}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
