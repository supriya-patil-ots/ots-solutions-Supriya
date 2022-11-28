setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM";

  if (hours < 12) {
    document.getElementById("session").innerHTML = session;
  }
  if (hours >= 12) {
    hours = hours - 12;
    session = "PM";
    document.getElementById("session").innerHTML = session;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("session").innerHTML = session;
});
