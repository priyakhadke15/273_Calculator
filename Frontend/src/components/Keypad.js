import React from 'react';
import '../index.css';
import Key from './Key'

const createKeypad = keyPress => {
    const arr = [];
    const op = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/',];
    for (let i = 0; i < 16; i++) {
        arr.push(<Key keyValue={op[i]} keyPress={keyPress} />);
        if ((i + 1) % 4 == 0) {
            arr.push(<br></br>)
        }
    }
    return arr;
}

export default props => {
    return (
        <div>
            {createKeypad(props.keyPress)}
        </div>
    );
}

