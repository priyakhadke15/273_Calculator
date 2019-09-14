import React, { Component } from 'react';
import Result from './Result';
import Keypad from './Keypad';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { result: '' }
    }
    render() {
        return (
            <div>
                <Result result={this.state.result} />
                <Keypad keyPress={this.keyPress.bind(this)} />
            </div>
        );
    }
    updateDisplay(key) {
        this.setState({ result: key });
    }

    keyPress(key) {
        let disp = this.state.result + key;
        if (key == '=') {
            alert("Equals");
        }
        else
            this.updateDisplay(disp)
    }
}
export default Calculator;