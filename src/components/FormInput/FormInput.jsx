import "./FormInput.css";

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username</label> */}
      <input name={props.name} placeholder={props.placeholder} />
    </div>
  );
}

export default FormInput;
