import React from 'react';
import '../index.css';

const Keypad = () => {
    return (
        <div className="button">
            <button type="submit" onClick={appendKey(1)} value="1" >1</button>

            <button type="submit" value="2" >2</button>
            <button type="submit" value="3" >3</button>
            <button type="submit" value="+" >+</button><br></br>
            <button type="submit" value="4" >4</button>
            <button type="submit" value="5" >5</button>
            <button type="submit" value="6" >6</button>
            <button type="submit" value="-" >-</button><br></br>
            <button type="submit" value="7" >7</button>
            <button type="submit" value="8" >8</button>
            <button type="submit" value="9" >9</button>
            <button type="submit" value="*" >*</button><br></br>
            <button type="submit" value=" ." >.</button>
            <button type="submit" value="0" >0</button>
            <button type="submit" value="=" >=</button>
            <button type="submit" value="/" >/</button><br></br>


        </div>
    );

    function appendKey(key) {
        console.log(key);

        alert(key);
    }
}
export default Keypad;

