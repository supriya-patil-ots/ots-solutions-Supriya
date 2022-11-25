setInterval(function () {
  var date = new Date();
  var hours = date.getHours();

  if (hours < 12) {
    document.getElementById("am/pm").innerHTML = "AM";
  }
  if (hours > 12) {
    hours = hours - 12;
    document.getElementById("am/pm").innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = hours;
  var minutes = date.getMinutes();
  document.getElementById("minutes").innerHTML = minutes;
  var sec = date.getSeconds();
  document.getElementById("seconds").innerHTML = sec;
});
