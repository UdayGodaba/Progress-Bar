import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prevVal) => Math.min(prevVal + 1, 100));
    }, 100);
  }, []);

  return (
    <div className="app">
      <div className="header">Progress Bar</div>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
