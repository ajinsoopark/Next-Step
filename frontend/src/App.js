import React, { Component } from 'react';
// import axios from "axios"

//IMPORTS:
import {withRouter} from "react-router";
import {Switch} from "react-router-dom";



// import UserAuthRoutings from "./Auth/Auth.js" - These are middleware - to reroute users if they have login or not login.
// import Auth from "./Auth/Auth.js"
import PrivateRoute from "./Auth/PrivateRouting.js"
import PublicRoute from "./Auth/PublicRouting.js";


// Redux Actions - for onLoad page - component did mount
import { connect } from "react-redux"
import {checkUserAuthStatus} from "./Redux/Actions/Auth_actions"


// CSS RESET IS INSIDE INDEX.JS!!!
//CSS:
import './App.css';


//Import Redux Containers from Redux
// import Login from "./Component/Login/loginContainer"
// import NavBar from "./Component/Navbar/navBarContainer"
import Home from './Component/Home/homeContainer.js';
import Landing from './Component/LandingPage/landingPage.js';
// import Dashboard from "./component/Dashboard/dashboard_container.js"




// Import Component from Components
// import Signup from "./Component/Signup/signup";
// import About from "./Component/About/about.js"
// import PublicNavBar from "./navBar/public_navBar.js"
// import Landing from './Component/LandingPage/landingPage'
// import Login from "./component/login/login";
// import NavBar from "./component/navbar/navBar.js"
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
      <Switch>
         <PublicRoute exact path = "/signoff" component = {Landing} ></PublicRoute>
      <PrivateRoute exact path = "/*" component = {Home} ></PrivateRoute>

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
