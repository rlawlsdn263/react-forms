import "./App.css";
import FormInput from "./components/FormInput/FormInput";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  console.log(username);
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUsername={setUsername}></FormInput>
        <FormInput placeholder="Email"></FormInput>
        <FormInput placeholder="Full Name"></FormInput>
        <FormInput placeholder="Sth else"></FormInput>
      </form>
    </div>
  );
}

export default App;
