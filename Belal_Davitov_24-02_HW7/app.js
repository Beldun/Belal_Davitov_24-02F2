const $countdown = document.getElementById("countdown");
const $start = document.getElementById("start");
const $stop = document.getElementById("stop");
const $restart = document.getElementById("restart");
const $hourglass = document.querySelector("#hourglass");

let timerInterval;

$start.addEventListener("click", () => {
    if ($countdown.innerText > 0) {
        $start.disabled = true;
        $hourglass.classList.add("rotating");
        timerInterval = setInterval(() => {
            $countdown.innerText--;
            if ($countdown.innerText == 0) {
                stopTimer();
            }
        }, 1000);
    }
});

$restart.addEventListener("click", () => {
    $countdown.innerText = 60
    stopTimer()
})

$stop.addEventListener("click", () => {
    stopTimer();
});

function stopTimer() {
    clearInterval(timerInterval);
    $start.disabled = false;
    $hourglass.classList.remove("rotating");
}