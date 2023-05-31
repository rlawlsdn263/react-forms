import "./App.css";
import FormInput from "./components/FormInput/FormInput2";
import { useRef } from "react";

function App() {
  const usernameRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(usernameRef);
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput usernameRef={usernameRef} placeholder="Username"></FormInput>
        <FormInput placeholder="Email"></FormInput>
        <FormInput placeholder="Full Name"></FormInput>
        <FormInput placeholder="Sth else"></FormInput>
        <button>제출하기</button>
      </form>
    </div>
  );
}

export default App;
