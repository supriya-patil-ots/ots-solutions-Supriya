var min = 00;
var sec = 00;

var interval;
function startTimer() {
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");

  if (sec > 60) {
    min = min + 1;
    minute.innerHTML = min;
    sec = 00;
    second.innerHTML = sec;
  }
  if (sec < 60) {
    second.innerHTML = sec;
  }
  if (min < 59) {
    minute.innerHTML = min;
  }
  if ((min >= 59) & (sec >= 59)) {
    clearInterval(interval);
    minute.innerHTML = min;
    second.innerHTML = sec;
  }
  sec++;
}

function onStart() {
  var stopButton = document.getElementById("stop");
  interval = setInterval(startTimer, 1000);
  stopButton.disabled = false;
  stopButton.style.backgroundColor = "red";
}

function onStopt() {
  clearInterval(interval);
}

function onReset() {
  clearInterval(interval);
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");
  var stopButton = document.getElementById("stop");
  stopButton.style.backgroundColor = "gray";
  stopButton.disabled = false;
  min = 00;
  sec = 00;
  minute.innerHTML = sec;
  second.innerHTML = min;
}
