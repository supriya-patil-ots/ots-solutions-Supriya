//  let myMultily = function (num1, num2) {
//   let multiply = num1 * num2;
//   return multiply;
// };
// console.log(myMultily(2, 3));

// const radius=[1,2,3,4];

// const area=(radius)=>Math.PI*radius*radius;

// const calcWithHof=(radius,logic)=>{
//   const result=[]
//   for(let i=0;i<=radius.length;i++){
//     result.push(logic(radius[i]))
//   }
//   return result;
// }

// console.log(calcWithHof(radius,area))

// const arr=[1,2,3,4];

// const triple=(x)=>{
//   return x*3;
// }

// new_array=arr.map(triple);
// console.log(new_array)

// function max(arr){
//   let maxValue=arr[0];
//   for(i=0;i<=arr.lengh;i++){
//     if (arr[i] > max){
//             max = arr[i];
//     }
//     return max;
//   }
// }

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

let resultofusername = users.reduce((accumulator, currentIteration) => {
  if (currentIteration.age > 27) {
    accumulator.push(
      currentIteration.firstName + " " + currentIteration.lastName + " "
    );
  }
  return accumulator;
}, []);

console.log(resultofusername);

// 2. Question
/*
    const users = [
        { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
        { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
        { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
        { firstName: "Simran", lastName: "Kapoor", age: 27. gender: "female" },
    ];
    Output ->
    [
        {fullName: "Akshay Khurana", age: 27},
        {fullName: "Salman Khan", age: 55}
    ]
*/

// const users2 = [
//   { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
//   { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
//   { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
//   { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
// ];

// const output1 = users2
//   .filter((curr) => {
//     if (curr.gender == "male") {
//       return true;
//     }
//   })
//   .map((curr) => {
//     return { fullName: curr.firstName + " " + curr.lastName, age: curr.age };
//   });

// console.log(output1);
// 1st question code
const users3 = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

const output3 = users3
  .filter((curr) => {
    if (curr.gender == "female") {
      return true;
    }
  })
  .map((curr) => {
    return `My name is ${curr.firstName} ${curr.lastName}, I am  age:${curr.age} years old`;
  });

console.log(output3);

//2nd question code

const users4 = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

const useroutput = users4.reduce((acc, curr) => {
  if (curr.age == 27) {
    acc.push(curr.firstName + " " + curr.age);
  }
  return acc;
}, []);

console.log(useroutput);
