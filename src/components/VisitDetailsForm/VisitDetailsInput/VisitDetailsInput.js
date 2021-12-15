import React, {useCallback} from "react";

export function VisitDetailsInput({ autoFocus, name, placeholder, value = '', onChange, type}) {
    const handleChange = useCallback((e) => onChange(name, e.target.value), [onChange, name]);
    return (
        <input
            value={value}
            onChange={handleChange}
            name={name}
            className='visitDetailsForm__input'
            placeholder={placeholder}
            type={type}
            required
            autoFocus={autoFocus}
        />
    )
}

