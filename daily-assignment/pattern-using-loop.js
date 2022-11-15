// /* star pattern */
// for (let i=0; i<5; i++){
//     for(let j=0; j<=i; j++){
//         document.write("*" + " ")
//     }
//     document.write("<br>");

// }

// document.write("<br>");
// /* number pattern */

// for (let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>");

// }
// document.write("<br>");
// /* number and star pattern */

// for (let i=1; i<=7; i++){
//     for(let j=1; j<=i; j++){
//         if(i%2!==0){
//         document.write("*" + " ")
//         }else{
//             document.write(j + " ")
//         }

//     }
//     document.write("<br>");

// }
// document.write("<br>");

// console.log("\n")

/* star diamond pattern */
/*
i = 1, Space = 3
i = 3, Space = 2
i = 5, Space = 1
i = 7, Space = 0
*/

// var spaceCounter = 3;
// for (let i = 1; i <= 7; i = i + 2) {
//   var text = "";
//   // Loop for Space
//   for (let k = 1; k <= spaceCounter; k++) {
//     text = text + " ";
//   }
//   // Loop for Printing *
//   for (let j = 1; j <= i; j++) {
//     text = text + "*";
//   }
//   console.log(text + "\n");
//   spaceCounter--;
// }

// /*
// i = 5, Space = 1
// i = 3, Space = 2
// i = 1, Space = 3
// */

// var counter = 1;
// for (let i = 5; i >= 1; i = i-2) {
//   var text = "";
//   // Loop for Space
//   for (let k = 1; k <= counter; k++) {
//     text = text + " ";
//   }
//   // Loop for Printing *
//   for (let j = 1; j <= i; j++) {
//     text = text + "*";
//   }
//   console.log(text + "\n");
//   counter++
// }

/* and number pattern */

/*      formula for printing j
i=1     j= 1st position =j%2!==0 then print "*"
i=3     j= 2nd position =j%2==0 then print j i.e.2
i=5     
i=7
i=9
i=11
*/

for (let i = 1; i <= 11; i = i + 2) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 !== 0) {
      document.write("*" + " ");
    } else {
      document.write(j + " ");
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

/* 
i=1    j=1  print j 1st position A value=65 increment value of A by 1 and print it
i=2    j=2
i=3    j=3
i=4    j=4
i=5    j=5
*/

var alpha;
// /* to proint 1st triangle */
for (let i = 1; i <= 5; i++) {
  alpha = 65;
  for (let j = 1; j <= i; j++) {
    document.write(String.fromCharCode(alpha));
    alpha++;
  }
  document.write("<br>");
}
/* to print second triangle */
for (let i = 4; i >= 1; i--) {
  alpha = 65;
  for (let j = 1; j <= i; j++) {
    document.write(String.fromCharCode(alpha));
    alpha++;
  }
  document.write("<br>");
}
