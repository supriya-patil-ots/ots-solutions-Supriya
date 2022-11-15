/*Using Reduce ->
[
    "Names - Akshay Khurana, Salman Khan, Riya Rajput, Simran Kapoor",
    "Sum of there age - SUM"
]
*/

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

const usersInfo = users.reduce((acc, curr) => {
  acc.push(`${curr.firstName} ${curr.lastName}`);
  return acc;
}, []);

console.log(usersInfo);

/* star and number pattern pattern

*1
**12
***123
****1234
*****12345
******123456

devide pattern in two parts

i=1   k=1    space=6  j=2
i=2   k=2    space=5  j=4
i=3   k=3    space=4  j=6
i=4   k=4    space=3  j=8
i=5   k=5    space=2  j=10
i=6   k=6    space=1  j=12

*/

let space = 5;

var text = "";

for (let i = 1; i <= 6; i = i + 1) {
  for (let l = 1; l <= space; l++) {
    text += " ";

    document.write("&nbsp&nbsp");
  }

  for (let j = 1; j <= i; j++) {
    document.write("*");
  }

  for (let k = 1; k <= i; k++) {
    if (k >= 1) {
      document.write(k);
    }
  }

  document.write("<br>");

  space--;
}
