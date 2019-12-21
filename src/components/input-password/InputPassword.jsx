import React from 'react';
import './InputPassword.css';

/**
 * InputPassword
 * @version v1.0.0
 * @param props.e
 * @param props.x
 * @param {*} props 
 */
const InputPassword = (props) => {

    const escuchador = (evento)  => {
        const {value} = evento.target;
        props.x(value);
    }
    return (
        <div className="input-password">
            <input type="password" 
                    placeholder="ingrese password"
                    value={props.e}
                    onChange={escuchador}
            ></input>
        </div>
    );
};

export default InputPassword;