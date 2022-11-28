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
    localStorage.setItem("tasks", JSON.stringify(arr));
  }
});

var persist = document.getElementById("persist");

persist.addEventListener("click", function () {
  let data = JSON.parse(localStorage.getItem("tasks"));
  arr = [...data];
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    var listItemSessionData = document.createElement("li");
    listItemSessionData.innerText = data[i];
    list.appendChild(listItemSessionData);
  }
});
var clrBtn = document.getElementById("clear");

clrBtn.addEventListener("click", function () {
  var list = document.getElementById("list");
  list.innerHTML = "";
});
