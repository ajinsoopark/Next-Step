import { createSpeechSynthesisPonyfill } from 'web-speech-cognitive-services/lib/SpeechServices/TextToSpeech';
 
const {
  speechSynthesis,
  SpeechSynthesisUtterance 
} = await createSpeechSynthesisPonyfill({
  region: 'westus',
  subscriptionKey: 'YOUR_SUBSCRIPTION_KEY'
});
 
const utterance = new SpeechSynthesisUtterance('Hello, World!');
 
await speechSynthesis.speak(utterance);