import React, {Component} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './leaderboard.css'
import metal from "../../Images/gold-medal-svgrepo-com.svg"

class Leaderboard extends Component{
  constructor(props){
    super(props)
    this.state=({
      data:null
    })
  }
  componentDidMount(){
    axios.get('/api/answers/progress').then(res=>{
      this.setState({
        data:res.data.response
      })
    })
    axios.get('/api/questions/count').then(res=>{
      this.setState({
        questions:+res.data.count[0].count
      })
    })
  }

  makeTable=()=>{
    const {data}=this.state
    let answer= []

    if(data){
      for(let i=0;i<5;i++){
        answer.push(
          <div className='tableHead' key={i}>
            <p>{i+1}</p>
            <p><NavLink className='rankingUser' to={`/users/${data[i].id}`}>
                {data[i].username}
              </NavLink></p>
            <p> {data[i].count} / {this.state.questions}</p>
          </div>
        )
      }
      return answer
    }
    return null
  }

  render(){
    return(
      <div className = 'leaderboardContainer'>

          <img src = {metal} alt="metal" height = "50px" />
          <h1 className='leaderboardText'> Leaderboard </h1>
            <div className='table'>
              <div className = 'tableHeader'>
                <h2>Rank</h2>
                <h2>Username</h2>
                <h2>Progress</h2>
              </div>
                  {this.makeTable()}
            </div>

      </div>
    )
  }
}

export default Leaderboard
