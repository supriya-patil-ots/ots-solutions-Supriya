const tea = document.getElementById("tea");
const coffee = document.getElementById("coffee");
const milk = document.getElementById("milk");

const outer = document.getElementById("outer");

const list = document.getElementById("list");

// list.addEventListener("click", (e) => {
//   const backgroundcolor = e.target.style.backgroundColor;

//   if (backgroundcolor === "red") {
//     e.target.style.backgroundColor = "pink";
//   } else {
//     e.target.style.backgroundColor = "red";
//   }
// });

//event bubbling child to parent
// tea.addEventListener("click", () => {
//   tea.style.backgroundColor = "pink";
// });

// list.addEventListener("click", () => {
//   list.style.backgroundColor = "yellow";
// });

// outer.addEventListener("click", () => {
//   outer.style.backgroundColor = "black";
// });

//event capturing parent to child
// tea.addEventListener(
//   "click",
//   () => {
//     tea.style.backgroundColor = "pink";
//     console.log("child");
//   },
//   true
// );

// list.addEventListener(
//   "click",
//   () => {
//     list.style.backgroundColor = "yellow";
//     console.log("parent");
//   },
//   true
// );

// outer.addEventListener(
//   "click",
//   () => {
//     outer.style.backgroundColor = "black";
//     console.log("grandparents");
//   },
//   true
// );

// using capturing and bubbling together

outer.addEventListener(
  "click",
  () => {
    outer.style.backgroundColor = "black";
    console.log("grandparents");
  },
  true
); //capturing

tea.addEventListener(
  "click",
  () => {
    tea.style.backgroundColor = "pink";
    console.log("child");
  },
  false
); //bubbling

list.addEventListener(
  "click",
  () => {
    list.style.backgroundColor = "yellow";
    console.log("parent");
  },
  false
); //bubbling

//stop propogation

// outer.addEventListener(
//   "click",
//   (e) => {
//     outer.style.backgroundColor = "black";
//     console.log("grandparents");
//     e.stopPropagation();
//   },
//   true
// ); //bubbling

// tea.addEventListener(
//   "click",
//   () => {
//     tea.style.backgroundColor = "pink";
//     console.log("child");
//   },
//   true
// ); //capturing

// list.addEventListener(
//   "click",
//   () => {
//     list.style.backgroundColor = "yellow";
//     console.log("parent");
//   },
//   true
// );

// //event deligation
// tea.addEventListener("click", (e) => {
//   console.log(e.target.id);
// });
