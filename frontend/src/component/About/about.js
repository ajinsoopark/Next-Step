import React, {Component} from "react"
import NavBar from "../landingPage/navBar"

import { Link } from 'react-router-dom'

const logo_linkdin = "https://img.icons8.com/office/25/000000/linkedin.png"
const logo_github = "https://img.icons8.com/material/25/000000/github.png"

const developers = { 
  0 : ["Jhenya Ezhova", "https://banner2.kisspng.com/20180419/tdq/kisspng-user-silhouette-my-account-icon-5ad833d36feb49.1187422515241184834584.jpg", "https://www.linkedin.com/in/evgeniya-jhenya-ezhova/", "https://github.com/evgeniyaezhova"]
  ,
  1 : ["Tyson Pan", "https://banner2.kisspng.com/20180419/tdq/kisspng-user-silhouette-my-account-icon-5ad833d36feb49.1187422515241184834584.jpg", "https://www.linkedin.com/in/tysonpan/", "https://github.com/ThaiSonP" ]
  ,
  2: ["Alex Park", "https://banner2.kisspng.com/20180419/tdq/kisspng-user-silhouette-my-account-icon-5ad833d36feb49.1187422515241184834584.jpg", "https://www.linkedin.com/in/alex-park-jinsoo/", "https://github.com/ajinsoopark" ]
  ,
  3: ["Jacky Ong", "https://banner2.kisspng.com/20180419/tdq/kisspng-user-silhouette-my-account-icon-5ad833d36feb49.1187422515241184834584.jpg", "https://www.linkedin.com/in/jacky-ong/", "https://github.com/JJGITTY2018" ]
}

class About extends Component {
constructor (props) {
  super(props)

}


developers_map = (developers) =>{


  return(
        
          <div className = "developer_info">
          <img src = "" />
          <h2></h2>

          <div className = "developer_external" >
          <a href = "">
              <img src=""/>
          </a>

          <a href = "">
              <img src=""/>
          </a>
          </div>
          </div>

  )
}





  render(){
    return (
      <>
      <NavBar /> 
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

        {""}

      </div>


  </div>
      </>
    )
  }






}


export default About