//Memorized sum of numbers

function sum() {
  let cache = {};
  return function (x, y) {
    if (cache[(x, y)]) {
      console.log(`already calculated sum of ${x} ${y}`);
      return cache[(x, y)];
    }
    console.log(`calculating sum of ${x} ${y}`);
    let result = y + x;
    cache[(x, y)] = result;
    console.log(result);
    return result;
  };
}

console.log("\n");
console.log("\n");
console.log("\n");

const memoizedSum = sum();
memoizedSum(4, 6);
memoizedSum(8, 9);
memoizedSum(4, 6);

//Currying sum of numbers
function outer() {
  let result = 0;
  return function sum(x) {
    if (!x) {
      return result;
    }
    result += x;
    return sum;
  };
}
let curryingSum = outer();

console.log(curryingSum(10)(20)(30)(40)(50)());

/*
Read about Function Currying & Create a Program to print list of names.
Example -
printList("Akshay")("Khurana")("Manisha")("Rahul") -
Output - Names are -  Akshay, Khurana, Manisha, Rahul*/

console.log("\n");
console.log("\n");
console.log("\n");

function outer1() {
  defaltStr = "Names are -";
  let resultone = "";
  return function str(x) {
    if (!x) {
      return resultone;
    }
    resultone += " " + x;
    return str;
  };
}
let nameStr = outer1();

console.log(
  nameStr("Names are:-")("Akshay,")("Khurana,")("Manisha,")("Rahul")()
);
