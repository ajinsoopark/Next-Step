import React, { Component } from 'react';
// import createPonyfill from 'web-speech-cognitive-services/lib/SpeechServices';
import Say from 'react-say';

import {SayButton} from 'react-say';

// import { createSpeechSynthesisPonyfill } from 'web-speech-cognitive-services/lib/SpeechServices/TextToSpeech'


// import { speechSynthesis, SpeechSynthesisUtterance, SubscriptionKey } from 'web-speech-cognitive-services';
// const rp = require('request-promise');



export default class Audio extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
    render() {

      if(this.props.ponyfill){
        return (
        
        <SayButton
          speak = {this.props.CurrentQuestion} >
          <img src = "https://img.icons8.com/material/35/000000/play-button-circled.png" alt  ="play_icon" />
          </SayButton>
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