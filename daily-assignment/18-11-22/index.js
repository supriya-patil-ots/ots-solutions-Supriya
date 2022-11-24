// //task 2
const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9];
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]
const arr1 = [].concat.apply([], arr);
const flattenArray = [].concat.apply([], arr1);
const flattenArray1 = [].concat.apply([], flattenArray);
console.log(flattenArray1);

// function arrayOuter() {
//   let result = [];
//   return function flatArray(arr) {
//     if (!arr) {
//       return result;
//     }
//     if (result.length == 0) {
//       result = [].concat.apply([], arr);
//       return flatArray;
//     } else if (result.length != 0) {
//       result = [].concat.apply([], result);
//       return flatArray;
//     }
//   };
// }
// const flatArray = arrayOuter();

// console.log(flatArray([[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9]));

// task 3
a = [{ name: "amit" }, { name: "Akshay" }];
b = [
  { name: "sumit" },
  { name: "sam" },
  { name: "abhi" },
  { name: "Akshay" },
  { name: "akshay" },
  { name: "AMit" },
];
// const arr1 = a.map((element) => {
//   return element.toString().toUpperCase();
// });
// console.log(arr1);
// const arr2 = b.map((element) => {
//   return element.toString().toUpperCase();
// });
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]

const resultOfName = b.filter((curr) =>
  a.find(({ name }) => curr.name.toUpperCase() == name.toUpperCase())
);
console.log(resultOfName);

// / task 1
// call once function
// desc: create a function which can't be called more than once
const onceFunction = (function (a, b) {
  var invoked = false;
  if (!invoked) {
    return function sum(a, b) {
      invoked = true;
      let resultSum;
      resultSum = a + b;
      console.log(resultSum);
    };
  }
  throw "error";
})();

onceFunction(2, 3);
onceFunction(2, 4);
