import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
            className="input"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = '';
    }

    return (
        <div className="block">
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;