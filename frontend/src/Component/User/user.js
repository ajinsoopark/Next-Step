import React, {Component} from 'react';
import axios from 'axios'

import Avatar from 'react-avatar';
import UsersAnswers from './usersAnswers'
import UsersFavorites from './usersFavorites'
import Auth from '../../Auth/Auth.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../Answers/answerFeed.css'
import './user.css'



class User extends Component {
  constructor(props){
    super(props)
    this.state=({
      userID:+this.props.match.params.id,
      loggedInUser:+Auth.getTokenID(),
      display:true,
    })
  }

 getData = async ()=>{
    const {userID,loggedInUser}=this.state
    await axios.get(`/api/users/${userID}`).then(res=>{
      // console.log(res.data)
      this.setState({
        name:res.data.user.first_name + " " + res.data.user.last_name,
        userName:res.data.user.username
      })
    })

    await axios.get(`/api/answers/count/user/${userID}`).then(res=>{
      this.setState({
        answers:+res.data.count[0].count
      })
    })

    await axios.get('/api/questions/count').then(res=>{
      this.setState({
        questions:+res.data.count[0].count
      })
    })

    await axios.get(`/api/answers/user/${userID}`).then(res=>{
      this.setState({
        data:res.data.answers
      })
    })

    await axios.get(`/api/likes/${loggedInUser}`).then(res=>{
      this.setState({
        likes:res.data.likes
      })
    })

    await axios.get(`/api/likes/info/${userID}`).then(res=>{
      this.setState({
        favorites:res.data.favorites
      })
    })
}

  displayAnswers=()=>{
    this.setState({
      display:true
    })
  }
  displayFavorites=()=>{
    this.setState({
      display:false
    })
  }

  componentDidMount(){
    this.getData()
   
  }

  // displayThings=()=>{
  //   const {display,data,likes,loggedInUser,favorites}= this.state
  //   console.log()
  //   if(display){
  //     return(
  //       <UsersAnswers data={data} likes={likes} loggedInUser={loggedInUser} getData={this.getData}/>
  //     )
  //   }return(
  //       <UsersFavorites favorites={favorites} likes={likes} loggedInUser={loggedInUser} getData={this.getData}/>
  //   )

  // }

  checkUser= async ()=>{
     const {userID}=this.state
    // console.log(userID)
    // console.log(+this.props.match.params.id)

    if(userID != (+this.props.match.params.id)){

      await this.setState({
        userID:+this.props.match.params.id
      })

      await this.getData();

    }
  }
  componentDidUpdate=()=>{
    this.checkUser();    
  }

  render(){
     const {display,data,likes,loggedInUser,favorites}= this.state
    const {name,userName,questions,answers}=this.state
    let completion = Math.round((answers/questions)*100)+'%'

    const style = {
      width:completion,
      backgroundColor: 'yellow',
    }

    return(
      <div className = 'profileContainer'>
        <div className='userInfo'>
            <Avatar size = {100} textSizeRatio = {2} max-initial = {3} name= {userName} round = {true}/>
            <section>
            <p> <strong> Username: </strong> {userName} </p>
            <p> <strong> Name : </strong> {name} </p>
            </section>
        </div>


      <div className='pBarContainer'>
         Progress:
        <div className='pbar'>
          <div className ='innerBar' style={style}>
            {completion}
          </div>
          <div className='completed'>
          </div>
        </div>
      </div>
      <div className='userInfo'>

<Tabs >
{this.state.userName + "'s"}
        <TabList>
        
        <Tab onClick={this.displayAnswers}>  Answers </Tab>
        <Tab onClick={this.displayAnswers}>  Favorites </Tab>
        </TabList>

        <TabPanel>
        <div className = "sortedAnswerFeed" >
               <UsersAnswers data={data} likes={likes} loggedInUser={loggedInUser} getData={this.getData}/>
               </ div>
        </TabPanel>

        <TabPanel >
         <div className = "sortedAnswerFeed">
                    <UsersFavorites favorites={favorites} likes={likes} loggedInUser={loggedInUser} getData={this.getData}/>
                    </div>
        </TabPanel>

        </Tabs>

      </div>
      </div>
    )
  }
}

export default User




        // <button onClick={this.displayAnswers}>Answers </button>
        // <div> | </div>
        // <button onClick={this.displayFavorites}>Favorites </button>