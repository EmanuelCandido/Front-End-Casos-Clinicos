export default function CheckboxField({ label }) {
  return (
    <label className="checkbox-field">
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
}
