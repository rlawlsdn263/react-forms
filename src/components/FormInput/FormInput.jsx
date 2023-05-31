import "./FormInput.css";

function FormInput(props) {
  const { label, onChange, ...restProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...restProps} onChange={onChange} />
    </div>
  );
}

export default FormInput;
