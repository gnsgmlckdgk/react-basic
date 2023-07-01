const React = require('react');
const { Component } = React;

class Gugudan extends Component {

    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
        result: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        const resultVal = this.state.first * this.state.second;

        if (parseInt(this.state.value) === resultVal) {

            this.setState((prevState) => {
                const resultMsg = `${prevState.first} x ${prevState.second} = ${resultVal} , 정답`;
                return {
                    result: resultMsg,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: "",
                }
            });

        } else {
            this.setState({
                result: "땡",
                value: "",
            });
        }

        this.input.focus();

    };

    onChange = (e) =>
        this.setState({
            value: e.target.value,
        });

    input;
    onInputRef = (c) => {
        this.input = c;
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.onInputRef} type="number" onChange={this.onChange} value={this.state.value} />
                    <button type="submit">입력!</button>
                    <div>{this.state.result}</div>
                </form>
            </React.Fragment>
        )
    }
}

module.exports = Gugudan;
