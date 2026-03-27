let minutes = document.getElementById('minutes')
let seconds = document.getElementById("seconds")
let min = 0;
let sec = 0;

// changing the minute number with icon
function click_minutes_up() {
    if (min < 60){
        min += 5;
        minutes.textContent = min
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
    sec = 0
    min = 0
    minutes.textContent = 0;
    seconds.textContent = 0;
}

