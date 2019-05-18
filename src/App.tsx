import React from "react";
import logo from "./logo.svg";
import Input from "./components/input";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.currentTarget.value)
          }
          value={value}
        />
      </header>
    </div>
  );
};

export default App;
