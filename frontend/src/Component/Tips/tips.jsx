import React from "react"
import axios from "axios"
import DisplayTipcats from "./displayTipcats"
import "./tips.css"

export default class Tips extends React.Component {
  constructor(){
    super()
    this.state = {
      allTips: [],
      allTipcats: [],
      selectedTipcat: 1
    }
  }

  componentWillMount = () => {
    this.getAllTips()
    this.getAllTipcats()
  }

  getAllTips = () => {
    axios
    .get("/api/tips")
    .then(res => {
      this.setState({
        allTips:res.data.tips
      })
    })
  }

  getAllTipcats = () => {
    axios
    .get("/api/tipcats")
    .then(res => {
      this.setState({
        allTipcats: res.data.tipcats
      })
    })
  }

  handleClick = (e) => {
    this.setState({
        selectedTipcat: e.target.value
    })
  }

render(){
  return(

        <div className="tipsList">
          <div className="adviceTitle">
              <div className="adviceTitleChild">
                <h1>Interview Advice</h1>
              </div>
          </div>
          <div>
            <DisplayTipcats allTips={this.state.allTips} allTipcats={this.state.allTipcats} selectedTipcat={this.state.selectedTipcat} handleClick={this.handleClick} />
          </div>
    
        </div>
  )
}
}

