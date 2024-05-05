import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/uis/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log(globalOptions);
  const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };

  const [darkMode, setDarkMode] = useDarkMode();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(darkMode));
  };

  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;
