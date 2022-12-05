const root = ReactDOM.createRoot(document.getElementById("root"));

const age = prompt("Enter Your Age");
audultAge = 18 - age;

const adult = "You are an adult";
const NonAdult = `You are not an adult.You will be adult after ${audultAge} years`;

root.render(age >= 18 ? adult : NonAdult);
