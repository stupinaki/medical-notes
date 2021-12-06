import React, {useCallback} from "react";

export function VisitDetailsInput({ name, placeholder, value = '', onChange }) {
    const handleChange = useCallback((e) => onChange(name, e.target.value), [onChange, name]);
    return (
        <input
            value={value}
            onChange={handleChange}
            name={name}
            className='visitDetailsForm__input'
            placeholder={placeholder}
        />
    )
}
