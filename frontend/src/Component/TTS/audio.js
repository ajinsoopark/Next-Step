import React, { Component } from 'react';
import createPonyfill from 'web-speech-cognitive-services/lib/SpeechServices';
import Say from 'react-say';
import Auth from "../../Auth/Auth"
import axios from "axios"

import {SayButton} from 'react-say';

// import { createSpeechSynthesisPonyfill } from 'web-speech-cognitive-services/lib/SpeechServices/TextToSpeech'


// import { speechSynthesis, SpeechSynthesisUtterance, SubscriptionKey } from 'web-speech-cognitive-services';
// const rp = require('request-promise');



export default class Audio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ponyfill:{},
      voice: {
        "Name": "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)",
        "ShortName": "cs-CZ-Jakub",
        "Gender": "Male",
        "Locale": "cs-CZ"
      }
    }
  }

    getAccessToken = (subscriptionKey) => {
   return axios({
        method: "post",
        url:
          "https://westus.api.cognitive.microsoft.com/sts/v1.0/issuetoken",
        headers: {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
        }
      }).then(response => {
        return(response.data)
      })
}


  async componentDidMount() {
    const key = '3aef4d0fd6904d808bd091cc3ce75b92'
    this.getAccessToken(key)
      .then(authorizationToken => {
        
        const config = {
          'region': 'westus',
          'subscriptionKey': key,
           "name": "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)",
        "shortName": "cs-CZ-Jakub",
        "gender": "Male",
        "locale": "cs-CZ"
          // authorizationToken,
        }

        return createPonyfill(config)
      })
      .then(ponyfill => {
        this.setState({ ponyfill })
      })
  }

  render() {
      if(this.state.ponyfill){
        return (
          <>
        <SayButton
          speak = {this.props.CurrentQuestion} >
          <img src = "https://img.icons8.com/material/35/000000/play-button-circled.png" alt  ="play_icon" />
          </SayButton>
                  
            <SayButton
               text="A quick brown fox jumped over the lazy dogs."
    speechSynthesis={ this.state.ponyfill.speechSynthesis }
    speechSynthesisUtterance={ this.state.ponyfill.SpeechSynthesisUtterance }
     >
     Hello Worlds </SayButton>
          </>
        )
      }
      else {
        return (
          <h1> NO WORKS </h1>
        )
      }
  }
}








    //     <SayButton
    //       speechSynthesis={ ponyfill.speechSynthesis }
    //       speechSynthesisUtterance={ ponyfill.SpeechSynthesisUtterance }
    //       SubscriptionKey = "3aef4d0fd6904d808bd091cc3ce75b92"
    // >
    //       <img src = "https://img.icons8.com/material/35/000000/play-button-circled.png" alt  ="play_icon" />
    //       </SayButton>




          // speechSynthesis={ this.props.ponyfill.speechSynthesis }
          // speechSynthesisUtterance={ this.props.ponyfill.SpeechSynthesisUtterance }