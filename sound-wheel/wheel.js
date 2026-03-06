/* ---- Sound Player ---- */

function play(id){

const audio = document.getElementById(id);

if(!audio) return;

audio.currentTime = 0;
audio.play();

}
