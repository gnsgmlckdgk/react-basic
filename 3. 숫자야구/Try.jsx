const React = require('react');
const { Component } = React;

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.index + 1}. {this.props.value.fruit}</b> = {this.props.value.taste}
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
                <div>컨텐츠4</div>
                <div>컨텐츠3</div>
            </li>

        )
    }
}

module.exports = Try;