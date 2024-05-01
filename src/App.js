import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.counter);
  // console.log(count);
  // const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
