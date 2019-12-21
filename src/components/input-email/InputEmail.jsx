import React from 'react';
import './InputEmail.css';

/**
 * InputEmail
 * @version v1.0.0
 * @param props.value 
 * @param (Function)
 * @param {*} props 
 */
const InputEmail = (props) => {
    
        const handlerOnChange = (e) => {
            const {value} = e.target;
            props.onChange(value);
        }

        return (
            <div className="input-email">
                <input 
                placeholder="ingrese su mail" 
                value={props.value}
                onChange={handlerOnChange}></input>
            </div>
        );
    
};

export default InputEmail;