export default function FormField({ label, placeholder, required = false, full = false, type = 'text' }) {
  return (
    <label className={`field ${full ? 'field--full' : ''}`}>
      <span className="field__label">
        {label}
        {required && <span className="field__required">*</span>}
      </span>
      <input className="field__control" placeholder={placeholder} type={type} />
    </label>
  );
}
