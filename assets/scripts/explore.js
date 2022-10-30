// explore.js

//window.addEventListener('DOMContentLoaded', init);

//function init() {

//filling up possible voices
var voices;
window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices();
  const voice_select = document.getElementById('voice-select');
  for(let i = 0; i < voices.length; i++){
    //console.log(voices[i]);
    var newVoice = document.createElement('option');
    newVoice.value = voices[i].voiceURI;
    newVoice.text = voices[i].name + " " + "(" + voices[i].lang + ")";
    voice_select.add(newVoice);
  }

}

//getting voice, note: nothing selected is default voice
var currvoice;
const get_voice = document.getElementById('voice-select');
get_voice.addEventListener('change', setVoice);
function setVoice(event){
  for(let i = 0; i < voices.length; i++){
    if (event.target.value == voices[i].voiceURI){
      currvoice = voices[i];
    }
  }
}

//text is spoken allowed in correct accent & smile is changed
const button_speak = document.querySelector('button');
button_speak.addEventListener('click', speak);
function speak(event){
  const curr_smile = document.querySelector('img');
  curr_smile.src = "assets/images/smiling-open.png";
  const input = document.querySelector('textarea');
  const utterThis = new SpeechSynthesisUtterance(input.value);
  utterThis.voice = currvoice;
  window.speechSynthesis.speak(utterThis);
  utterThis.addEventListener('end', changeSmile);
  function changeSmile(event){
    const curr_smile = document.querySelector('img');
    curr_smile.src = "assets/images/smiling.png";
  }
}

//}



