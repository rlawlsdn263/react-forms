import "./App.css";
import FormInput from "./components/FormInput/FormInput";
import { useState } from "react";

function App() {
  // useState에 Form객체를 초깃값으로 제공함
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  //리스트 렌더링을 위해 props가 담긴 배열을 만듦
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  //onChange 이벤트로 setValues()안에 전개 연산자로 이전의 객체값에서 변화된 값만 바꿈
  //[e.target.name]을 사용해 useState 객체 안에 e.target.name과 일치하는 이름을 찾아 가져오고
  //해당 state 데이터의 값만 e.target.value로 값을 변경함
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* 
          Array.map()으로 리스트 렌더링을 하고 받아온 props를 restProps로 풀어줌 
          value 속성의 값으로 values 상태변수가 가진 값 중에 input.name과 겹치는 값에 접근함
        */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>제출하기</button>
      </form>
    </div>
  );
}

export default App;
