import React from 'react';
import '../index.css';

export default props => {
    const { keyPress, keyValue } = props;
    return (
        <button style={{ margin: "4px" }} onClick={() => keyPress(keyValue)
        } > {keyValue}</button >
    )
}

