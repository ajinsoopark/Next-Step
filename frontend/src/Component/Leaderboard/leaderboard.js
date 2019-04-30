import React, {Component} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './leaderboard.css'

class Leaderboard extends Component{
  constructor(props){
    super(props)
    this.state=({
      data:null
    })
  }
  componentDidMount(){
    axios.get('/api/answers/progress').then(res=>{
      // console.log(res.data.response)
      this.setState({
        data:res.data.response
      })
    })
    axios.get('/questions/count').then(res=>{
      this.setState({
        questions:+res.data.count[0].count
      })
    })
  }

  makeTable=()=>{
    const {data}=this.state

    if(data){
      // console.log(data)
      return data.map((el,i)=>{
        return (
          <div className='tableHead' key={i}>
            <p>{i+1}</p>
            <p><NavLink to={`/users/${el.id}`}>{el.username} </NavLink></p>
            <p> {el.count} / {this.state.questions}</p>
          </div>
        )
      })
    }
    return null
  }

  render(){
    // console.log(this.state)
    return(
      <div className = 'leaderboardContainer'>
        <div>
          This is a progress table:
        </div>
        <div className='table'>
          <div className = 'tableHead'>
            <p>Rank</p>
            <p>Username</p>
            <p>Progress</p>
          </div>
              {this.makeTable()}

        </div>
      </div>
    )
  }
}

export default Leaderboard
