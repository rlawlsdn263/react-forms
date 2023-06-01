import { useState } from "react";
import "./FormInput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...restProps } = props;

  function handleFocus() {
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...restProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
