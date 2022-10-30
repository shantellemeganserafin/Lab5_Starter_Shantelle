// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

//jsconfetti 
const jsConfetti = new JSConfetti();
var horn;

//list for horn image and audio
const horn_list = [{
  horn: "air-horn",
  image: "assets/images/air-horn.svg",
  audio: "assets/audio/air-horn.mp3"
},
{
  horn: "car-horn",
  image: "assets/images/car-horn.svg",
  audio: "assets/audio/car-horn.mp3"
}, 
{
  horn: "party-horn",
  image: "assets/images/party-horn.svg",
  audio: "assets/audio/party-horn.mp3"

}]

//setting the image and audio source
const horn_select = document.getElementById('horn-select');
horn_select.addEventListener('change', setHorn);
function setHorn(event){
  for (let i = 0; i < horn_list.length; i++){
    if (horn_list[i].horn == event.target.value){
      horn = event.target.value;
      const curr_image = document.querySelector('img');
      curr_image.src = horn_list[i].image;
      const curr_audio = document.querySelector('audio'); 
      curr_audio.src = horn_list[i].audio;
      return;
    }
  }
}

//adjusting the sound and icon
const volume_controls = document.getElementById('volume-controls');
volume_controls.addEventListener('change', changeVolume);
function changeVolume(event){
  const curr_soundlevel = document.querySelector('input');
  const curr_audio = document.querySelector('audio');
  const curr_icon = volume_controls.querySelector('img');
  curr_audio.volume = curr_soundlevel.value/100;
  if (curr_soundlevel.value == 0){
    curr_icon.src = "assets/icons/volume-level-0.svg";}
  if (curr_soundlevel.value > 0 && curr_soundlevel.value < 33){
    curr_icon.src = "assets/icons/volume-level-1.svg";}
  if (curr_soundlevel.value > 32 && curr_soundlevel.value < 67){
    curr_icon.src = "assets/icons/volume-level-2.svg";}
  if (curr_soundlevel.value > 66){
    curr_icon.src = "assets/icons/volume-level-3.svg";}
}

//playing the sound & launching the confetti
const button_play = document.querySelector('button');
button_play.addEventListener('click', playAudio);
function playAudio(event){
  const curr_audio = document.querySelector('audio'); 
  const curr_image = document.querySelector('img');
  curr_audio.play();
  if(horn == 'party-horn'){
    jsConfetti.addConfetti();
  }
}

}

