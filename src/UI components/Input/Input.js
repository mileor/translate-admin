import React from "react"

function Input(props) {
    return (
        <div className="form-group mb-4">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type="text" 
                className="form-control" 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onChange} 
                readOnly={props.isDisabled} 
                data-toggle="tooltip" 
                data-placement="top" 
                title={props.titleTooltip}
                required 
            />
            <div className="invalid-feedback">
                Поле обязательно для заполнения
            </div>
        </div>
    )
}

export default Input;