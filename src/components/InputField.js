import React from "react";

function InputField({type, name, label, validation, register, errors, children}){
    return (
        <label htmlFor={`${name}-field`}>
            {label}
            <input className={errors[name]? "input-field-warning" : "normal"}
                type={type}
                   id={`${name}-field`}
                   {...register(name, validation)}

            />
            {children}
            {errors[name] && <p>{errors[name].message}</p>}
        </label>
    )
}

export default InputField;