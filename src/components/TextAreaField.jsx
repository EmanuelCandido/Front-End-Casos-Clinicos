export default function TextAreaField({ label, placeholder, large = false, required = false }) {
  return (
    <label className="field field--full">
      <span className="field__label">
        {label}
        {required && <span className="field__required">*</span>}
      </span>
      <textarea
        className={`field__control field__control--textarea ${large ? 'field__control--textarea-large' : ''}`}
        placeholder={placeholder}
      />
    </label>
  );
}
