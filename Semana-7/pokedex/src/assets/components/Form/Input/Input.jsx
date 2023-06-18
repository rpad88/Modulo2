import React from 'react'
import "./input.css"

export default function Input({fieldName, type="text", placeholder = "não informado"}) {
  return (
    <fieldset className='mb-3'>
        <label
            className="form-label" 
            htmlFor={fieldName} 
            >{fieldName}
        </label>
        <input 
            className="form-control"
            type={type} 
            placeholder={placeholder} 
            id={fieldName}
        />
        <small className='hide'></small>
    </fieldset>
  )
}
