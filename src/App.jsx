import "./App.css";
import FormInput from "./components/FormInput/FormInput";
import { useRef } from "react";

function App() {
  const usernameRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username"></FormInput>
        <FormInput name="email" placeholder="Email"></FormInput>
        <FormInput name="fullname" placeholder="Full Name"></FormInput>
        <FormInput name="sth" placeholder="Sth else"></FormInput>
        <button>제출하기</button>
      </form>
    </div>
  );
}

export default App;
