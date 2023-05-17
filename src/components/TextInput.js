import React from "react";

function TextInput(type, name, label, formStateName, handleChange){
    return (
        <label htmlFor={`${name}-field`}>{label}
            <input type={type}
                   id={`${name}-field`}
                   name={name}
                   value={formStateName}
                   onChange={handleChange}
            />
        </label>
    )
}

export default TextInput;