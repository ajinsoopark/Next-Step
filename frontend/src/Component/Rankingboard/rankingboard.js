import React, {Component} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './rankingboard.css'
import metal from "../../Images/gold-medal-svgrepo-com.svg"

class Rankingboard extends Component{
  constructor(props){
    super(props)
    this.state=({
      data:null
    })
  }
  componentDidMount(){
    axios.get('/api/answers/progress').then(res=>{
      console.log(res.data.response)
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

          <img src = {metal} alt="metal" height = "50px" />
          <h1 className='leaderboardText'> Rankings </h1>
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

export default Rankingboard
