import React, { Component } from 'react';


//IMPORTS:
import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";


// import UserAuthRoutings from "./Auth/Auth.js" - These are middleware - to reroute users if they have login or not login. 
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
import Home from "./landingPage/landing_page.js";



//-----------------------------------//


class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>

      {/* <PublicRoute exact path = "/home" component = {}> </PublicRoute> */}
      {/* <PrivateRoute exact path = "/dashboard" component = {}> </PrivateRoute> */}
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