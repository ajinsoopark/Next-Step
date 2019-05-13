import React, { Component } from 'react';
import DisplaySearch from './displaySearch'
import  './displaySearch.css'

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

    let test = this.state.filter
    let results = SearchState.data
    test = test.split(' ').map(el=>el.toLowerCase())

    if(test.length>1){
      for(let i=0;i<test.length;i++){
        results = results.filter(el=>el.question_body.toLowerCase().includes(test[i]))
      }
      console.log(results)
      return(results.map((el,i)=>{
        return(
          <div key={i} className = 'results'>
            <section>
            {el.username}
            <p>{el.question_body}</p>
            <p>{el.answer_body}</p>
          </section>
          </div>
        )
      }))
    }else if (test.length===1 && results){
    console.log(results)
    return(results.map((el,i)=>{
      return(
        <div key={i} className = 'results'>
          <section>
          {el.username}
          <p>{el.question_body}</p>
          <p>{el.answer_body}</p>
        </section>
        </div>
      )
      }))
    }
}

  render() {
    const{filter}=this.state
    const{SearchState}=this.props.state

    return(
      <div >
        Search results for {filter}
        {this.filterThings()}
      }
      </div>
    )
  }
}
export default Search;
