import React, {Component} from 'react';
import axios from 'axios'
import './user.css'
import Avatar from 'react-avatar';
import UsersAnswers from './usersAnswers'
import Auth from '../../Auth/Auth.js'

class User extends Component {
  constructor(props){
    super(props)
    this.state=({
      userID:+this.props.match.params.id,
      loggedInUser:+Auth.getTokenID(),
    })
  }

 getData =()=>{
    const {userID,loggedInUser}=this.state
    axios.get(`/api/users/${userID}`).then(res=>{
      this.setState({
        name:res.data.user.first_name +" "+ res.data.user.last_name,
        userName:res.data.user.username
      })
    })

    axios.get(`/api/answers/count/user/${userID}`).then(res=>{
      this.setState({
        answers:+res.data.count[0].count
      })
    })

    axios.get('/api/questions/count').then(res=>{
      this.setState({
        questions:+res.data.count[0].count
      })
    })

    axios.get(`/api/answers/user/${userID}`).then(res=>{
      this.setState({
        data:res.data.answers
      })
    })

    axios.get(`/api/likes/${loggedInUser}`).then(res=>{
      this.setState({
        likes:res.data.likes
      })
    })
  }
  componentDidMount(){
    this.getData()
  }

  render(){
    console.log(this.state)
    const {name,userName,questions,answers,data,likes,loggedInUser}=this.state
    let completion = Math.round((answers/questions)*100)+'%'

    const style = {
      width:completion,
      backgroundColor: 'yellow',
    }

    return(
      <div className = 'profileContainer'>
        <div className='userInfo'>
          <div className='words'>
            <p>UserName: {userName}</p>
            <p>Full Name: {name}</p>
          </div>
          <div className='join'>
            <Avatar textSizeRatio = {2} max-initial = {3} name= {userName} round = {true}/>
          </div>
        </div>


        Question Progress:
        <div className='pbar'>
          <div className ='innerBar' style={style}>
          </div>
          <div className='completed'>
            {completion}
          </div>
        </div>

        <div>
          <UsersAnswers data={data} likes={likes} loggedInUser={loggedInUser} getData={this.getData}/>
        </div>
      </div>
    )
  }
}

export default User
