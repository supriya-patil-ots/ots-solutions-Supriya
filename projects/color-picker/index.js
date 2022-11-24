var firstValue = document.getElementById("fvalue").value;
var secondValue = document.getElementById("svalue").value;
var thirdValue = document.getElementById("tvalue").value;
var result = document.getElementById("result");

var color;

function fetchValue() {
  var firstValue = document.getElementById("fvalue").value;
  document.getElementById("red").innerHTML = firstValue + ",";
  var secondValue = document.getElementById("svalue").value;
  document.getElementById("green").innerHTML = secondValue + ",";
  var thirdValue = document.getElementById("tvalue").value;
  document.getElementById("blue").innerHTML = thirdValue;

  result.style.backgroundColor = `rgb(${firstValue}+${secondValue}+${firstValue})`;
}
