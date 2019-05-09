import React, {Component} from "react"


// import { Link } from 'react-router-dom'

import "./about.css"

const developer1 = "https://media.licdn.com/dms/image/C5603AQFIPSvxiB8kvw/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=DCpNSVXrrm3uNMa3Uk3kGKGisDOUUNMbjiwbgsyx1qw"
const developer3 = "https://media.licdn.com/dms/image/C4D03AQEHt4b6oaU_9Q/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=GMoKxS9cojUu_B2UrA_Wj_38S5XWIr9bc5xlhTXqoG4"
const developer2 = require("../../Images/developer3.png")
const developer4 = require("../../Images/developer4.png")

const linkedIn = <svg className='aboutLogo' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
const gitHub = <svg className='aboutLogo' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>

const developers = {
  0 : ["Jhenya Ezhova", developer1, "https://www.linkedin.com/in/evgeniya-jhenya-ezhova/", "https://github.com/evgeniyaezhova"]
  ,
  1 : ["Tyson Pan", developer2, "https://www.linkedin.com/in/tysonpan/", "https://github.com/ThaiSonP" ]
  ,
  2: ["Alex Park", developer3, "https://www.linkedin.com/in/alex-park-jinsoo/", "https://github.com/ajinsoopark" ]
  ,
  3: ["Jacky Ong", developer4, "https://www.linkedin.com/in/jacky-ong/", "https://github.com/JJGITTY2018" ]
}

class About extends Component {

developers_map = (developers) =>{
  let developersValues = Object.values(developers)

  return developersValues.map(el => {
    return(
        <div key = {el[0]} className = "developer_info">
        <div className = "developer_image">
          <img src = {el[1]}  alt = "developer_profile" />
          </div>
          <h2>{el[0]}</h2>

          <div className = "developer_external" >
          <a href = {el[2]}>
              {linkedIn}
          </a>

          <a href = {el[3]}>
              {gitHub}
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
        <div className = "aboutHeader" >
          Next Step.
          <p>The platform where you hone your interview skills.</p>
      </div>
    <div className='aboutBodyContainer'>  
      <div className = "about_body">
        <div className = "about_body_headers">
        <h1> Platform </h1>
        <p>Next Step is an interactive web platform built to help you
            become a better candidate during the interview process. At Next
            Step you can practice answering behavioral and general interview
            questions while getting constructive feedback from professionals
            and other users.</p>
        </div>
      </div>

    <div className = "about_body">
        <div className = "about_body_headers">
        <h1> Practice </h1>
        <p> Next Step helps you keep track of how many questions you
            answer. You can watch your progress grow.
            Prepare now, and be
            ready for your future interview.</p>
        </div>
      </div>

    <div className = "about_body">
        <div className = "about_body_headers">
        <h1> Feedback </h1>
        <p> Collective reviews and constructive feedback from
            professional recruiters, field experts, and fellow job-seekers. Next Step
            gives you an open space to sharpen and deliver your
            interview answers. </p>
        </div>
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
