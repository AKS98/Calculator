import React from 'react'
import CalculatorButton from '../Button'
import Display from '../Display'
let valuesArray = [];
let operation = null;
class Calculator extends React.Component {
    state = {
        value: ""
    }
    calc = (number) => {
        const values = +`${this.state.value}${number}`
        this.setState(
            {
                value: values
            }
        );
    }
    operation = (ops) => {
        operation = ops;
        valuesArray.push(this.state.value);
        this.setState(
            {
                value: ""
            }
        )
    }
    equal = () => {
        let res = 0;
        valuesArray.push(this.state.value)
        if (operation == "+") {
            res = Number(valuesArray[0]) + Number(valuesArray[1])


        }
        if (operation == "-") {
            res = Number(valuesArray[0]) - Number(valuesArray[1])

        }
        if (operation == "*") {
            res = Number(valuesArray[0]) * Number(valuesArray[1])

        }
        if (operation == "/") {
            res = Number(valuesArray[0]) / Number(valuesArray[1])

        }
        this.setState(
            { value: res }
        )

    }
    render() {
        return (
            <div className="container">
                <h1>Calculator</h1>
                <table border="3" id="tab">
                    <tr>
                        <td colSpan="4"><input type="text" id="display" value={this.state.value} /></td>
                    </tr>
                    <tr className="numberRow">
                        {
                            [7, 8, 9, "+"].map((text) => {
                                if (typeof (text) == "number") return (<CalculatorButton key={text+"key"} value={text} calculate={this.calc}></CalculatorButton>)
                                return (<CalculatorButton key={text+"key"} value={text} calculate={this.operation}></CalculatorButton>)
                            }
                            )
                        }

                    </tr>
                    <tr className="numberRow">
                        {
                            [4, 5, 6, "-"].map((text) => {
                                if (typeof (text) == "number") return (<CalculatorButton key={text+"key"} value={text} calculate={this.calc}></CalculatorButton>)
                                return (<CalculatorButton key={text+"key"} value={text} calculate={this.operation}></CalculatorButton>)
                            }
                            )
                        }

                    </tr>
                    <tr className="numberRow">
                        {
                            [1, 2, 3, "*"].map((text) => {
                                if (typeof (text) == "number") return (<CalculatorButton key={text+"key"} value={text} calculate={this.calc}></CalculatorButton>)
                                return (<CalculatorButton key={text+"key"} value={text} calculate={this.operation}></CalculatorButton>)
                            }
                            )
                        }

                    </tr>
                    <tr className="numberRow">
                        {
                            ["=", 0, ".", "/"].map((text) => {
                                if (typeof (text) == "number" || { text } == ".") return (<CalculatorButton key={text+"key"} value={text} calculate={this.calc}></CalculatorButton>)
                                if (text == "=") return (<CalculatorButton key={text+"key"} value={text} calculate={this.equal}></CalculatorButton>)
                                return (<CalculatorButton key={text+"key"} value={text} calculate={this.operation}></CalculatorButton>)
                            }
                            )
                        }

                    </tr>
                    <tr>
                        <td colSpan="4"><button type="button" id="clear" onClick="clearAll()">CLEAR ALL</button></td>
                    </tr>
                </table>
                <p id="print"></p>
            </div>
        )
    }
}
export default Calculator;