import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

import Auth from "./Auth.js";


//Redirect User if  already login to dashboard page instead of going to a "Public Page"... 

const PublicRoute = ({
  component: Component,
  ...rest
}) => ( <
  Route {
    ...rest
  }
  render = {
    props =>
    Auth.isUserAuthenticated() ? ( <
      Redirect to = {
        {
          pathname: "/dashboard",
          state: {
            from: props.location
          }
        }
      }
      />
    ) :
( <
      Component {
        ...props
      } {
        ...rest
      }
      />
    )
  }
  />
);

export default PublicRoute;
