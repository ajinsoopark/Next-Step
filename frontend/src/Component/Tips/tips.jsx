import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "./tips.css"

export default class Tips extends React.Component {
  constructor(){
    super()
    this.state = {
      allTips: []
    }
  }

  componentDidMount = () => {
    this.getAllTips()
  }

  getAllTips = () => {
    axios
    .get("/tips")
    .then(res => {
      console.log("this is ALL TIPS: ", res.data.tips)
      this.setState({
        allTips:res.data.tips
      })
    })
  }

  displayTips = (allTips) => {
    return(allTips.map((tip, i) => {
            return(
            <div className="tipsParent">
                <div key={i} className="tipsBody">
                    <Link to={"/tips/" + tip.id}>
                        <div className="tipBodyGC">{tip.tip_body}</div>
                    </Link>
                </div>
            </div>
            )
    }))
}


render(){
  return(

        <div className="tipsList">
          <div className="tipsTitle">
              <div className="tipsTitleChild">
                <h1>Interview Advice</h1>
              </div>
          </div>
          <div>
            {this.displayTips(this.state.allTips)}
          </div>
    
        </div>
  )
}
}

