import { useState } from 'react';
import Icon from './Icon.jsx';

export default function SelectField({ label, options = [], required = false, value }) {
  const selectOptions = options.length > 0 ? options : [value];
  const [selectedValue, setSelectedValue] = useState(value);

  return (
    <label className="field">
      <span className="field__label">
        {label}
        {required && <span className="field__required">*</span>}
      </span>
      <span className="select-field">
        <span className="select-field__value">{selectedValue}</span>
        <select
          aria-label={label}
          onChange={(event) => setSelectedValue(event.target.value)}
          value={selectedValue}
        >
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon name="chevronDown" size={24} />
      </span>
    </label>
  );
}
