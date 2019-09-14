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
        let disp = this.state.result;
        let url = 'http://localhost:3001/calculate'
        if (key == '=') {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ exp: disp })
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                this.updateDisplay(data.result);
            }).catch(function (data) {
                this.updateDisplay(data.result);
            }.bind(this));




        }

        else {
            disp = this.state.result + key;
            this.updateDisplay(disp);
        }

    }
}
export default Calculator;