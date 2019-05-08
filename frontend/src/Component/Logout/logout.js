import React, { Component } from 'react';

import "./logout.css"


class Logout extends Component {
constructor (props) {
  super(props)
}

componentDidMount() {
  setTimeout(() => {
   this.props.history.push("/bye")
   this.props.function_logout_user()
  }, 872);
}


render () {
  return (
      <>
      <div className = "logout"> 
      <h1> See You Soon</h1>
      </div>
      </>
  )
}

}

export default Logout


