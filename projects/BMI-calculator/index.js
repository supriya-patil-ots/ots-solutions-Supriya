const lastResults = [];
function calculateBmi() {
  let heightInput = document.getElementById("height").value;
  let weightInput = document.getElementById("weight").value;

  let bmiResult = weightInput / (heightInput * heightInput);
  bmiResult = Math.round(bmiResult * 100) / 100;
  document.getElementById("bmiResult").innerHTML = bmiResult;
  resultWithSpase = " " + bmiResult;
  lastResults.push(resultWithSpase);
  document.getElementById("lastResult").innerHTML = lastResults + " ";

  if (heightInput <= 0 || weightInput <= 0) {
    alert("Enter valid number");
    document.getElementById("bmiResult").innerHTML = "";
    document.getElementById("lastResult").innerHTML = "";
    document.getElementById("bmiMsg").innerHTML = "";
  }
  //   console.log(bmiResult);

  if (lastResults.length == 10) {
    lastResults.shift();
  }

  //code for display message//
  if (bmiResult < 18.5 && bmiResult > 0) {
    const msg = "You are under Weight";
    document.getElementById("bmiMsg").innerHTML = msg;
    document.getElementById("bmiMsg").style.color = "red";
  } else if (bmiResult > 24.9 && bmiResult < 100) {
    const msg = "You are over Weight";
    document.getElementById("bmiMsg").innerHTML = msg;
    document.getElementById("bmiMsg").style.color = "red";
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    const msg = "Congratulations!!! You are fit";
    document.getElementById("bmiMsg").innerHTML = msg;
    document.getElementById("bmiMsg").style.color = "green";
  }

  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}
