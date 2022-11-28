var min = "0";
var sec = "00";

var interval;
function startTimer() {
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");
  sec++;

  if (sec < 60) {
    second.innerHTML = sec;
  }
  if (sec < 10) {
    second.innerHTML = "0" + sec;
  }
  if (sec > 20) {
    min += 1;
    console.log(min);
    minute.innerHTML = min;
    sec = 00;
    second.innerHTML = sec;
  }
  if (min < 10) {
    minute.innerHTML = "0" + min;
  }
  if (min < 60) {
    minute.innerHTML = min;
  }
  //   if ((min >= 59) & (sec >= 59)) {
  //     clearInterval(interval);
  //     minute.innerHTML = min;
  //     second.innerHTML = sec;
  //   }
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
