import "./FormInput.css";

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username</label> */}
      <input ref={props.usernameRef} placeholder={props.placeholder} />
    </div>
  );
}

export default FormInput;
