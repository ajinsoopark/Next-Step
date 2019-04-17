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

  componentDidMount = () => {
    this.getAllTips()
    this.getAllTipcats()
  }

  getAllTips = () => {
    axios
    .get("/tips")
    .then(res => {
      console.log("this is ALL TIPS when component mounts: ", res.data.tips)
      this.setState({
        allTips:res.data.tips
      })
    })
  }

  getAllTipcats = () => {
    axios
    .get("/tipcats")
    .then(res => {
      console.log("this is ALL TIPCATS when component mounts: ", res.data.tipcats)
      this.setState({
        allTipcats: res.data.tipcats
      })
      console.log("this is allTipcats state: ", this.state.allTipcats)
    })
  }

  handleClick = (e) => {
    this.setState({
        selectedTipcat: e.target.value
    })
    console.log("this is TARGET VALUE ", e.target.value)
    console.log("this is selectedTipcate after setState: ", this.state.selectedTipcat)
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
            <DisplayTipcats allTips={this.state.allTips} allTipcats={this.state.allTipcats} selectedTipcat={this.state.selectedTipcat} handleClick={this.handleClick} />
          </div>
    
        </div>
  )
}
}

