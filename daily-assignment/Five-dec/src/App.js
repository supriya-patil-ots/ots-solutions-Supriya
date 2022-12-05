import "./App.css";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

function App() {
  const arr = ["apple", "mango", "strawberry", "pinapple"];
  return (
    <div className="App">
      <h1>Hello, Good Morning!!!</h1>
      <InputComponent props={arr} />
      <ButtonComponent />
    </div>
  );
}

export default App;
