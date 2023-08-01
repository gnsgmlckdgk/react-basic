// import React, { Component } from 'react';
const React = require('react');
const { Component } = React;

// 숫자 4개를 겹치지 않게 랜덤하게 만드는 함수
function getNumbers() {

}

class NumberBaseball extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }

    onSubmitForm = (e) => {

    }

    onChangeInput = (e) => {

    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {['사과', '바나나', '포도', '귤', '감', '배', '밤'].map((v) => {
                        return (
                            <li>{v}</li>
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = NumberBaseball;