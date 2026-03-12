let Display = document.querySelector('.screen-timer span');

let Startbtn = document.querySelector('#startbtn');
let Stopbtn = document.querySelector('#Stopbtn');
let Resetbtn = document.querySelector('#Resetbtn');

let m = 0;
let s = 0;
let ms = 0;

let timerId;
let isStarted = false; 

let clickSound = new Audio("click.mp3")

function Startimer() {
    ms++;

    if (ms == 100) {
        s++;
        ms = 0;

        if (s == 60) {
            m++;
            s = 0;
        }
    }

    let m_ad = m < 10 ? `0${m}` : m;
    let s_ad = s < 10 ? `0${s}` : s;
    let ms_add = ms < 10 ? `0${ms}` : ms;

    Display.innerHTML = `${m_ad}:${s_ad}:${ms_add}`;
}

// Start button
Startbtn.addEventListener("click", () => {
        clickSound.play();

    if (!timerId) {
        timerId = setInterval(Startimer, 10);
        isStarted = true; // mark timer as started
    }
});

// Stop button
Stopbtn.addEventListener("click", () => {
        clickSound.play();

    if (!isStarted) {
        alert("First you start the timer!");
        return;
    }

    clearInterval(timerId);
    timerId = null;
});

// Reset button
Resetbtn.addEventListener("click", () => {
        clickSound.play();

    if (!isStarted) {
        alert("First you start the timer!");
        return;
    }

    clearInterval(timerId);
    timerId = null;

    m = 0;
    s = 0;
    ms = 0;

    Display.innerHTML = "00:00:00";
});
