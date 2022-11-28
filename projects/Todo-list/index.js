var btn = document.getElementById("submit");
var arr = [];
btn.addEventListener("click", function () {
  let inputValue = document.getElementById("inputType").value;

  if (inputValue) {
    let listItem = document.createElement("li");
    listItem.innerText = inputValue;
    var list = document.getElementById("list");
    list.appendChild(listItem);

    let btnDlt = document.createElement("button");
    btnDlt.innerText = "delete";
    listItem.appendChild(btnDlt);
    btnDlt.type = "submit";
    btnDlt.style.backgroundColor = "red";
    btnDlt.style.color = "white";
    btnDlt.style.border = "none";
    btnDlt.style.padding = "7px 10px";
    btnDlt.style.margin = "10px";
    btnDlt.style.borderRadius = "4px";

    document.getElementById("inputType").value = "";
    btnDlt.addEventListener("click", function () {
      listItem.innerText = "";
    });

    arr.push(inputValue);
    console.log(arr);
    var i;
    for (i = 0; i < arr.length; i++) {}

    console.log(i);
    sessionStorage.setItem(i, inputValue);
  }
});

var persist = document.getElementById("persist");

persist.addEventListener("click", function () {
  for (i = 0; i <= sessionStorage.length; i++) {
    let data = sessionStorage.getItem(i);
    console.log(data);
    var listItemSessionData = document.createElement("li");
    list.appendChild(listItemSessionData);
    listItemSessionData.innerText = data;
  }
});
var clrBtn = document.getElementById("clear");

clrBtn.addEventListener("click", function () {
  var list = document.getElementById("list");
  list.innerHTML = "";
});
