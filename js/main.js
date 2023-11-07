function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function aleatorio() {

    var num = rand(0, 7);

    return num
}

function playAudio() {
    var audio = document.getElementById("music");
    var speakerSlash = document.getElementsByClassName("ph-speaker-slash")[0];
    var speakerHigh = document.getElementsByClassName("ph-speaker-high")[0];
  
    if (!audio.paused && !audio.ended) {
      audio.pause();
      speakerSlash.style.display = "block";
      speakerHigh.style.display = "none";
    } else {
      audio.play();
      speakerSlash.style.display = "none";
      speakerHigh.style.display = "block";
    }
  }
  
let aliens = ["bestashadow","boladecanhaoshadow","chamasshadow","insectoideshadow","massacinzentashadow","quatrobracosshadow","ultratshadow","xlr8shadow"]

document.querySelector(".shadowImage").innerHTML = `                     <div id="shadowImages">
<img src="img/shadow/${aliens[aleatorio()]}.png" alt="aliens" id="drag" width="400px" height="300px">
</div>
<div id="shadowImage" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`