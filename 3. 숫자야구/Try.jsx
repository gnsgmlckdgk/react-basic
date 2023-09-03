const React = require('react');
const { Component } = React;

class Try extends Component {
    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>

        )
    }
}

module.exports = Try;