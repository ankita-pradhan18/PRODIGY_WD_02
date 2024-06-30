
document.addEventListener('DOMContentLoaded', () => {
    // Define vars to hold time values
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    // Define vars to hold "display" value
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;

    // Define var to hold setInterval() function
    let interval = null;

    // Define var to hold stopwatch status
    let status = "stopped";

    // Stopwatch function (logic to determine when to increment next value, etc.)
    function stopWatch() {
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }

        displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
        displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
        displayHours = (hours < 10) ? "0" + hours : hours;

        document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }

    function startStop() {
        if (status === "stopped") {
            interval = window.setInterval(stopWatch, 1000);
            document.getElementById("startStop").innerHTML = "Stop";
            status = "started";
        } else {
            window.clearInterval(interval);
            document.getElementById("startStop").innerHTML = "Start";
            status = "stopped";
        }
    }

    function reset() {
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
        document.getElementById("laps").innerHTML = "";
    }

    function lap() {
        if (status === "started") {
            const lapTime = document.createElement("div");
            lapTime.textContent = document.getElementById("display").innerText;
            document.getElementById("laps").appendChild(lapTime);
        }
    }

    // Add event listeners to the buttons
    document.getElementById("startStop").addEventListener("click", startStop);
    document.getElementById("reset").addEventListener("click", reset);
    document.getElementById("lap").addEventListener("click", lap);
});
