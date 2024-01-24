import { useState } from "react";
import "./App.css";
import Plans from "./components/Plans";
import Sidebar from "./components/Sidebar";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="main">
      {/* Sidebar */}
      <Sidebar isActive={isActive} />
      {/* Plans */}
      <Plans isActive={isActive} handleClick={handleClick} />
    </div>
  );
}

export default App;
