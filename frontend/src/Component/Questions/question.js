import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios"

class Question extends Component {
  constructor (props) {
    super(props)
    
  }

  axiosGetAnswers = () =>{
    axios.get()
  }
  
  componentDidMount(){
    console.log(this.props)
  }

render(){
  return(
        <div className="Question">
        <h1>This is one Question Component</h1>

        </div>
  )
}
}



export default Question
