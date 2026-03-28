const icons = document.querySelectorAll(".icons"); 
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const player = document.getElementById("player");
const musicSpans = document.querySelectorAll(".container-musics span");
let min = 0;
let sec = 0;
let intervalo;
let working = false;
const startPause = document.getElementById('startAndPause');
    startPause.addEventListener("click", () => {
    if (working) {
        clearInterval(intervalo);
        intervalo = null;
        working = false;
        startPause.innerHTML = '<img src="images/pause.svg" width="80">';
    } else {
        start();
        working = true;
        startPause.innerHTML = '<img src="images/play.svg" width="80">'
    }
    });

// changing the minute number with icon
function click_minutes_up() {
    if (min < 60){
        min += 5;
        minutes.textContent = min
        console.log(minutes)
    }
}
function click_minutes_down() {
    if (min > 0) {
        min -= 5;
        minutes.textContent = min
    }
}

// changing the seconds number with icon
function click_seconds_up() {
    if (sec < 60){
        sec += 5;
        seconds.textContent = sec
    }
}
function click_seconds_down() {
    if (sec > 0) {
        sec -= 5;
        seconds.textContent = sec
    }
}

function reset() {
    document.querySelectorAll(".icons").forEach(icons => {
        icons.style.display = "block";
    });
    sec = 0
    min = 0
    minutes.textContent = 0;
    seconds.textContent = 0;
    clearInterval(intervalo);
    working = false;
    startPause.innerHTML = 'Start';
}

function start() {
    document.querySelectorAll(".icons").forEach(icons => {
        icons.style.display = "none";
    });
    
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        valor_seconds = Number(seconds.textContent);
        valor_minutes = Number(minutes.textContent);
        if (valor_minutes == 0 && valor_seconds == 0) {
            clearInterval(intervalo)
            return;
        }
        valor_seconds--;
   
        if (valor_seconds < 0) {
            valor_minutes--;
            valor_seconds = 59;
        }
        seconds.textContent = valor_seconds
        minutes.textContent = valor_minutes
    }, 1000);
} 

for (const span of musicSpans) {
    span.addEventListener("click", () => {
        player.pause();
        player.src = "music/" + span.id + ".mp3";

        player.play();

        musicSpans.forEach(s => s.classList.remove("active"));
        span.classList.add("active");
    })
}