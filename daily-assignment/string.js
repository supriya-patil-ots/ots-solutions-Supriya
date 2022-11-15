/* string*/

// /* reverse number */
// const revnum=(num)=>{
//   let reverseNumber=num.toString().split("").reverse().join("");
//   console.log(reverseNumber)
// }
// revnum(891)

/* sentence with string and pattern */

// let str1="A man is walking beside the road";
// let arr1=str1.split(" ");

// for(let i=0;i<=arr1.length;i++){
//     arr1[i]=arr1[i].padEnd((arr1[i].length)+i+1,"*");
//     let result=arr1.join(" ");
//     console.log(result);
// }

/* sentence with string and pattern */

let str = "My name is Akshay khurana";
let str2 = str.split(" ");
let result;
for (let i = 0; i < str2.length; i++) {
  str2[i] = str2[i]
    .padStart(str2[i].length + i, "@")
    .padEnd(str2[i].length + 2 * i + 1, "*");
}
result = str2.join(" ");
console.log(result);
