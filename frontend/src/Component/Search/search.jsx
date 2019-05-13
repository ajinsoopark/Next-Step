import React, { Component } from 'react';
import DisplaySearch from './displaySearch'
// import  './displaySearch.css'

class Search extends Component {
  constructor(props){
  super(props)
  this.state={
    filter:props.match.params.filter,
  }
}

componentDidUpdate = ()=>{
  const{params}=this.props.match
  const{filter}=this.state

  if( params.filter !== filter){
    this.setState({
      filter:params.filter
    })
  }
}



filterThings = ()=>{
  const{filter}=this.state
  const{SearchState}=this.props.state
  if (SearchState.data){


    let test = this.state.filter
    test = test.split(' ').map(el=>el.toLowerCase())

    let results = SearchState.data

    let idx = 0

    while(idx < test.length){
      results = results.filter(el=>el.question_body.toLowerCase().includes(test[idx]));
      idx++
    }
    // for(i=0;i<test.length;i++){
    //   results = results.filter(el=>el.question_body.toLowerCase().includes(test[i]))
    // }
    console.log(results)
  }
  return null
}

  render() {
    const{filter}=this.state
    const{SearchState}=this.props.state
    // console.log(this.state)
    // console.log(SearchState.data)


    return(
      <div >
        Search results for {filter}
        {this.filterThings()}
        {//<DisplaySearch search={search} data={SearchState}/>//
      }
      </div>
    )
  }
}
export default Search;
