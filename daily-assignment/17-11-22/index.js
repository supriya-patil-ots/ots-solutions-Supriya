// create constructor function and make object using that CF

function emp(name, salary, age) {
  (this.name = name), (this.salary = salary), (this.age = age);
}

employee = new emp("Joey", 85000, 25);

console.log(employee);

// create constructor function and make object using that CF
// function Emp() {
//   (this.name = "Joey"), (this.salary = 85000), (this.age = 25);
// }

// employee = new Emp();

// console.log(employee);

//using memoized multiplication
function MulofNumbers() {
  let cache = {};

  return function (x, y) {
    if (cache[x + " " + y]) {
      console.log(`Already calculated Multiplication: ${x} ${y}`);

      return cache[(x, y)];
    }

    console.log(`Multiplication of ${x} ${y} is:`);

    const result = x * y;

    cache[x + " " + y] = result;

    console.log(result);
  };
}

const memorized = MulofNumbers();

memorized(4, 5);

memorized(16, 10);

memorized(4, 5);

memorized(3, 5);
