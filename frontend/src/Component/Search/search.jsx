import React, { Component } from 'react';
import DisplaySearch from './displaySearch'
// import  './displaySearch.css'

class Search extends Component {
  constructor(props){
  super(props)
  this.state={
    search:props.match.params.search,
    filter:props.match.params.filter
  }
}

componentDidUpdate = ()=>{
  const{params}=this.props.match
  const{search,filter}=this.state

  if(params.search !== search || params.filter !== filter){
    this.setState({
      search:params.search,
      filter:params.filter
    })
  }
}



  render() {
    const{search,filter}=this.state
    const{SearchState}=this.props.state

    return(
      <div >
        Search results for {search} containing {filter}
        <DisplaySearch search={search} data={SearchState}/>
      </div>
    )
  }
}
export default Search;
