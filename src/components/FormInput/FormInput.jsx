import "./FormInput.css";

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username</label> */}
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
}

export default FormInput;
