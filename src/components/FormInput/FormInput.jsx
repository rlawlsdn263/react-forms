import "./FormInput.css";

function FormInput(props) {
  const { label, errorMessage, onChange, ...restProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...restProps} onChange={onChange} required />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
