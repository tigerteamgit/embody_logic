
/* ---- Modal Controls ---- */

const modal = document.getElementById("wheelModal");
const openBtn = document.getElementById("openWheel");
const closeBtn = document.getElementById("closeWheel");

openBtn.onclick = () => {
modal.style.display = "flex";
};

closeBtn.onclick = () => {
modal.style.display = "none";
};


/* ---- Sound Player ---- */

function play(id){

document.querySelectorAll("audio").forEach(a=>{
a.pause();
a.currentTime = 0;
});

const audio = document.getElementById(id);
if(audio) audio.play();

}

function playClip(file){

const player = document.getElementById("player");

player.src = "sounds/" + file;

player.play();

}

/* ---- Button Handlers ---- */

document.querySelectorAll(".pad").forEach(btn=>{

btn.addEventListener("click", ()=>{

const sound = btn.dataset.sound;

play(sound);

});

});
