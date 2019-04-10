import React, {Component} from "react"
import NavBar from ".././navbar/navBar"

import { Link } from 'react-router-dom'

import "./about.css"

const logo_linkdin = "https://img.icons8.com/windows/30/000000/linkedin.png"
const logo_github = "https://img.icons8.com/material/30/000000/github.png"

const developers = {
  0 : ["Jhenya Ezhova", "https://img.icons8.com/windows/96/000000/anonymous-mask.png", "https://www.linkedin.com/in/evgeniya-jhenya-ezhova/", "https://github.com/evgeniyaezhova"]
  ,
  1 : ["Tyson Pan", "https://img.icons8.com/windows/96/000000/anonymous-mask.png", "https://www.linkedin.com/in/tysonpan/", "https://github.com/ThaiSonP" ]
  ,
  2: ["Alex Park", "https://img.icons8.com/windows/96/000000/anonymous-mask.png", "https://www.linkedin.com/in/alex-park-jinsoo/", "https://github.com/ajinsoopark" ]
  ,
  3: ["Jacky Ong", "https://img.icons8.com/windows/96/000000/anonymous-mask.png", "https://www.linkedin.com/in/jacky-ong/", "https://github.com/JJGITTY2018" ]
}

class About extends Component {
constructor (props) {
  super(props)
}

developers_map = (developers) =>{
  let developersValues = Object.values(developers)

  return developersValues.map(el => {
    return(
        <div key = {el[0]} className = "developer_info">
          <img src = {el[1]}  alt = "developer_profile" />
          <h2>{el[0]}</h2>

          <div className = "developer_external" >
          <a href = {el[2]}>
              <img src= {logo_linkdin} alt = "linkdin logo" />
          </a>

          <a href = {el[3]}>
              <img src= {logo_github} alt = "github logo" />
          </a>
          </div>
          </div>
        
    )
    
  })
}


  render(){
    return (
      <>
  <div className = "about_component" >
        <div className = "about_page_titles" >
          <h1>  Welcome to Next Step, the site where you hone your skills. </h1>
      </div> 

    <div className = "about_body"> 
      <div className = "about_body_headers"> 
      <h1> The Platform For You </h1>
      <p> Next Step is for job-seekers that would like know what questions they should be prepare for. A hub for job-seekers to share their interview answers, and to recieve feedback from other job-seekers to prepare for their next interview!</p>
      </div>
    </div>

   <div className = "about_body"> 
      <div className = "about_body_headers"> 
      <h1> Practice </h1>
      <p> Next Step helps you keep track of how many questions you answer. You can watch your progress grow. 
      Rather than just reading a questions, Next Step allows you to hear the question like a real interview. Prepare now, and be ready for your future interview. </p>
      </div>
    </div>

   <div className = "about_body"> 
      <div className = "about_body_headers"> 
      <h1> Feedback </h1>
      <p> Collective reviews and construtive feedback from  interview professionals, field experts, and fellow job-seekers. Next Step gives you an open space for you to sharpen and deliver your interview answers.  </p>
      </div>
    </div>

      <div className = "about_body_developers"> 

        <div className = "about_page_titles" >
          <h1> Meet The Team </h1>
        </div>

        <div className = "developers" >
          {this.developers_map(developers)}
        </div>

      </div>

  </div>
      </>
    )
  }






}


export default About



