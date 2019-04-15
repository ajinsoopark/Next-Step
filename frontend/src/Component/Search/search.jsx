import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  constructor(props){
  super(props)
  this.state={
    search:props.match.params.search,
    filter:props.match.params.filter,
    data:null
  }
}


componentDidMount =()=>{
  const{search,filter}=this.state

  search === 'questions' ?
  axios.get(`/questions/search/${filter}`).then(res => {
    this.setState({
      data: res.data.questions
    })
  })
  :
  axios.get(`/users/search/${filter}`).then(res=>{
    this.setState({
      data:res.data.users
    })
  })
}



componentDidUpdate = ()=>{
  const{params}=this.props.match
  const{search,filter}=this.state

  if(params.search != search || params.filter!= filter){

    this.setState({
      search:params.search,
      filter:params.filter
    })

  }

}

  render() {
    const{search,filter}=this.state
    console.log(this.state)
    return(
      <>
        Search results for {search} containing {filter}
      </>
    )
  }
}
export default Search;
