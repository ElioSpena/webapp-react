export default function InputsFieldBlock({
  htmlFor,
  labelTitle,
  error,
  inputName,
  inputValue,
  onChange,
  inputType,
  inputId,
}) {
  return (
    <div>
      <label className="form-label" htmlFor={htmlFor}>
        {labelTitle}
      </label>
      <input
        required
        className={`form-control ${error ? "is-invalid" : ""}`}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        type={inputType}
        id={inputId}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
