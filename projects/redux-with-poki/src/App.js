import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import List from "./component/List";
import axios from "axios";
import "./App.css";
import Search from "./component/Search";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Search />
        <List />
      </Provider>
    </div>
  );
}

export default App;
