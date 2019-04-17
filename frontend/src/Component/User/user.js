import React, {Component} from 'react';
import axios from 'axios'
import './user.css'

class User extends Component {
  constructor(props){
    super(props)
    this.state=({
      userID:+this.props.match.params.id,
    })
  }

  componentDidMount(){
    const {userID}=this.state
    axios.get(`/users/${userID}`).then(res=>{

      this.setState({
        name:res.data.user.first_name +" "+ res.data.user.last_name,
        userName:res.data.user.username
      })
    })

    axios.get(`/answers/count/user/${userID}`).then(res=>{
      this.setState({
        answers:+res.data.count[0].count
      })
    })

    axios.get('/questions/count').then(res=>{
      this.setState({
        questions:+res.data.count[0].count
      })
    })
  }

  render(){
    // console.log(this.state)
    const {name,userName,questions,answers}=this.state
    let completion = Math.round((answers/questions)*100)+'%'

    const style = {
      width:completion,
      backgroundColor: 'yellow',
    }

    return(
      <>
        <div className='userInfo'>
          <div className='words'>
            <p>UserName: {userName}</p>
            <p>Full Name: {name}</p>
          </div>
          <div className='join'>
            <p>
              profile picture
            </p>
            <p>
              join data
            </p>
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

      </>
    )
  }
}

export default User
